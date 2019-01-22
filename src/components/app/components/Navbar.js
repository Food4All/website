import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types'; 
import { Layout } from 'antd';

const { Header } = Layout;

export default class Navbar extends React.Component {
    render() {
        return (
            <Header>   
            </Header>
        );
    }
}

Navbar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.node),
};
