import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

class YtbListLayout extends React.Component {
  render() {
    const {vlists} = this.props;
    const viewAndTimeString = YtbListLayout.getFormattedViewAndTime(vlists);

      const url = "https://www.youtube.com/watch?v="+vlists.id.videoId,
            imgUrl = vlists.snippet.thumbnails.high.url,
            title = vlists.snippet.title,
            channelTitle = vlists.snippet.channelTitle,
            channelUrl = 'https://www.youtube.com/channel/'+vlists.snippet.channelId
    return (
      <div className="col-md-3">
        <a className="searchytb-list__thumbnail pull-left" href={url}><img src={imgUrl} width="210" height="118" /></a>
        <div className="searchytb-list__title">
          <a className="searchytb-list__title-name" href={url}>{title}</a>
          <a className="searchytb-list__title-channel" href={channelUrl}>{channelTitle}</a>
          <p className="searchytb-list__title-channel">{viewAndTimeString}</p>
        </div>
      </div>
    )
  }

  static getFormattedViewAndTime(vlists) {
    const publishDate = new Date(vlists.snippet.publishedAt);
    return `${timeAgo.format(publishDate)}`;
  }
}

export default YtbListLayout;