import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/pt-br';

import 'react-datepicker/dist/react-datepicker.css';

class FourthStep extends Component {
    constructor(props) {
        super(props);
        moment.locale('pt-BR');
        this.state = {
            startDate: moment(),
            isToday: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }


    navigate = (path) => {
        this.props.history.push(path);
    }

    handleNotToday = () => {
        this.setState({ isToday: false });
    }

    render() {
        return (
            <div className="cellphone primary">
                <h2 className="text-center fadeInDown ed-animate-1">Último passo!</h2>
                {
                    this.state.isToday ?
                        (
                            <div className="card text-center fadeInDown ed-animate-2">
                                <h3>Foi hoje?</h3>
                                <button className="btn-primary inline-block-center" onClick={() => this.navigate('/')}>Sim!</button>
                                <button className="btn-primary inline-block-center" onClick={this.handleNotToday}>Não!</button>
                            </div>
                        ) : null
                }
                {
                    !this.state.isToday ?
                        (<div className="card text-center fadeInDown ed-animate-1">
                            <h3>Quando foi?</h3>

                            <div className="form-group text-center">
                                <label>Data</label>
                                <DatePicker
                                maxDate={moment()}
                                className="form-control text-center"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                />
                            </div>
                            <button className="btn-primary block-center" onClick={() => this.navigate('/')}>Acabei!</button>
                        </div>) : null
                }
            </div>
        )
    }
}

export default FourthStep;

