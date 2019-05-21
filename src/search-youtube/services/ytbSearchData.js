export function ytbApiServiceCall(filterText, pageToken) {
  let pageTokenVal = '';
  if (pageToken) {
    pageTokenVal = "&pageToken="+pageToken;
  }

  const val = filterText;
  const api_key = "AIzaSyAM7H6C1_n1_BQUv5675-UaExr1-SCqsfI";

  const url1 = "https://www.googleapis.com/youtube/v3/search?chart=mostPopular&key="+api_key+"&q="+val+"&part=snippet&maxResults=10"+pageTokenVal;

  const p1 = new Promise((resolve, reject) => {
    fetch(url1, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(function (data) {
        const vlists = data.items.map(obj => obj);
        const {nextPageToken, prevPageToken} = data;
        const objects = {
          'vlists': vlists,
          'nextPageToken': nextPageToken,
          'prevPageToken': prevPageToken
        };
        resolve (objects);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return p1;
};

export function ytbGetServiceCall(pageToken) {
  let pageTokenVal = '';
  if (pageToken) {
    pageTokenVal = "&pageToken="+pageToken;
  }

  const api_key = "AIzaSyAM7H6C1_n1_BQUv5675-UaExr1-SCqsfI";
  const url2 = "https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key="+api_key+"&part=snippet,statistics&maxResults=10"+pageTokenVal;

  const p2 = new Promise((resolve, reject) => {
    fetch(url2, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(function (data) {
        const flists = data.items.map(obj => obj);
        const {nextPageToken, prevPageToken} = data;
        const objects = {
          'flists': flists,
          'nextPageToken': nextPageToken,
          'prevPageToken': prevPageToken
        };
        resolve (objects);
      })
      .catch((err) => {
        console.log(err);
      });
  }); 

  return p2;
}

Promise.all([ytbApiServiceCall(), ytbGetServiceCall()]);
