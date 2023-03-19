import { Card } from './components/Card/Card'
import { TopImage } from './components/Card/Card'

import './App.css'

function App() {
  return (
    <div className="App">
      <Card
        topImage={
          <TopImage src="src/static/images/image-qr-code.png" alt="QR Code" />
        }
      />
    </div>
  )
}

export default App
