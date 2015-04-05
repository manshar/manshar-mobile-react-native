'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

class Home extends React.Component {
  renderLoadingView() {
    if (this.props.loading) {
      return (
        <Text>
          جاري التحميل...
        </Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          مَنْشَر
        </Text>
        <Text style={styles.tagline}>
          منصة النشر العربية
        </Text>
        { this.renderLoadingView() }
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'Droid Arabic Naskh',
    fontStyle: 'normal',
    fontWeight: '700',
    marginBottom: -25,
  },
  tagline: {
    color: '#CA1504',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Droid Arabic Naskh',
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 50,
  },
});

module.exports = Home;
