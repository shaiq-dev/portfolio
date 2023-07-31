export interface HygrapghOptions {
  publishAfterCreate: boolean
  publishAfterUpdate: boolean
}

export class HygraphService {
  private static _instance: HygraphService
  private _endpoint: string
  private _token: string
  private _hpEndpoint: string

  private _options: HygrapghOptions = {
    publishAfterCreate: true,
    publishAfterUpdate: true,
  }

  constructor() {
    if (
      process.env.HYGRAPH_CONTENT_ENDPOINT === undefined ||
      process.env.HYGRAPH_TOKEN === undefined ||
      process.env.HYGRAPH_HP_CONTENT_ENDPOINT === undefined
    ) {
      throw new Error('Can not initialize Hygraph, config not found')
    }

    this._endpoint = process.env.HYGRAPH_CONTENT_ENDPOINT
    this._token = process.env.HYGRAPH_TOKEN
    this._hpEndpoint = process.env.HYGRAPH_HP_CONTENT_ENDPOINT
  }

  static instance() {
    if (!HygraphService._instance) {
      HygraphService._instance = new HygraphService()
    }

    return HygraphService._instance
  }

  private async _makeRequest(
    query: string,
    target: 'content' | 'hp' = 'content'
  ) {
    const response = await fetch(
      target === 'hp' ? this._hpEndpoint : this._endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${this._token}`,
          ...(target === 'hp'
            ? {}
            : { Authorization: `Bearer ${this._token}` }),
        },
        body: JSON.stringify({ query }),
      }
    )
    const data = await response.json()

    return data.data
  }

  setOptions(options: Partial<HygrapghOptions>) {
    Object.entries(options).forEach(([k, v]) => {
      if (v !== undefined) {
        this._options[k as keyof HygrapghOptions] = v
      }
    })
  }

  async create(table: string, fields: string): Promise<string> {
    const query = `
        mutation {
            create${table}(
                data: { ${fields} }
            ) {
                id
            }
        }
    `

    const resp = await this._makeRequest(query)
    const id = resp[`create${table}`].id

    if (this._options.publishAfterCreate) {
      await this.publish(table, id)
    }

    return id
  }

  async publish(table: string, id: string) {
    const query = `
        mutation {
            publish${table}(
                where : { id : "${id}" },
                to : PUBLISHED
            ) { 
                id 
            }
        }
    `
    return await this._makeRequest(query)
  }

  /**
   * Execute the gql query on hygraphs hight performance readonly
   * content api
   */
  async executeHpcQuery(query: string) {
    return await this._makeRequest(query, 'hp')
  }
}
