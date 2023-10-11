import React,{useState} from "react";

const BackgroundColor = ()=>{
  const [bgVal, setBgVal] = useState("white")
  console.log(`the value iof color: ${bgVal}`)
  return(
    <>
    <div>
    <div className={`home max-h-full bg-${bgVal}-300`} style={{height: "90vh"}}> Click on button to change color</div>
    <div className="button flex gap-2 justify-center item-center border-2 ">
    <button className="bg-red-200 rounded-md border-2 px-2 mx-3" onClick={()=> setBgVal("red")}>Red</button>
    <button className="bg-yellow-200 rounded-md border-2 px-2 mx-3" onClick={()=> setBgVal("yellow")}>Yellow</button>
    <button className="bg-white-200 rounded-md border-2 px-2 mx-3" onClick={()=> setBgVal("orange")}>White</button>
    <button className="bg-blue-200 rounded-md border-2 px-2 mx-3" onClick={()=> setBgVal("blue")}>Blue</button>
    <button className="bg-green-200 rounded-md border-2 px-2 mx-3" onClick={()=> setBgVal("green")}>Green</button>
    <button className="bg-gray-200 rounded-md border-2 px-2 mx-3" onClick={()=> setBgVal("gray")}>gray</button>
    <button className="bg-purple-200 rounded-md border-2 px-2 mx-3" onClick={()=> setBgVal("purple")}>purple</button>
    </div>
      
    </div>
    </>
  )
}
export default BackgroundColor;