import React from 'react';

export default class Detail extends React.Component {

  constructor(props) {
    super(props);
  },
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <div>
          {this.props.content}
        </div>
      </acticle>
    )
  }
}
