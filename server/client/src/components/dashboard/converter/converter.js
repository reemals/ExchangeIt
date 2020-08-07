import React from 'react';
import {connect} from 'react-redux';
import { fetchCurrencies } from '../../../actions';
import { Input, Box, Select, MenuItem } from '@material-ui/core';
import './converter.css'

//TODO: remove once endpoint is done
const currencyList = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'GBP', 'HKD',
    'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP',
    'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', '', 'USD', 'ZAR'];

class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount1: '',
            amount2: '',
            currency1: 'USD',
            currency2: '',
            currencyList: currencyList,
            exchangeRateString: ''
        }
    }

    componentDidMount() {
        // gets a list of currencies; ie: ['CAD', 'USD', 'RMB' ...]
        //this.props.dispatch(fetchCurrencies());
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
        this.handleExchangeRateStringUpdate();
        console.log(this.state);
    }

    handleSelectInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleExchangeRateStringUpdate = () => {
        if (this.state.amount1 === '' && this.state.amount2 !== '') {
            let str = /*this.props.exchangeRate*/ 'x ' + this.state.currency1 + ' = ' + this.state.amount2 + ' ' + this.state.currency2;
            this.setState({
                exchangeRateString: str
            })
        } else if (this.state.amount1 !== '' && this.state.amount2 === '') {
            let str =  this.state.amount1 + this.state.currency1 + ' = ' + /*this.props.exchangeRate*/ 'x ' + ' ' + this.state.currency2;
            this.setState({
                exchangeRateString: str
            })
        }
    }

    render() {
        return (
            <div className="mainContainer">
                <Box>
                    <div className='curr1'>
                        <Select
                            autoWidth={true}
                            defaultValue={'USD'}
                            value={this.state.currency1}
                            name='currency1'
                            onChange={this.handleSelectInputChange.bind()}
                        >
                            {
                                this.state.currencyList.map((currency, index) => {
                                    return <MenuItem
                                                value={currency}
                                                key={index}
                                            >{currency}</MenuItem>;
                                })
                            }
                        </Select>
                        <Input
                            value={this.state.amount1}
                            placeholder={(this.state.amount2 === '') ? 'enter input amount' : ''}
                            name='amount1'
                            multiline={false}
                            onChange={this.handleInputChange.bind()}
                            disabled={this.state.amount2 !== ''}
                        >
                        </Input>
                    </div>
                    <div className='curr2'>
                        <Select
                            autoWidth={true}
                            value={this.state.currency2}
                            name={'currency2'}
                            onChange={this.handleSelectInputChange.bind()}
                        >
                            {
                                this.state.currencyList.map((currency, index) => {
                                    return <MenuItem
                                        value={currency}
                                        key={index}
                                    >{currency}</MenuItem>
                                })
                            }
                        </Select>
                        <Input
                            value={this.state.amount2}
                            placeholder={(this.state.amount1 === '') ? 'enter output amount' : ''}
                            name='amount2'
                            multiline={false}
                            onChange={this.handleInputChange.bind()}
                            disabled={this.state.amount1 !== ''}
                        >
                        </Input>
                    </div>
                    <div className='exchangeRateString'>
                        {(this.state.exchangeRateString !== '') ? <h4>{this.state.exchangeRateString}</h4> : null}
                    </div>

                </Box>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps)(Converter);
