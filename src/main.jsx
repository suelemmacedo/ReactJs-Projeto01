import React from 'react' // pacote responsável pelo coração do react
import ReactDOM from 'react-dom/client' // integração do cor do react com a dom (document object model), que é a representação do nosso html através do JS.
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
