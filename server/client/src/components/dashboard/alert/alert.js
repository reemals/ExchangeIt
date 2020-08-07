import React from 'react';
import "./alert.css"
import { Switch } from '@material-ui/core'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AddAlert from "./add_alert";

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddAlert: false
        }
    }

    toggleAddAlert = () => {
        this.setState({showAddAlert: !this.state.showAddAlert});
    }

    render() {
        return (
            <div className="alertContainer">
                <div className="alert-page">
                    <div className="title">
                        <div className="edit">
                            <span>Edit</span>
                            <button type="button" className="plus-btn" onClick={this.toggleAddAlert}>
                                <span>+</span>
                            </button>
                        </div>

                        <div className="alerts">
                            <span>Alerts</span>
                        </div>

                    </div>

                    <br/>
                    <div>
                    <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label="USD to CAD"
                        labelPlacement="start"
                    />
                        <div className="rate-value">
                            <span>1.52</span>
                        </div>
                </div>

                    <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label="UAS to CAD"
                        labelPlacement="start"
                    />
                <div className="rate-value">
                    <span>1.08 - 1.12</span>
                </div>
                </div>
                {(this.state.showAddAlert) ? <AddAlert/> : null}
            </div>
        );
    }

}

export default Alert;
