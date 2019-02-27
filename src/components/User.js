import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

const StyledCard = styled(Card)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    width: 200px;
    margin-bottom: 10px;
`;

const Text = styled(Typography)`
    color: #eee !important;
`;

const Actions = styled(CardActions)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HomeBtn = styled(Button)`
    border-color: #eee !important;
    color: #eee !important;
`;

const User = props => {
    return (
        <StyledCard>
            <CardContent>
                <Text>{props.person.name}</Text>
                <Text>{props.person.username}</Text>
                <Text>{props.person.email}</Text>
                <Actions>
                    <HomeBtn variant="outlined">GO HOME</HomeBtn>
                </Actions>
            </CardContent>
        </StyledCard>
    );
};

export default User;
