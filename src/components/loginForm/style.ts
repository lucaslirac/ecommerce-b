


import styled from "styled-components";

export const Container = styled.div`

body,
html {
  font-family: Nunito, sans-serif;
}

.container {
  width: 100%;
  margin: 0 auto;
}

.container-login {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #111;
}

.wrap-login {
  width: 390px;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
}

.login-form-title {
  font-family: Nunito, sans-serif;
  display: block;
  font-size: 30px;
  color: azure;
  line-height: 1.2;
  text-align: center;
}


.wrap-input {
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
}

input {
  font-size: 15px;
  color: #fff;
  line-height: 1.2;
  border: none;
  display: block;
  width: 100%;
  height: 45px;
  background-color: transparent;
  padding: 0 5px;
  font-family: Nunito, sans-serif;
}

.login-form-btn {
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #ea1538;
  transition: .4s;
}

.login-form-btn:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.txt1 {
  font-size: 14px;
  color: #adadad;
  line-height: 1.5;
  padding-right: 5px;
}

.txt2 {
  font-size: 14px;
  color: #adadad;
  line-height: 1.5;
  text-decoration: none;
}

.txt2:hover {
  color: #ea1538;
  transition: .3s;
}
`;