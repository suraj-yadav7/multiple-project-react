import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./App.css"

//creating html element using react method "createElement"
/*
const ReactElem = React.createElement(
  'a',
  { href: "https://www.twitter.com", target: "_blank" },
  "Click here for twitter"
)
*/
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<App />
)