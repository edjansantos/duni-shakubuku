import React, { Component } from 'react';

class FirstStep extends Component {

    navigate = (path) => {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="cellphone">
                <h2 className="text-center fadeInDown ed-animate-1">Oi :)</h2>
                <h3 className="text-center fadeInDown ed-animate-2">Parabéns pelo Shakubuku!</h3>
                <div className="card text-center fadeInDown ed-animate-4">
                    Em 2018 a DUni já realizou
                <h3>10 shakubuku</h3>
                </div>
                <div className="card fadeInDown ed-animate-3">
                    <h4 className="text-center">Clique no botão abaixo para informar mais uma pessoa feliz!</h4>
                    <button className="btn-primary block-center" onClick={() => this.navigate('/quem-e-voce')}>Vamos lá</button>
                </div>
            </div>
        )
    }
}

export default FirstStep;