const axios = require("axios");

const storage = window.sessionStorage;

export async function registerUser(login, password) {
  console.log("registerUser", login, password);
  return axios.post("http://localhost:3003/register", {
    login: login,
    password: password,
  });
}

function performLoginApi(login, password) {
  return axios.post("http://localhost:3003/login", {
    login: login,
    password: password,
  });
}

export async function performLogin(login, password) {
  return performLoginApi(login, password).then((value) => {
    storage.setItem("Authorization", value.data.token);
  });
}

export function getInfo() {
  return axios
    .get("http://localhost:3003/info", {
      headers: {
        Authorization: storage.getItem("Authorization"),
      },
    })
    .then((val) => {
      console.log("success while getting info!, val=", val);
      return val;
    })
    .catch((_) => {
      console.log("error while getting info!");
      return [];
    });
}
