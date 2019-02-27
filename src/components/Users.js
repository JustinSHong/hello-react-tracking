import React, { Component } from "react";
import User from "./User";

const Users = props => (
    <React.Fragment>
        {props.data.map(user => (
            <User person={user} />
        ))}
    </React.Fragment>
);

export default Users;
