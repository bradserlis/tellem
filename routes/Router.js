import React, { Component } from 'react';
import App from '../App';
import Home from '../Home';
import Search from '../components/Search'
import NewPost from '../components/NewPost'
import { createStackNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { AppRegistry, Text, View } from 'react-native';




const Router = StackNavigator({
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
