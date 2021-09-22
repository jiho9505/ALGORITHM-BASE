// kakao parser example

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
  try {
    const startAPI = await axios.post(`${BASE_URL}/start`, body, tokenConfig);
    AuthConfig.headers.Authorization = startAPI.data.auth_key;

    const truckAPI = await axios.get(`${BASE_URL}/trucks`, AuthConfig);
    console.log('Data is ', truckAPI.data);

    const locationAPI = await axios.get(`${BASE_URL}/locations`, AuthConfig);
    console.log('location is ', locationAPI.data);

    await new Promise(async (resolve) => {
      try {
        for (let i = 0; i < 720; i++) {
          const result = await axios.put(
            `${BASE_URL}/simulate`,
            { commands: [] },
            AuthConfig
          );
          console.log('result: ', result.data);
          i === 719 && resolve();
        }
      } catch (e) {
        throw e;
      }
    });

    const scoreAPI = await axios.get(`${BASE_URL}/score`, AuthConfig);
    console.log('Score is ', scoreAPI.data);
  } catch (e) {
    console.log('Error is : ', e);
  }
})();
