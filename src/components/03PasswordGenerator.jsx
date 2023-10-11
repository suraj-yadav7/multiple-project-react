import React, { useState, useEffect, useRef, useCallback } from "react"

const PasswordGenerator = () => {

  const [passVal, setPassVal] = useState(0)
  const [numAllowed, setNumAllowed] = useState(false)
  const [symbolAllowed, SetSymbolAllowed] = useState(false)
  const [len, setLen] = useState(4)

  const passwordRef = useRef()
  console.log("the passval: " + passVal + "  num: " + numAllowed + " symbol: " + symbolAllowed + "  len:  " + len)
  const passwordGenerator = useCallback(() => {
    let initialStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) initialStr += "0123456789"
    if (symbolAllowed) initialStr += "@#$%^&*(){}[]"
    if (len >= 4) {
      let passVal = ""
      for (let i = 1; i <= len; i++) {
        let random = Math.floor(Math.random() * initialStr.length);
        console.log("random", random)
        passVal += initialStr.charAt(random)
        console.log("the pass value ", passVal)
      }
      setPassVal(passVal)
    }
  }, [len, numAllowed, symbolAllowed, setPassVal])

  const passwordCopy = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(passVal)
  }, [])
  useEffect(() => {
    passwordGenerator()
  }, [len, numAllowed, symbolAllowed])

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5">
        <h3 className="text-xl">Password Generator</h3>
        <div className="passwordContainer">
          <input type="text" ref={passwordRef} readOnly className="border-4 " value={passVal} />
          <button className="bg-blue-300 border-2 rounded-md p-1 mx-2" onClick={passwordCopy}>Copy</button>
        </div>
        <div className="flex gap-1">
          <div className=" my-2" id="myRange" style={{ marginRight: "5px" }} >
            <input type="range" className="border-2" min={4} max={20} onChange={(e) => setLen(e.target.value)} value={len} />
            <label>Length {len}</label>
          </div>
          <input type="checkbox" id="num" defaultChecked={numAllowed} onChange={() => setNumAllowed((prev) => !prev)} />
          <lable HTMLfor="num" style={{ marginRight: "16px" }}>Number</lable>
          <input type="checkbox" id="str" defaultChecked={symbolAllowed} onChange={() => SetSymbolAllowed((prev) => !prev)} />
          <lable HTMLfor="str" >Special Char</lable>
        </div>
      </div>
    </>
  )
};

export default PasswordGenerator;