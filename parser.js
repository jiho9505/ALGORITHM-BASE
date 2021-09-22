// kakao parser.js

const axios = require('axios');
const BASE_URL =
  '---직접입력---';
const X_AUTH_TOKEN = '---직접입력---';
const body = { problem: 1 };
const tokenConfig = {
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': X_AUTH_TOKEN,
  },
};
const AuthConfig = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
};

(async () => {
  await axios.post(`${BASE_URL}/start`, body, tokenConfig).then((res) => {
    AuthConfig.headers.Authorization = res.data.auth_key;
  });

  await axios.get(`${BASE_URL}/trucks`, AuthConfig).then((res) => {
    console.log('Data is ', res.data);
  });

  await new Promise(async (resolve) => {
    try {
      for (let i = 0; i < 720; i++) {
        await axios
          .put(`${BASE_URL}/simulate`, { commands: [] }, AuthConfig)
          .then((res) => {
            console.log('?', res.data);
            i === 719 && resolve();
          });
      }
    } catch (e) {
      console.log('error is : ', e);
    }
  });

 axios.get(`${BASE_URL}/score`, AuthConfig).then((res) => {
    console.log('Score is ', res.data);
  });
})();
