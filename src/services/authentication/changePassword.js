import axios from '../../../node_modules/axios/index';
const apiUrl = process.env.REACT_APP_Dev_Url;

export default class changePassword {
  async changePassword(param) {
    const myAPI = apiUrl + 'api/ChangePassword/ChangePassword';
    let data = [];
    await axios
      .post(myAPI, param)
      .then((response) => {
        data = response;
      })
      .catch((error) => {
        console.log(error.response);
      });
    return Promise.resolve(data);
  }
}
