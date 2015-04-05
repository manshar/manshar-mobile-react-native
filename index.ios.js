'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

var ArticlesList = require('./App/Views/ArticlesList');

class Manshar extends React.Component {
  render() {
    return (
      <ArticlesList />
    );
  }
}

AppRegistry.registerComponent('Manshar', () => Manshar);
