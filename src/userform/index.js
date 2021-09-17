import UserFormWrapper from "./index.styles";

function UserFormContent({ state }) {
  const submitText = state === "login" ? "Login" : "Register";
  const inputStyle = {
    "margin-top": "10px",
  };
  const labelStyle = {
    "margin-right": "10px",
  };

  return (
    <>
      <label>
        <span style={labelStyle}> Name: </span>
        <input type="text" name="name" />
      </label>

      <label>
        <span style={labelStyle}> Surname: </span>
        <input type="text" name="surname" style={inputStyle} />
      </label>

      <input type="submit" value={submitText} style={inputStyle} />
    </>
  );
}

function UserForm({ state }) {
  return (
    <UserFormWrapper>
      <UserFormContent state={state} />
    </UserFormWrapper>
  );
}

export function LoginForm() {
  return <UserForm state="login" />;
}

export function RegisterForm() {
  return <UserForm state="register" />;
}

// export default LoginForm;
// export default RegisterForm;
