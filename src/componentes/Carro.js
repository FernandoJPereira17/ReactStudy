import React, { useState } from "react";

export default class Carro extends React.Component {

    constructor(props) {
        super(props);
        this.modelo = 'Golf'
        this.state = {
            ligado: false,
            velAtual: 0,
        }

    }

    // ligar() {
    //     // this.state.ligado=true;
    //     // this.setState({ligado:true});
    // }
    // Desligar() {
    //     // this.state.ligado=true;
    //     // this.setState({ligado:false});
    // }
    
    //opção... terceiro botão com operção ternária...
    LigarDesligar(){
        // this.setState({ligado:!this.state.ligado})

        //outra forma de chamada do valor de atualização na tela...
        this.setState(
            (state)=>(
                {ligado:!state.ligado}
            )
        );
    }

    // acelerar(){
    //     this.setState(
    //               {velAtual:this.state.velAtual + this.props.fator}
    //         )
    // }

    //forma recomendada...
    acelerar(){
        this.setState(
            (state, props)=>(

            {velAtual:state.velAtual + props.fator}
            )
        )
    }


    render() {
        return (
            <>
                <div className="flex flex-col justify-center py-6">
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>velAtual: {this.state.velAtual}</p>
                <button className="size-20 w-15 border border-black rounded-md" onClick={() => this.ligar()}>Ligar Carro</button>
                <button className="size-20 w-15 border border-black rounded-md" onClick={() => this.Desligar()}>Desligar Carro</button>
                <button className="size-20 w-15 border border-black rounded-md" onClick={() => this.LigarDesligar()}>{this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}</button>
                <button className="size-20 w-15 border border-black rounded-md" onClick={() => this.acelerar()}>Acelerar</button>
                </div>
            </>
        );
    }
}
