import './App.scss';
import { useState } from "react"

function App() {

  let [weight, setWeight] = useState("")
  let [height, setHeight] = useState("")
  let [BMI, setBMI] = useState("Your BMI")
  let [message, setMessage] = useState("Weight Status")

  let calcBMI = () => {
    if (weight === 0 || weight === "" || height === 0 || height === "") {
      alert("Please enter your height and weight correctly")
    }
    else {
    height = height / 100
    let bmi = weight / (height * height)
    setBMI(bmi.toFixed(1))
    if(bmi<18.5) {
      setMessage("Underweight")
    }
    else if(bmi>18.5 && bmi<24.9) {
      setMessage("Normal weight")
    }
    else if(bmi>=18.5 && bmi<24.9) {
      setMessage("Normal weight")
    }
    else if(bmi>=25.0 && bmi<29.9) {
      setMessage("Overweight")
    }
    else if(bmi>=30.0 && bmi<34.9) {
      setMessage("Obesity class 1")
    }
    else if(bmi>=35.0 && bmi<39.9) {
      setMessage("Obesity class 2")
    }
    else if(bmi>=40.0) {
      setMessage("Obesity class 3")
    }
  }
}

let clearAll = () => {
  window.location.reload()
}

return (
  <div className="App">
    <header>
      <h2>BMI Healthy Weight Calculator</h2>
    </header>
    <main>
      <div className="first">
        <span>Body Mass Index (BMI) = </span>
        <span className="BMI">{BMI}</span>
        <p className="weight">{message}</p>
      </div>
      <div className="second">
        <input placeholder='000 cm' value={height} onChange={(e) => setHeight(e.target.value)} className="heightInp" type="number" />
        <span className="heightSpan">Height (cm)</span>
        <input placeholder='00/000 kg' value={weight} onChange={(e) => setWeight(e.target.value)} className="weightInp" type="number" />
        <span className="weightSpan">Weight (kg)</span>
      </div>
      <div className="third">
        <button onClick={calcBMI}>Submit</button>
        <button onClick={clearAll}>Clear</button>
      </div>
    </main>
  </div>
);
}

export default App;
