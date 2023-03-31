import React from "react";
import Header from "../../components/header";
import RegisterForm from "../../components/registerform";

function Register() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <RegisterForm />
            </main>
        </div>

    )
}

export default Register