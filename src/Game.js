import React, { Component } from 'react';
import tijeras from './tijeras.svg';
import './Game.css';

class Game extends Component {

    constructor() {
        super()
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(3),
            pointb: "0",
            pointy: "0"
        }
    }

    handleOnChange = e => {
        
        const {target: {value}} = e;

        console.log(value);

        const numrandom = generateRandomNumber();

        if(value.trim() > 0) {
            this.setState({
                number: value,
                random: numrandom
            });
        }
         this.setState({
            message: "",
        });
    }

    handleOnClick = () => {
        let number = parseInt(this.state.number);
        let pointb = parseInt(this.state.pointb);
        let pointy = parseInt(this.state.pointy);
        let random = parseInt(this.state.random);
        let text = calculateText(random, number, pointb, pointy);
        generateRandomNumber();
        console.log("el random", random);

            if (number === 1) {
                if (random === 2){
                    this.setState({pointb:parseInt(pointb)+1});
                }
                if (random === 3){
                    this.setState({pointy:parseInt(pointy)+1});
                }
            }
            if (number === 2) {
                if (random === 1){
                    this.setState({pointy:parseInt(pointy)+1}); 
                }
                if (random === 3){
                    this.setState({pointb:parseInt(pointb)+1});
                }
            }
            if (number === 3) {
                if (random === 1){
                    this.setState({pointb:parseInt(pointb)+1});
                }
                if (random === 2){
                    this.setState({pointy:parseInt(pointy)+1}); 
                }
            }

            if(pointy === 2 || pointb === 2){
                this.setState({pointy: 0});
                this.setState({pointb: 0});
            }
    }

    render() {
        
        return (
            <div className="Game">
                <header>
                <img src={tijeras} className="App-logo" alt="logo" />
                </header>
                <h2 className={(this.state.message)&& 'flickering'}>{this.state.message}</h2>
                <p>Que escoges?</p>
                <p>1 es piedra - 2 es papel - 3 es tijeras</p>
                <input
                    type="number"
                    value = {this.state.number}
                    onChange = {this.handleOnChange}
                />
                <button onClick={this.handleOnClick}>Escojo</button>
                <p>Jugador: {this.state.pointy}</p>
                <p>Bot: {this.state.pointb}</p>
               
            </div>
        );
    }

}

export default Game;

function calculateText(random, number, pointb, pointy) {

    if (random === number) {
        return "empataron";
    }
        if (number === 1) {
            if (random === 2){
                
                return "le ganaste"
            }
            if (random === 3){
                
                return "t emato"
            }
        }
        if (number === 2) {
            if (random === 1){
                
                return "t emato"
            }
            if (random === 3){
                
                return "le ganaste"
            }
        }
        if (number === 3) {
            if (random === 1){
                
                return "le ganaste"
            }
            if (random === 2){
                
                return "t emato"
            }
        }

}


function generateRandomNumber(max=3, min=1) {
    return Math.floor(Math.random()*(max - min) + min);
}

