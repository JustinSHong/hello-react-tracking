import React, { Component } from "react";
import styled from "styled-components";
import Users from "./components/Users";
import track from "react-tracking";

const Main = styled.div`
    background: #1a237e;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const Header = styled.h1`
    color: #eee;
`;

@track({ page: "App" })
class App extends Component {
    state = {
        users: [],
        error: ""
    };

    @track()
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                this.setState({ users: json });
            })
            .catch(err => {
                this.setState({ error: err });
            });
    }

    render() {
        const { users } = this.state;

        return (
            <Main>
                <Header>HELLO USERS</Header>
                <Users data={users} />
            </Main>
        );
    }
}

export default App;
