'use strict';

var BASE_URL = 'http://api.manshar.com/api/v1';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ListView,
} = React;

var Home = require('./Home');

class ArticlesList extends React.Component {
  constructor() {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderArticle}
        style={styles.listView} />
    );
  }

  renderLoadingView() {
    return (
      <Home loading="true" />
    );
  }

  renderArticle(article) {
    var categoryColor, categoryText;

    if (article.topic !== null) {
      categoryColor = {
        borderColor: article.topic.category.color,
      };
      categoryText = (
        <Text style={styles.category}>
          — {article.topic.title}
        </Text>
      );
    }

    return (
      <View  style={[styles.container, categoryColor]}>
        <Text style={styles.author}>{article.user.name}</Text>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.tagline}>{article.tagline}</Text>
        { categoryText }
      </View>
    );
  }

  fetchData() {
    fetch(BASE_URL + '/articles')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderLeftWidth: 50,
    padding: 10,
    margin: 5,
    borderColor: '#C0C0C0',
  },
  author: {
    color: '#AAAAAA',
    fontSize: 12,
    fontFamily: 'Droid Arabic Naskh',
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'right',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Droid Arabic Naskh',
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'right',
    marginBottom: 8,
  },
  tagline: {
    fontFamily: 'Droid Arabic Naskh',
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'right',
  },
  category: {
    color: '#AAAAAA',
    fontSize: 10,
    fontFamily: 'Droid Arabic Naskh',
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'right',
  },
  listView: {
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
});

module.exports = ArticlesList;
