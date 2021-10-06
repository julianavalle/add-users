import React from 'react';
import Card from '../Card';

import classes from './styles.module.css';

const AddUser = props => {

    const addUserHandle = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />

                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;