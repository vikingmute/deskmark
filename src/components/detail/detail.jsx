import React from 'react';

import './detail.scss';

export default class Detail extends React.Component {

  constructor(props) {
    super(props);
  },
  render() {
    return (
      <article class="detail-component">
        <h2>{this.props.title}</h2>
        <div>
          {this.props.content}
        </div>
      </acticle>
    )
  }
}
