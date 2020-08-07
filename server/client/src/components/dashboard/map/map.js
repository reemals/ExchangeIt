import React from 'react';
import "./mapStyle.css"
import mapImage from "./map.jpeg"

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMap: false
        }
    }

    toggleDisplay = () => {
        this.setState({showMap: !this.state.showMap})
    }

    render() {
        return (
            <div className="container">
                <div className="alert-page">
                    <div className="location">
                        <label style={{fontSize: 18}}><b>Location</b></label>
                        <input style={{width: 200, marginLeft: 15}} type="text" placeholder="Location..."
                               name="location" required/>
                    </div>
                    <div style={{marginTop: 20, marginLeft: 10}}>
                        <div style={{float:"left"}}>
                            <input style={{width: 50}} type="text" placeholder="USD" name="currency1" required/>
                        </div>

                        <div style={{float:"left", marginLeft: 10}}>
                            <span style={{fontSize:20}}>{' to '}</span>
                        </div>

                        <div style={{float : 'left', marginLeft: 20}}>
                            <input style={{width: 50}} type="text" placeholder="CAD" name="currency2" required/>
                        </div>

                        <div className="edit">
                            <button type="button" className="findBanks-btn" onClick={this.toggleDisplay}>
                                <span>Find Banks</span>
                            </button>
                        </div>

                    </div>
                    {(this.state.showMap) ? <div id="map">
                        <img src={mapImage} alt="Map" width="300" height="300" style={{margin: 10}}/>
                    </div> : null}
                </div>
            </div>
        );
    }
}


export default Map;
