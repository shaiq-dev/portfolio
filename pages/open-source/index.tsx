import { withLayout } from 'layout/index'

function OpenSource() {
  return (
    <div>
      <div
        style={{
          height: '120px',
          background: '#fff',
        }}
      ></div>
      <div style={{ height: '2500px', background: '#fff' }}></div>
    </div>
  )
}

export default withLayout(OpenSource)
