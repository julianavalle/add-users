import React from 'react';
import Card from '../Card';
import Button from '../Button'

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

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;