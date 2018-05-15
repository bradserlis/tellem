import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2 } from 'native-base';


export default class Home extends Component{
	constructor(){
		super();
	}
	render(){
		const { navigate } = this.props.navigation;
		return(
			<Container style={{backgroundColor:'transparent'}}>
			<View>
			<Header>
          	<Left>
            <Title style={{fontFamily:'Gill Sans', fontSize:20}}>Home</Title>
            </Left>
          	<Body>
          	</Body>
          	<Right />
          	</Header>
          	</View>
          	<View>
          	<Text style={styles.helpText}> Start by posting a new question </Text>
			<Button style={{margin:50, marginTop:50}}
			block
			rounded
			iconLeft
			info
			onPress={
				() => navigate('Post')
			}>
			<Text style={{color:'white', margin:5}}>Write New Post</Text>
			</Button>
			</View>
			<View>
			<Text style={styles.helpText}>Or view questions others created, and leave your feedback</Text>
			<Button style={{margin:50}}
			block
			rounded
			iconRight
			primary
			onPress={
				() => navigate('Search', {name: 'Posts Collection'})
			}>
			<Text style={{color:'white', margin:5}}>Posts Collection</Text>
			</Button>
		</View>
		</Container>
		)
	}
}

const styles = StyleSheet.create({
  helpText:{
  	fontSize:20,
  	textAlign:'center',
  	marginTop: 20,
  	fontStyle:'italic'
  },
  overlay:{
  	backgroundColor:'rgba(0,0,0,.2)',
  	height: window.height,
  	width: window.width,
  	flex:1
  }
});


AppRegistry.registerComponent('Home', () => Home);
