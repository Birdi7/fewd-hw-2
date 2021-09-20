import { UserFormWrapper } from "./index.styles";
import { registerUser, performLogin } from "../servers";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";

function FormMessage({ error }) {
  return (
    <div style={{ color: "red" }}>
      {!error && <p> User is already exists or </p>}
      <p> {error}</p>
    </div>
  );
}

function UserFormContent({ state, callback }) {
  const submitText = state === "login" ? "Login" : "Register";
  let [message, setMessage] = useState("");

  const onSubmitHandler = async (values) => {
    console.log(JSON.stringify(values, null, 2));
    console.log(callback);
    const { login, password } = values;
    const response = await callback(login, password);
    setMessage("Action performed");

    console.log("response.status");
    console.log(response.status);
    console.log("result");
    console.log(JSON.stringify(response, null, 2));
    return response;
  };

  const form = (
    <Formik
      initialValues={{
        login: "me",
        password: "123",
      }}
      onSubmit={async (values) =>
        onSubmitHandler(values).catch((error) => {
          const response = error.response;
          if (response.status === 400) {
            setMessage(response.data.message);
          }
        })
      }
      validate={(values) => {
        const errors = {};
        if (!values.login) {
          errors.login = "Login is required!";
        }
        if (!values.password) {
          errors.password = "Password is required!";
        }
        return errors;
      }}
    >
      <Form>
        <label htmlFor="login">First Name</label>
        <Field id="login" name="login" placeholder="Jane" />
        <ErrorMessage name="login">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" />
        <ErrorMessage name="password">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );

  return (
    <UserFormWrapper>
      <div>
        <h1>{submitText}</h1>
        {form}

        {message && <FormMessage error={message} />}
      </div>
    </UserFormWrapper>
  );
}

export function LoginForm() {
  return <UserFormContent state="login" callback={performLogin} />;
}

export function RegisterForm() {
  return <UserFormContent state="register" callback={registerUser} />;
}
