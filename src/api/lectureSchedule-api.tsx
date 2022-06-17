import axios from 'axios';

export const callApi = async (
  endpoint: any,
  method: any,
  data: any,
  isFormData = false,
) => {
  const API_URL = 'http://daotao.vnua.edu.vn';

  var config = {
    method: method,
    url: `${API_URL}/${endpoint}`,
    headers: {
      Cookie: 'ASP.NET_SessionId=lknhww55zatp1einjm4gbuzw',
      'Content-type': isFormData ? 'multipart/form-data' : '',
    },
    data: data,
  };

  console.log(config);

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
