import {URL_BASE} from '.';

export async function postAPI(url: string, body: any) {
  var myHeaders = new Headers();
  myHeaders.append('Cookie', 'ASP.NET_SessionId=wr3r1smhn4qtmd452lprf1jy');
  myHeaders.append('Content-type', 'multipart/form-data');

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: body,
    redirect: 'follow',
  };

  // console.log('Đây là đường dẫn: ', url);

  return await fetch(`${URL_BASE}/${url}`, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(e => console.log('Lỗi call api trong postAPI: ', e));
}
