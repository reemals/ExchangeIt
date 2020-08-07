import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    render() {
        return (
                <Link to="/dashboard" className="link home">
                    Login
                </Link>
        );
    }

}

export default Login;
