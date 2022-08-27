import React from "react";

class nota extends React.Component{
  constructor(){
    super()
    this.state = {
      Nota: null,
      userOption: "Sub G1",
      result: null,
    }
  }

    onChangeNota(event){
      const nota = event.target.value
      this.setState({
        Nota: nota
      })
    }

    onChangeOption(event){
      const newOption = event.target.value
  
      this.setState({
        userOption: newOption
      })
    }


    calcularNota(){
      let Valor;
        if(this.state.userOption === "Sub G1"){
          Valor = (21 - (this.state.Nota * 2))
          }else{
            Valor = (21 - this.state.Nota) / 2
          };

      this.setState({
        result: Valor
      })
    }

render(){
  return(

    <div>
      <h1>Calcular Nota da Sub</h1>
      
      <label>
        <input type="radio" value="Sub G1"
        checked={this.state.userOption === "Sub G1"}
        onChange={(event) => this.onChangeOption(event)}
        />Sub G1
      </label>

      <label>
        <input type="radio" value="Sub G2"
        checked={this.state.userOption === "Sub G2"}
        onChange={(event) => this.onChangeOption(event)}
          />Sub G2
      </label>
      <br/>
      <br/>
      Nota {
       this.state.userOption === "Sub G1"
            ? "G2" 
            : "G1"
      }:
      <br/>
      <input type='number' onChange={(event) => this.onChangeNota(event)}/>
      <br/>
      <br/>
      <input type="button" value='Calcular'
      onClick={() => this.calcularNota() }/>
      <br/>
      <br/>
        {
        this.state.result !== ""
            ? <p> Sua nota na {this.state.userOption} deverá ser {this.state.result}</p>
            : null
        }

    </div>
   )
  }
}
export default nota;
