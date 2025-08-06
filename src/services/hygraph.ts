export interface HygrapghOptions {
  publishAfterCreate: boolean
  publishAfterUpdate: boolean
}

export type HygraphEndpointTarget = 'hp' | 'content'

export type HygraphDataField = string | number | boolean

export type HygraphTable = 'Connect'

export default class HygraphService {
  private static _instance: HygraphService
  private _endpoint: string
  private _token: string
  private _hpEndpoint: string

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

  static getInstance() {
    if (!HygraphService._instance) {
      HygraphService._instance = new HygraphService()
    }

    return HygraphService._instance
  }

  private async _request(query: string, target: HygraphEndpointTarget = 'content') {
    const response = await fetch(target === 'hp' ? this._hpEndpoint : this._endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(target === 'hp' ? {} : { Authorization: `Bearer ${this._token}` }),
      },
      body: JSON.stringify({ query }),
    })
    const data = await response.json()

    return data.data
  }

  private _createFieldMap(fields: Record<string, HygraphDataField>) {
    return Object.entries(fields)
      .reduce((acc, [key, value], index) => {
        return `${acc}${key}: "${value}", `
      }, '')
      .slice(0, -2)
  }

  async create(
    table: HygraphTable,
    fields: Record<string, HygraphDataField>,
    publish = true
  ): Promise<string> {
    const query = `
      mutation {
          create${table}(
              data: { ${this._createFieldMap(fields)} }
          ) {
              id
          }
      }
    `

    const resp = await this._request(query)
    const id = resp[`create${table}`].id

    if (publish) {
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

    return await this._request(query)
  }

  /**
   * Execute the gql query on hygraphs high performance readonly
   * api or read/write content api
   */
  async query(query: string, target: HygraphEndpointTarget = 'hp') {
    return await this._request(query, target)
  }
}
