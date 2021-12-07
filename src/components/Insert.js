import React , {useState} from 'react'

function Insert() {
    const [bmi, setBmi] = useState()
    const [info, setInfo] = useState()
    const [height, setHeight] = useState()
    const [weight , setWeight] = useState()

    const handleBmi=()=>{
        let val = ([Number(weight)/Number(height)/Number(height)]*10000).toFixed(1)

        setBmi(val)

        if(val < 18.5){
            setInfo('Under weight')
        }
        else if(val >= 18.5 && val <= 24.9){
            setInfo("Normal")
        }
        else if(val >= 24.9 && val < 30){
            setInfo("Overweight")
        }
        else{
            setInfo("Obesity")
        }
    }
    return (
        <div >
            <h1>BMI Calculator</h1>
            
            <div className="container">
            <label>
                Height (cm) :
                <input type="text" maxLength="3" minLength="2" id="height" 
                placeholder="Height" 
                onChange={(e)=>setHeight(e.target.value)}/>
            </label>
            <br/>
            <label>
                Weight (kg) :
                <input type="text" maxLength="3" minLength="1" id="weight"
                placeholder="Weight"
                onChange={(e)=>setWeight(e.target.value)}/>
            </label>
            <br/>
            <button className="btn btn-blue" onClick={handleBmi}>
                Calculate
            </button>
            <p>Body Mass Index(BMI) </p>
            <h2>{bmi}</h2>
            <h2>{info}</h2>
            </div>
        </div>
    )
}

export default Insert
