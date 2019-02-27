import React, { Component } from "react";
import User from "./User";
import styled from "styled-components";

const List = styled.ul`
    border: 1px solid blue;
    width: 80%;
`;

const Users = props => (
    <List>
        {props.data.map(user => (
            <User person={user} />
        ))}
    </List>
);
