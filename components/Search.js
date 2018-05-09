import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import App from './App';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';


export default class Search extends Component{
	constructor(){
		super();
		this.state = {
			name:'brad'
		}
	}
	render(){
		return(
			<View>
			<Text style={{fontSize:20, margin:20}}> This is the Home Page </Text>
			<Text>{this.props.message} </Text>
			<Text>{this.state.name} </Text>
			</View>
			)
	}
}

AppRegistry.registerComponent('Search', () => Search);
