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
  Navigator,
  Image, ImageBackground
} from 'react-native';

import * as firebase from 'firebase';
import Home from "./Home";
import Landing from "./Landing";
import Search from "./components/Search";
import NewPost from './components/NewPost'
import Router from './routes/Router';
import Nav from './routes/Nav'
import styles from './styles'


import { Container, Content, Header, Form, Input, Item, Title, Button, Label, Left, Body, Right } from 'native-base';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ImageBackground
       style={{flex:1, width: window.width, 
        height: window.height}}
      source={require('./img/rough_diagonal.png')}>
      <Router />
      </ImageBackground>
    );
  }
}

