import React from 'react';

const ExpandedActivityColumn = () => {
  return (
    <div className="history-data-column">
        <div className="menu-row">
            <i className="menu-option icon icon-dialpad_20 mini-side-bar-icon" />
            <i className="menu-option icon icon-email_20 mini-side-bar-icon" />
            <i className="menu-option icon icon-help-circle_20 mini-side-bar-icon" />
        </div>
        <div className="layer">
            <h4>Customer Profile</h4>
            <div className="profile-row section-box message-box">
            <div className="message-box-content">
                <div className="message-header">
                    <span className="name">Paul Potter</span>
                </div>
                <div className="icon-text-row green">
                <i className="icon icon-check-circle_16" />
                <span>CUSTOMER AUTHENTICATED</span>
                </div>
            </div>
            </div>
            <div className="section-box message-box">
            <div className="message-box-content">
                <div className="message-header">
                    <span className="name">CONTACT INFO</span>
                    <i className="float-right icon icon-edit_16" />
                </div>
                <div className="icon-text-row">
                <i className="icon icon-phone-adr_16" />
                <span>+1254920323083</span>
                </div>
                <div className="icon-text-row">
                <i className="icon icon-email_16" />
                <span>Paulpotter@gmail.com</span>
                </div>
            </div>
            </div>
            <div className="sentiment-analysis section-box message-box">
            <div className="message-box-content">
                <div className="message-header">
                    <span className="name">SENTIMENT ANALYSIS</span>
                </div>
                <p>Sentiment Breakdown</p>
            </div>
            </div>
            <div className="sentiment-score section-box message-box">
            <div className="message-box-content">
                <p className="name">Average sentiment score</p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ExpandedActivityColumn;
