import React, { Component } from "react";
import styled from "styled-components";
import { StyledInput } from "./Elements/Input";
import { StyledButton } from "./Elements/Button";
import { StyledSpanError } from "./Elements/SpanError";
import { validateRegister } from "./Validator";
import { authenticationFetch } from "../Fetches/AuthenticationFetch";

const StyledLoginP = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.s};
  padding-top: 10px;
  margin-bottom: 20px;
  margin-top: -50px;
  text-transform: uppercase;
`;

const StyledLoginBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
`;
const StyledRegisterPopUp = styled.div`
  height: 50px;
  position: fixed;
  bottom: 0px;
  border-top: 2px dashed ${({ theme }) => theme.lightgreen};
  width: 100%;
  line-height: 50px;
  color: #bdefe5;
  background-image: linear-gradient(45deg, #093028, #237a57);
  font-size: ${({ theme }) => theme.font.size.spanFormError};
`;
const StyledFormText = styled.span`
  font-size: ${({ theme }) => theme.font.size.formMobileText};
  color: ${({ theme }) => theme.lightgreen};
  text-decoration: underline;
  cursor: pointer;
  margin: 10px;
`;
const SubmitButton = styled(StyledButton)`
  margin-bottom: -20px;
`;

class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    login: "",
    password: "",
    errors: {
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      loginError: false,
      passwordError: false
    },
    isUserRegistered: false
  };
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };
  handleFormInputsClear = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      password: ""
    });
  };
  handleFormErrorsClear = () => {
    this.setState({
      errors: {
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        loginError: false,
        passwordError: false
      }
    });
  };
  handleFormClear = () => {
    this.handleFormInputsClear();
    this.handleFormErrorsClear();
  };
  validateForm = () => {
    let validateHasErrors;
    const { firstName, lastName, email, login, password } = this.state;
    const validateRegisterForm = validateRegister(
      firstName,
      lastName,
      email,
      login,
      password
    );
    if (typeof validateRegisterForm === "boolean") {
      validateHasErrors = false;
    } else {
      this.setState({
        errors: validateRegisterForm
      });
      validateHasErrors = true;
    }
    return validateHasErrors;
  };
  handleFetchResponse = responseStatus => {
    this.setState({
      isUserRegistered: responseStatus
    });
    setTimeout(() => {
      this.setState({
        isUserRegistered: !responseStatus
      });
    }, 3500);
  };
  handleSubmit = async e => {
    const { firstName, lastName, email, login, password } = this.state;
    e.preventDefault();
    const validatorHasErrors = this.validateForm();

    if (!validatorHasErrors) {
      const obj = {
        user: {
          id: 1, //API
          firstName,
          lastName,
          email,
          login,
          password
        }
      };

      const URL = `http://localhost:5001/Register`;
      const responseStatus = await authenticationFetch(URL, obj);
      this.handleFetchResponse(responseStatus);
      this.handleFormClear();
    }
  };

  render() {
    const {
      firstNameError,
      lastNameError,
      emailError,
      loginError,
      passwordError
    } = this.state.errors;
    const {
      firstName,
      lastName,
      email,
      login,
      password,
      isUserRegistered
    } = this.state;
    return (
      <StyledLoginBox>
        <StyledLoginP>Create your account</StyledLoginP>
        <StyledInput
          type="text"
          placeholder="First Name"
          id="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        {firstNameError ? (
          <StyledSpanError>First name is too short!</StyledSpanError>
        ) : null}

        <StyledInput
          type="text"
          placeholder="Last Name"
          id="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        {lastNameError ? (
          <StyledSpanError>Last name is too short!</StyledSpanError>
        ) : null}

        <StyledInput
          type="email"
          placeholder="E-mail"
          id="email"
          onChange={this.handleChange}
          value={email}
        />
        {emailError ? (
          <StyledSpanError>Email address is not valid </StyledSpanError>
        ) : null}
        <StyledInput
          type="text"
          placeholder="Login"
          id="login"
          value={login}
          onChange={this.handleChange}
        />
        {loginError ? (
          <StyledSpanError>Login is too short!</StyledSpanError>
        ) : null}

        <StyledInput
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={this.handleChange}
        />
        {passwordError ? (
          <StyledSpanError>Password does not match the rules</StyledSpanError>
        ) : null}
        <StyledFormText onClick={this.props.switch}>
          Have an account already? Log in here
        </StyledFormText>
        <StyledButtonWrapper>
          <SubmitButton onClick={this.handleSubmit}>Create</SubmitButton>
        </StyledButtonWrapper>
        {isUserRegistered ? (
          <StyledRegisterPopUp>Registered</StyledRegisterPopUp>
        ) : null}
      </StyledLoginBox>
    );
  }
}

export default RegisterForm;
