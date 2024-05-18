// import axios from '../../../../../node_modules/axios/index';
import axios from '../../../../node_modules/axios/index';
const apiUrl = process.env.REACT_APP_Dev_Url;

export default class royaltyCardMemberReportsService {
  async getRoyaltyCardMemberReports(param) {
    const myAPI = apiUrl + 'api/RoyaltyCardMemberReports/RoyaltyCardMemberReport';
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

  async getRoyaltyCardMemberReportsUserBy(param) {
    const myAPI = apiUrl + 'api/RoyaltyCardMemberReports/RoyaltyCardMemberReportUserBy';
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

  async getAllUserDetail() {
    const myAPI = apiUrl + 'api/RoyaltyCardMemberReports/GetAllUser';
    let data = [];
    await axios
      .get(myAPI)
      .then((response) => {
        data = response;
      })
      .catch((error) => {
        console.log(error.response);
      });
    return Promise.resolve(data);
  }
}
