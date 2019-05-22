export function ytbApiServiceCall(filterText, pageToken) {
  let pageTokenVal = '';
  if (pageToken) {
    pageTokenVal = "&pageToken="+pageToken;
  }

  const val = filterText;
  const api_key = "AIzaSyB8on7ZhELOZGEAd-Et-PV4CcQGZ6ZFfV0";

  const url1 = "https://www.googleapis.com/youtube/v3/search?chart=mostPopular&key="+api_key+"&q="+val+"&part=snippet,id&maxResults=10"+pageTokenVal;

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

        const vlist_id = vlists.map(vlist => vlist.id.videoId);
        const item_id = vlist_id.toString();

        return fetch("https://www.googleapis.com/youtube/v3/videos?key="+api_key+"&part=statistics,snippet&id="+item_id+"");
            
        const {nextPageToken, prevPageToken} = data;
        const objects = {
          'vlists': vlists,
          'nextPageToken': nextPageToken,
          'prevPageToken': prevPageToken
        };

        resolve (objects);
      })
      .then(res => res.json())
      .then(function (data) {
        const vlist = data.items.map(obj => obj);
        const objects = {
          'vlist': vlist
        }
        resolve (objects);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return p1;
};

Promise.all([ytbApiServiceCall()]);
