import React from "react";
import Header from "../../components/header";
import Container from 'react-bootstrap/Container';

function Home() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <Container>
                    <h1>Lixo</h1>
                </Container>
            </main>
        </div>
    )
}

export default Home;