/* eslint-disable no-debugger */
import axios from '../../../node_modules/axios/index';
const apiUrl = process.env.REACT_APP_Dev_Url;
// import Configuration from '../../utils/ApiConfig';
// import EndPointEntity from '../../utils/EndPoint';

export default class royaCardRegistrationservices {
  // constructor () {
  //   this.config = new Configuration();
  //   this.EndPointEntity = new EndPointEntity();
  // }

  async getAllRoyaltyCardMemberEntryBy(param) {
    const myAPI = apiUrl + 'api/RoyaltyCard/GetAllRoyaltyCardMemberEntryBy';
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

  async getAllRoyaltyCardMember() {
    const myAPI = apiUrl + 'api/RoyaltyCard/GetAllRoyaltyCardMember';
    let royaltyMemberData = [];
    await axios
      .get(myAPI)
      .then((response) => {
        royaltyMemberData = response;
      })
      .catch((error) => {
        console.log(error.response);
      });
    return Promise.resolve(royaltyMemberData);
  }
  async getRoyaltyCardCategory() {
    const myAPI = apiUrl + 'api/RoyaltyCard/GetRoyaltyCardCategory';
    let royaltyCard = [];
    await axios
      .get(myAPI)
      .then((response) => {
        royaltyCard = response;
      })
      .catch((error) => {
        console.log(error.response);
      });
    return Promise.resolve(royaltyCard);
  }
  async getaddRoyaltyCardMember(param) {
    const myAPI = apiUrl + 'api/RoyaltyCard/AddRoyaltyCardMember';
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
  async editRoyaltyCardMember(param) {
    const myAPI = apiUrl + 'api/RoyaltyCard/EditRoyaltyCardMember';
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
  async deleteRoyaltyCardMember(param) {
    const myAPI = apiUrl + 'api/RoyaltyCard/DeleteRoyaltyCardMember';
    let deleteRoyalty = [];
    await axios
      .post(myAPI, param)
      .then((response) => {
        deleteRoyalty = response;
      })
      .catch((error) => {
        console.log(error.response);
      });
    return Promise.resolve(deleteRoyalty);
  }
}
