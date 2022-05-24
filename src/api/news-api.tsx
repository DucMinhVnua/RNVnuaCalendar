import {URL_BASE} from '.';

export async function getAPI(url: string) {
  var requestOptions = {
    method: 'Get',
    redirect: 'follow',
  };

  return await fetch(`${URL_BASE}/${url}`, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(e => console.log('Lỗi call api: ', e));
}
