import React, { Component } from "react";
import styled from "styled-components";

const ListItem = styled.li`
    border: 1px solid green;
    display: block;
`;

const User = props => <ListItem />;

export default User;
