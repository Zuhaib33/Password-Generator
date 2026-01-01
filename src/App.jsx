import { useState, useEffect } from 'react'
import './App.css'


function App() {
  let [password, Setpassward] = useState("")
  let [number, SetNumber] = useState(false)
  let [character, setCharacter] = useState(false)
  let [range, setRange] = useState(8)
  let [bgColor, setBgColor] = useState("olive");
  let [genratePass, setGenratepass] = useState(false)


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const randomColor = `rgb(
  //       ${Math.floor(Math.random() * 256)},
  //       ${Math.floor(Math.random() * 256)},
  //       ${Math.floor(Math.random() * 256)}
  //     )`;
  //     setBgColor(randomColor);
  //   }, 1000);

  //   return () => clearInterval(interval); // cleanup
  // }, []);
  useEffect(() => {
    setInterval(() => {
      let interval = `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`
      setBgColor(interval)
    }, 1000
    )

  }
    , []
  );



  let genratePss = () => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if (number) str += "1234567890"
    if (character) str += "|\!@#$%^&*<,.>?"
    for (let i = 1; i <= range; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str[random]

    }
    Setpassward(pass)
    console.log(password)



  }
  useEffect(genratePss, [range, character, number, genratePass])

  let Copy = () => {
    navigator.clipboard.writeText(password)
    alert("Password copied!")
  }
  let newPass = () => {
    setGenratepass(!genratePass)
  }




  return (
    <div id="mainContainer" style={{ backgroundColor: bgColor }}>
      <h1>Random Password Generator</h1>
      <div id="container">

        <input type="text"

          value={password}
          className='input' />
        <button
          onClick={Copy} >Copy</button>
        <div>
          <input type="range"
            
            id="lenght" max={20} min={5}
            value={range}
            onChange={(e) => setRange(e.target.value)} />
            <br />
          <label htmlFor="Lenght">Lenght:{range}</label>
          <br />

          <input type="checkbox"
            id='Number'
            //  value={number}
            onChange={() => {
              SetNumber((prev) => !prev)
            }
            } />
          <label htmlFor='Number'>Number</label>

          &nbsp;&nbsp;&nbsp;

          <input type="checkbox"
            id="character"
            // value={character}
            onChange={() => {
              setCharacter((prev) => !prev)
            }
            } />
          <label htmlFor='character' >Character</label>

        </div>
        <button
          onClick={newPass} > Generat Password</button>
      </div>

    </div>
  )
}

export default App
