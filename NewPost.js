import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';


export default class NewPost extends Component{

	constructor(props){
		super(props);
		this.state = {
			postContent:''
		}
	}
	postSubmit = (e)=>{
		console.log('form was submitted', this.state)
	}
	render(){
		return(
			<Container>

				<Text style={{fontSize:20, margin:20}}> This is a new Post </Text>
				<Form>
	      			<Item floatingLabel>
	        			<Label> New Post </Label>
	        			<Input
				        autocorrect = {false}
				        autoCapitalize = 'none'
				        onChangeText={(postContent) => this.setState({ postContent })}
				        />
				    </Item>
				<Text style={{fontSize:10, color:'red', marginTop:30}}> {this.state.postContent}</Text>
				<Button style={{marginTop: 10}}
		        full
		        rounded
		        primary
		         onPress={() => this.postSubmit()}
		        >
		        <Text style={{color:'white'}}> Post to the public! </Text> 
		        </Button>
				</Form> 
			</Container>
			)
	}
}

AppRegistry.registerComponent('NewPost', () => NewPost);
