import React from "react";
import Header from "../../components/header";
import LoginForm from "../../components/loginForm";

function Login() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <LoginForm />
            </main>
        </div>

    )
}

export default Login