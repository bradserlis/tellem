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
import Home from "./Home";
import Search from "./Search";
import NewPost from './NewPost'
import  { BrowserRouter as Router, Route } from 'react-router-dom';


import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Home message="something"/>
      <NewPost />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit meee App.js
        </Text>
        <Text style={styles.instructions}>
        </Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
