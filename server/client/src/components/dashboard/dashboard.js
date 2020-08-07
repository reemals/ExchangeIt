import React from 'react';
import Converter from "./converter/converter";
import Header from "./header/header";
import Map from "./map/map";

class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Converter/>
                <Map/>
            </div>
        );
    }

}

export default Dashboard;
