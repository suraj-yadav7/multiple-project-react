import './App.css'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Counter from "./components/01Counter.jsx"
import BackgroundColor from "./components/02BackgroundColor.jsx"
import PasswordGenerator from "./components/03PasswordGenerator.jsx"
import CurrencyConverter from "./components/04CurrencyConv/04CurrencyConverter.jsx"

export default function App() {

  return (
    <>
      <Navbar />
      {/* <Counter /> */}
      {/* <BackgroundColor /> */}
      {/* <PasswordGenerator /> */}
      <CurrencyConverter />
    </>
  )
};