import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title } from 'native-base';


export default class Home extends Component{
	constructor(){
		super();
	}
	render(){
		const { navigate } = this.props.navigation;
		return(
			<Container>
			<View>
			<Header>
          	<Left>
            <Title style={{fontFamily:'Gill Sans', fontSize:20}}>Home</Title>
            </Left>
          	<Body>
          	</Body>
          	<Right />
          	</Header>
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
		</Container>
		)
	}
}

AppRegistry.registerComponent('Home', () => Home);
