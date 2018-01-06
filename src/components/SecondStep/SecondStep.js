import React, { Component } from 'react';

class SecondStep extends Component {

    navigate = (path) => {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="cellphone">
                <h2 className="text-center fadeInDown ed-animate-1">Legal</h2>
                <div className="card text-center fadeInDown ed-animate-2">
                    <h3>Quem é você?</h3>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Código de membro</label>
                        <input type="text" pattern="\d*" className="form-control" />
                    </div>
                    <button className="btn-primary block-center" onClick={() => this.navigate('/quantas-familias-felizes')}>Pronto, vamos continuar!</button>
                </div>
            </div>
        )
    }
}

export default SecondStep;

