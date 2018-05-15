import React, { Component } from 'react';
import App from '../App';
import Home from '../Home';
import Landing from '../Landing'
import Search from '../components/Search'
import NewPost from '../components/NewPost'
import { createStackNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { AppRegistry, Text, View, ImageBackground } from 'react-native';

const Router = StackNavigator({
	Landing:{
		screen:Landing
	},
	Home: {
		screen: Home
	},
	Post: {
		screen: NewPost
	},
	Search: {
		screen: Search
	}
});

export default Router;

AppRegistry.registerComponent('Router', () => Router);
