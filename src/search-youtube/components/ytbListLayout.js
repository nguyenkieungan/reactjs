import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import numeral from 'numeral';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

class YtbListLayout extends React.Component {
  render() {
    const {vlist} = this.props;
    const viewAndTimeString = YtbListLayout.getFormattedViewAndTime(vlist);

      const url = "https://www.youtube.com/watch?v="+vlist.id.videoId,
            imgUrl = vlist.snippet.thumbnails.high.url,
            title = vlist.snippet.title,
            channelTitle = vlist.snippet.channelTitle,
            channelUrl = 'https://www.youtube.com/channel/'+vlist.snippet.channelId;
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

  static getFormattedViewAndTime(vlist) {
    const publishDate = new Date(vlist.snippet.publishedAt);
    const viewCount = numeral(vlist.statistics.viewCount).format('0.0a');
    const viewtime = `<span class="searchytb-list__text--uppercase">${viewCount}</span> views • ${timeAgo.format(publishDate)}`;
    return <span dangerouslySetInnerHTML={{ __html: viewtime }} />;
  }
}

export default YtbListLayout;