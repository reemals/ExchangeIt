import React from 'react';
import Converter from "./converter/converter";
import Header from "./header/header";
import Map from "./map/map";
import Alert from "./alert/alert";

class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Converter/>
                <Alert/>
                <Map/>
            </div>
        );
    }

}

export default Dashboard;
