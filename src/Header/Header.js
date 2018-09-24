import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Header.css';

const Header = () => {
    return (
        <div className={styles.body} >
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            This is the header.
        </div>
    )
};

export default connect()(Header);