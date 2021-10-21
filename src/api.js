import axios from 'axios';

export default {
  Base: function() {
    return axios.create({
      baseURL: 'https://farmlandwatcher.com:3000'
    });
  }
};