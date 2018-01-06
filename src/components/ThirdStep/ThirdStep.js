import React, { Component } from 'react';

class ThirdStep extends Component {

    navigate = (path) => {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="cellphone">
                <h2 className="text-center fadeInDown ed-animate-1">Quase lá!</h2>
                <div className="card text-center fadeInDown ed-animate-2">
                    <h3>Quantas novas famílias felizes?</h3>
                    <div className="form-group">
                        <input type="text" pattern="\d*" value="1" className="form-control counter" />
                    </div>
                    <button className="btn-primary block-center" onClick={() => this.navigate('/quando-foi')}>Próximo!</button>
                </div>
            </div>
        )
    }
}

export default ThirdStep;

