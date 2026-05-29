import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'


root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
 <App />  
) 

/*
const Button = ({ text }) => {
  return (
    <button>
      {text}
    </button> 
  )
}

root.render(
  <React.Fragment>
    // los nombnres de los componentes deben empezar con mayuscula se usa PascalCase
    <Button text="Click me!" />

  </React.Fragment>,
)
*/