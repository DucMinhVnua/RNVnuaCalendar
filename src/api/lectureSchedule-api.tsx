import axios from 'axios';

export const callApi = async (endpoint: any, body = null) => {
  const API_URL = 'http://daotao.vnua.edu.vn';

  var config = {
    method: 'post',
    url: `${API_URL}/${endpoint}`,
    headers: {
      Cookie: 'ASP.NET_SessionId=v2owdk2xfdxrpleizzkwcsqi',
    },
    data: body,
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
