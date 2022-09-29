import React, { Component } from 'react'

function MessageImc(params) {
    if (params < 18)
    return "Você está abaixo do peso"
    else if (params < 24)
    return "Você está no peso normal"
    else if (params < 30)
    return "Você está acima do peso"
    else
    return "Obesidade"

    
}

export default class Hello extends Component {

    constructor(props) {
        super(props)
        this.state = {
            massa:0,
            altura: 0,
            valor: 0
        }

        this.handleAltura =this.handleAltura.bind(this)
        this.handleMassa =this.handleMassa.bind(this)
        this.clickCalcIMC = this.clickCalcIMC.bind(this)
        
    }
    
    handleMassa(event){
        //console.log(event.target.value)
        this.setState({massa:event.target.value})
    }
    
    handleAltura(event){
        this.setState({altura:event.target.value})
    }

    clickCalcIMC(){
        const {massa, altura} = this.state;
        let result = (massa) / (altura/100  * altura/100)
        this.setState({valor:result})
    }

    render() {
        const valor = this.state.valor;
        //const resultado = Number.isFinite(parseFloat(valor)) ? "ERRO" : valor;
        const message = valor > 0 && MessageImc(valor)
    return (
      <div className='calc'>
        <label htmlFor='peso'>Peso:</label>
        <input type="text" id="peso" autoFocus placeholder="Digite peso em Kg" onChange={this.handleMassa}></input>
        <label htmlFor='altura'>Altura:</label>
        <input type="text" id="altura" placeholder="Digite sua altura em cm" onChange={this.handleAltura}></input>

        <button onClick={this.clickCalcIMC}>Calcular IMC</button>
        <label>Resultado do IMC:
        {
            valor > 0 && parseFloat(valor).toFixed(2)
        }
        </label>
        <label>{message}</label>
      </div>
    )
  }
}
