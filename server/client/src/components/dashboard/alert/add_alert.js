import React from 'react';
import "./alert.css"
import {MenuItem, Select} from "@material-ui/core";

class AddAlert extends React.Component {
    render() {
        return (
            <div className="addAlertContainer"
                 style={{
                     background: '#f1f1f1',
                     paddingBottom: '20px',
                     paddingTop: '20px',
                     width: '100%',
                     marginRight: '50px',
                     borderRadius: 10,
                     borderWidth: 2,
                     borderColor: '#c8c8c8',
                     marginTop: '20px'
                 }}>
                <h2 style={{color: "#00acee"}}>Add An Alert</h2>
                <div className="selection">
                    <Select defaultValue={'RMB'}
                    style={{
                        padding: '20px',
                        margin: '20px'
                    }}>
                        <MenuItem
                            value={'RMB'}
                        >{'RMB'}</MenuItem>
                    </Select>
                    <h4 style={{color: "#00acee"}}>{" To: "}</h4>
                    <Select defaultValue={'CAD'}
                            style={{
                                padding: '20px',
                                margin: '20px'
                            }}
                    >
                        <MenuItem
                            value={'CAD'}
                        >{'CAD'}</MenuItem>
                    </Select>
                    <input type="text" placeholder="4.95"
                           style={{width: '80px', marginRight:20}}/>
                    <input type="text" placeholder="5.05"
                           style={{width: '80px'}}/>
                </div>
                <div>
                    <input type="button" className="addAlertBtn" value="Add Alert"/>
                </div>
            </div>
        );
    }

}

export default AddAlert;
