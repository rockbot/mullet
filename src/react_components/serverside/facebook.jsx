'use strict';

var React = require('react');
var TitleLink = require('./title-link.jsx');

var Styles = {
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  header: {
    textAlign: 'center'
  },
  image: {
    display: 'block',
    margin: '0 auto 20px'
  },
  subtitle: {
    fontSize: '1em',
    fontWeight: 300
  }
};

var Facebook = React.createClass({
  propTypes: {
    subtitle: React.PropTypes.string,
    title: React.PropTypes.string
  },
  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {},
  componentWillUnmount: function () {},

  render: function() {
    return (
      <div style={Styles.flexContainer}>
        <header style={Styles.header}>
          <img
            style={Styles.image}
            src="/images/mullet_600.png"
            width="200"
            alt="Mullet"/>

          <TitleLink title={this.props.title} />
          <p style={Styles.subtitle}>{this.props.subtitle}</p>
          <p style={Styles.subtitle}>
            Created by <a href="http://github.com/lynnaloo/">@jlembeck</a>
          </p>
        </header>
      </div>
    );
  }
});

module.exports = Facebook;
