import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react'
import styles from '../styles/Nav.module.scss'
import { Link } from '@reach/router'

const Nav = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.spaceholder}>
                <Link className={styles.icon} to='/' title='search'>
                    <box-icon size='sm' name='search'></box-icon>
                </Link>
                <Link className={styles.icon} to='/mymovies' title='mymovies'>
                    <box-icon size='sm' name='box'></box-icon>
                </Link>
            </nav>
            <div>
                <AmplifySignOut className={styles.signout} title='signOutButton' />

            </div>
        </div>
    );
};

export default Nav;