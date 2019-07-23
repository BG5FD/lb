import qs from 'qs';
import fetch from 'node-fetch';

const httpRequest = (url, options) => fetch(url, options)
  .then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      throw Error;
    }
  }).then(res => {
    // const {
    //   dataType,
    // } = options;
    // if (dataType === 'text') {
    //   return res.text();
    // }
    return res.json();
  }).catch(error => {
    // sysError();
    console.log(error);
  });

const requestGet = (url, method, data, dataType) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      mode: 'no-cors',
    },
    dataType,
  };
  return httpRequest(`${url}?${qs.stringify(data)}`, options);
};

const requestPost = (url, method, data, dataType) => {
  const options = {
    method,
    body: qs.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      mode: 'no-cors',
    },
    dataType,
  };
  return httpRequest(url, options);
};

const request = (url, method, data, dataType) => {
	if (method === 'get') {
		return requestGet(url, method, data, dataType);
	} else {
		return requestPost(url, method, data, dataType);
	}
};

export default request;
