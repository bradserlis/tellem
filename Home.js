import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';


export default class Home extends Component{
	constructor(){
		super();
	}
	render(){
		const { navigate } = this.props.navigation;
		return(
		<View>
			<View>
			<Text style={{fontSize:20, margin:20, textAlign: 'center'}}> This is the Home Page </Text>
			<Button style={{margin:5}}
			block
			rounded
			iconLeft
			info
			onPress={
				() => navigate('Post', {name: 'Testing123'})
			}>
			<Text style={{color:'white', margin:5}}>To New Posts</Text>
			</Button>
			</View>
			<View>
			<Button style={{margin:5}}
			block
			rounded
			iconRight
			primary
			onPress={
				() => navigate('Search', {name: 'Search Page'})
			}>
			<Text style={{color:'white', margin:5}}>Search Results</Text>
			</Button>
		</View>
		</View>
		)
	}
}

AppRegistry.registerComponent('Home', () => Home);
