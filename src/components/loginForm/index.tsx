import React from "react";
import './style.css'

function LoginForm() {
    return (
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
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta? </span>
                            <a className="txt2" href="#">
                                Criar conta
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;