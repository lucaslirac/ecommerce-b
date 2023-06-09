import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./style"

function LoginForm() {

    const navigate = useNavigate();
    return (
        <C.Container>
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title"> Bem vindo </span>
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
                            <button className="login-form-btn"  onClick={() => navigate("/")}>Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta? </span>
                            <a className="txt2" href="" onClick={() => navigate("/Register")}>
                                Criar conta
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </C.Container>
    )
}

export default LoginForm;