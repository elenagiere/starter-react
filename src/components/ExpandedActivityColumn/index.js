import React, { Component } from 'react';

class ExpandedActivityColumn extends Component {

    componentDidMount () {
      const parentContainer = document.getElementById('expanded-activity-column');
      parentContainer.appendChild(document.getElementById('my-webexteams-widget'));
    }

    render() {
      return (
        <div id="expanded-activity-column" className="expanded-activity-column" />
      );
    }
}

export default ExpandedActivityColumn;
