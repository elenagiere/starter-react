import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import Icon from '@collab-ui/react/es/Icon';
// import ciscospark from 'ciscospark';
// import spark from 'ciscospark/env';

class ChatInput extends Component {

    constructor () {
        super();

        this.state = {
            value: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        // // alert('A name was submitted: ' + this.state.value);
        // // const ciscospark = require('ciscospark');
        // const ACCESS_TOKEN = `ZWUyYmE5MWMtYTAyNC00MGZhLTg2NWUtNTRhYmI3YTRkMGNjMjUzMjg0ZGQtZjU1
        //     _PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f`;

        // const spark = ciscospark.init({
        //     credentials: {
        //         access_token: ACCESS_TOKEN,
        //     }
        //     });

        // spark.rooms.create({ title: `My First Room`}).then(room => {
        //     return Promise.all([
        //         spark.memberships.create({
        //             roomId: room.id,
        //             personEmail: document.getElementById(`inviteeEmail`).value
        //         })
        //     ]).then(() =>
        //         spark.messages.create({
        //             markdown: this.state.value,
        //             roomId: room.id
        //         })
        //     );
        // });
    }

    handleChange (event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
        <Fragment>
            <div className="chat-input">
                <div className="menu-row">
                    <div className="icon-div">
                      <i className="cui-icon icon icon-attachment_16 menu-option" />
                    </div>
                    <div className="icon-div">
                      <i className="cui-icon icon icon-text-format_16 menu-option" />
                    </div>
                    <div className="icon-div">
                      <i className="cui-icon icon icon-markdown_16 menu-option" />
                    </div>
                </div>
                <form id="messenger" onSubmit={this.handleSubmit}>
                    <input
                        id="messageText"
                        name="mesageText"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Type your message to Michael Littlefoot" />
                </form>
            </div>
        </Fragment>
        );
    }
}

// ChatInput.propTypes = {
//     active: PropTypes.bool,
//     type: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     messagePreview: PropTypes.string.isRequired,
// };

// ChatInput.defaultProps = {
//     active: false
// };

export default ChatInput;
