import React,{useEffect,useState} from "react"


function useCurrency(currency){
  const [data, setData]=useState({})

  useEffect((){
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((response)=> response.json())
    .then((result)=> setData(result[currency]))
    .catch((error)=> console.log("Error occured while fetching data: ", error))
    console.log("the data is: ", data)
  },[currency])
}

export default useCurrency;