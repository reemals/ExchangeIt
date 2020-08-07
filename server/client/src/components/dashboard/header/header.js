import React from 'react';
import "./header.css"
import headerPic from "./image/logo.png"

class Header extends React.Component {
    render() {
        return (
            <div className="navBar">
                <img src={headerPic} width="200" alt="Logo" />
            </div>
        );
    }

}

export default Header;
