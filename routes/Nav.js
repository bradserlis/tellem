import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label,
 Left, Body, Right, Title } from 'native-base';


export default class Nav extends Component{
	constructor(props){
		super(props);
		this.state = {
			name:'brad'
		}
	}
	render(){
		const { navigate } = this.props.navigation;
		return(
		<Container>
			<Button
			warning
			onPress={
				() => navigate('Post')
			}>
			<Text style={{color:'white', margin:5}}>To New Posts</Text>
			</Button>
			<Button
			success
			onPress={
				() => navigate('Search', {name: 'Search Page'})
			}>
			<Text style={{color:'white', margin:5}}>Search Results</Text>
			</Button>
		</Container>
		)
	}
}

AppRegistry.registerComponent('Nav', () => Nav);
