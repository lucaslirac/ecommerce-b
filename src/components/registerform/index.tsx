import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./style"

function RegisterForm() {

    const navigate = useNavigate();
    return (
        <C.Container>
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title"> Criar Conta </span>
                        <span className="login-form-title">
                        </span>

                        <div className="wrap-input">
                            <input
                                type="email"
                                placeholder="Email"
                                autoComplete="off"
                            />
                            <span className="focus-input" ></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                type="password"
                                placeholder="Senha"
                                autoComplete="off"
                            />
                            <span className="focus-input"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn"onClick={() => navigate("/")}>Register</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Ja possui conta? </span>
                            <a className="txt2" href="" onClick={() => navigate("/Login")}>
                                Fazer login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </C.Container>
    )
}

export default RegisterForm;