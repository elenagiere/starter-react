import React, { Fragment } from 'react';

const HistoryRequest = () => {
  return (
    <Fragment>
    <div className="history-request cui-alert cui-alert--meeting">
        <div className="focused-request" />
        <div className="cui-avatar cui-avatar--medium">
            <div className="cui-avatar cui-avatar--medium" title="J $">
            <i className="icon icon-chat_16" />
            </div>
        </div>
        <div className="cui-alert__content">
            <div className="cui-alert__title" title="Important Meeting">Bob Smith</div>
            <div className="cui-alert__message" title="This is important">5:08 PM | 1m 1s</div>
        </div>
    </div>
    </Fragment>
  );
};

export default HistoryRequest;
