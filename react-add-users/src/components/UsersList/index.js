import React from 'react';
import Card from '../Card';

import classes from './styles.module.css';


const UserList = (props) => {
    return(
        <Card className={classes.user}>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;