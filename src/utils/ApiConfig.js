const config = window.config;
// const currenturl = window.location.origin;

class ApiConfig {
  BASE_URL = config.BASE_URL;
  ROYALTY_CARD_REGISTRATION = this.BASE_URL + '/RoyaltyCard';
}

export default ApiConfig;
