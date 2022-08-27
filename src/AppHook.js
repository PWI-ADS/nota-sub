import { useState } from "react"

const NotaSub = () => {
    const [Nota, setNota] = useState('')
    const [option, setOption] = useState('')
    const [result, setResult] = useState('')

    const calcularNota = () => {
          if(option === "Sub G1"){
           const Valor = (21 - (Nota * 2))
            setResult(Valor)
            }else{
              const Valor = (21 - Nota) / 2
              setResult(Valor)
            };
      }
  
    return(

        <div>
          <h1>Calcular Nota da Sub</h1>
          
          <label>
            <input type="radio" value="Sub G1"
            checked={option === "Sub G1"}
            onChange={(event) => setOption(event.target.value)}
            />Sub G1
          </label>
    
          <label>
            <input type="radio" value="Sub G2"
            checked={option === "Sub G2"}
            onChange={(event) => setOption(event.target.value)}
              />Sub G2
          </label>
          <br/>
          <br/>
          Nota {
            option === "Sub G1"
                ? "G2" 
                : "G1"
          }:
          <br/>
          <input type='number' onChange={(event) => setNota(event.target.value)}/>
          <br/>
          <br/>
          <input type="button" value='Calcular'
          onClick={calcularNota}/>
          <br/><br/>
            {
                result !== ""
                ? <p> Sua nota na {option} deverá ser {result}</p>
                :null
            }
    
        </div>
       )
      
}

export default NotaSub;