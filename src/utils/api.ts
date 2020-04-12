type Params = {
  method: string;
  path: string;
  param?: Object;
  apiUrl?: string;
};

const domain = 'https://reactnative.dev/movies.json';

function api(arg: Params) {
  const {method, path, param, apiUrl} = arg;
  let link = apiUrl !== undefined ? apiUrl : domain;
  let url = link + path;
  let keyArr = Object.keys(param || {});
  switch (method) {
    case 'GET':
      keyArr.length > 0 &&
        keyArr.map((key: String, index: Number) => {
          if (url.indexOf('?') < -1) {
            if (index === 0) {
              url += '?';
            } else {
              url += '&';
            }
          } else {
            url += '&';
          }
          url += key + '=' + param[key];
        });
      return fetch(url).then(response => response.json());
    case 'POST':
      let formData = new FormData();
      keyArr.length > 0 &&
        keyArr.map(item => {
          formData.append(item, param[item]);
        });
      return fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: formData,
      }).then(response => response.json());
    default:
      return new Promise(resolve => {
        resolve(-1);
      });
  }
}

export default api;
