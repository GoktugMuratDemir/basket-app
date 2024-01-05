/* eslint-disable import/no-unresolved */

import axios from 'axios';
// import { setSession } from 'src/auth/utils';

const WebServices = {
  get: async (endpoint, params) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASEURL + endpoint}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          XApiKey: `TPJDtRG0cP`,
        },
        params,
      });
      return response;
    } catch (error) {
      console.error(error);
      return error
    }
  },

  post: async (endpoint, params, isForm) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASEURL + endpoint}`, params, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          XApiKey: `TPJDtRG0cP`,
          'Content-Type': isForm ? 'multipart/form-data' : 'application/json',
        },
      });
      return { success: true, response };
    } catch (error) {
      console.error(error);
      return { success: false, response: error?.response?.data?.errors };
    }
  },

  put: async (endpoint, params, isForm) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_BASEURL + endpoint}`, params, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          XApiKey: `TPJDtRG0cP`,
          'Content-Type': isForm ? 'multipart/form-data' : 'application/json',
        },
      });
      return { success: true, response: response.data };
    } catch (error) {
      console.error(error);
      return { success: false, response: error };
    }
  },

  delete: async (endpoint,params) => {
    try {
      const response = await axios.delete(`${`${process.env.REACT_APP_API_BASEURL + endpoint  }/${params.Id}`}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          XApiKey: `TPJDtRG0cP`,
        },
      });
      // console.log(response);
      return { success: true, response };
    } catch (error) {
      console.error(error);
      return { success: false, response: error };
    }
  },

  getAllProducts: (params) => WebServices.get(`products`, params),


  

};

export { WebServices };