import React from 'react';
import {connect} from 'react-redux';
import { fetchExchangeRate } from '../../../actions';
import { Input, Box, Select, MenuItem, FormControl } from '@material-ui/core';
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
            exchangeRateString: '',
            exchangeRate: 0
        }
    }

    componentDidMount() {
        // gets a list of currencies; ie: ['CAD', 'USD', 'RMB' ...]
        //this.props.dispatch(fetchCurrencies());
    }

    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
        console.log(this.state);
    }


    handleExchangeRateUpdate = () => {
        this.props.dispatch(fetchExchangeRate(this.state.currency1, this.state.currency2));
        this.setState({exchangeRate: this.props.exchangeRate});
        this.handleUpdateString();
    }

    handleUpdateString = () => {
        if (this.state.amount1 !== '') {
            let str =  '1 ' + this.state.currency1 + ' = ' + this.state.exchangeRate + ' ' + this.state.currency2;
            console.log(str);
            this.setState({
                exchangeRateString: str,
                amount2:(this.state.exchangeRate * this.state.amount1)
            })
        }
    }

    render() {
        return (
            <div className="mainContainer">
                <Box>
                    <div className='curr1'>
                        <h3>From:</h3>
                        <FormControl style={{minWidth: '100px', marginRight: '20px'}}>
                        <Select
                            defaultValue={'USD'}
                            value={this.state.currency1}
                            name='currency1'
                            onChange={this.handleInputChange}
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
                        </FormControl>
                        <Input
                            value={this.state.amount1}
                            placeholder={"Input Amount"}
                            name='amount1'
                            multiline={false}
                            onChange={this.handleInputChange}
                        >
                        </Input>
                    </div>
                    <div className='curr2'>
                        <h3>To:</h3>
                        <FormControl style={{minWidth: '100px', marginRight: '20px'}}>
                        <Select
                            autoWidth={true}
                            value={this.state.currency2}
                            name={'currency2'}
                            onChange={this.handleInputChange}
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
                        </FormControl>
                        <Input
                            value={this.state.amount2}
                            placeholder={"Output Amount"}
                            name='amount2'
                            multiline={false}
                            onChange={this.handleInputChange}
                            disabled={true}
                        >
                        </Input>
                    </div>
                    <div>
                        <input type="button" className="calculateButton" value="Calculate" onClick={this.handleExchangeRateUpdate.bind()}/>
                    </div>
                    <div className='exchangeRateString'>
                        {(this.state.exchangeRateString !== '') ? <h3>{this.state.exchangeRateString}</h3> : null}
                    </div>

                </Box>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        exchangeRate: state.exchangeRate
    };
}

export default connect(mapStateToProps)(Converter);
