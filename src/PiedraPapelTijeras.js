import React from "react";

class Reactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meGusta: 0,
            meEncanta: 0,
            noMeGusta: 0
        };
        this.incrementMeGusta = this.incrementMeGusta.bind(this);
        this.incrementMeEncanta = this.incrementMeEncanta.bind(this);
        this.incrementNoMeGusta = this.incrementNoMeGusta.bind(this);
    }

    incrementMeGusta() {
        this.setState((prevState) => ({ meGusta: prevState.meGusta + 1 }));
    }

    incrementMeEncanta() {
        this.setState((prevState) => ({ meEncanta: prevState.meEncanta + 1 }));
    }

    incrementNoMeGusta() {
        this.setState((prevState) => ({ noMeGusta: prevState.noMeGusta + 1 }));
    }

    render() {
        return (
            <div>
                <h2>Reactions:</h2>
                <ul>
                    <li>Likes: {this.state.meGusta} <button onClick={this.incrementMeGusta}>Like</button></li>
                    <li>Me Encanta: {this.state.meEncanta} <button onClick={this.incrementMeEncanta}>Me Encanta</button></li>
                    <li>No Me Gusta: {this.state.noMeGusta} <button onClick={this.incrementNoMeGusta}>No Me Gusta</button></li>
                </ul>
            </div>
        );
    }
}

class PiedraPapelTijeras extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerChoice: null,
            computerChoice: null,
            result: null,
            playerWins: 0,
            computerWins: 0
        };
        this.playerChoice = this.playerChoice.bind(this);
        this.determineWinner = this.determineWinner.bind(this);
    }

    playerChoice(option) {
        const options = ["Piedra", "Papel", "Tijeras"];
        const computerChoice = options[Math.floor(Math.random() * 3)];
        this.setState({ playerChoice: option, computerChoice });
        this.determineWinner(option, computerChoice);
    }

    determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            this.setState({ result: "Empate!!!" });
        } else if (
            (playerChoice === "Piedra" && computerChoice === "Tijeras") ||
            (playerChoice === "Papel" && computerChoice === "Piedra") ||
            (playerChoice === "Tijeras" && computerChoice === "Papel")
        ) {
            this.setState({ result: "Ganaste!!!" });
            this.setState((prevState) => ({ playerWins: prevState.playerWins + 1 }));
        } else {
            this.setState({ result: "La Computadora Gana!!" });
            this.setState((prevState) => ({ computerWins: prevState.computerWins + 1 }));
        }
    }

    render() {
        return (
            <div>
                <h1>Piedra Papel Tijeras</h1>
                <div>
                    <button onClick={() => this.playerChoice("Piedra")}>Piedra</button>
                    <button onClick={() => this.playerChoice("Papel")}>Papel</button>
                    <button onClick={() => this.playerChoice("Tijeras")}>Tijeras</button>
                </div>
                {this.state.playerChoice && (
                    <div>
                        <p>Tu Elección: {this.state.playerChoice}</p>
                        <p>Elección de la PC: {this.state.computerChoice}</p>
                        <p>Resultado: {this.state.result}</p>
                    </div>
                )}
                <div>
                    <p>Victorias del Jugador: {this.state.playerWins}</p>
                    <p>Victorias de la Computadora: {this.state.computerWins}</p>
                </div>
                <Reactions />
            </div>
        );
    }
}

export default PiedraPapelTijeras;
