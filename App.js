/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import * as firebase from 'firebase';
import { base } from './components/base';
import Home from "./Home";
import Search from "./components/Search";
import NewPost from './components/NewPost'
import Router from './routes/Router';




import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

export default class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Router />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
