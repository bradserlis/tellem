import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import App from '../App';
import { Container, Content, Header, Form, Input, Item, Button, Label, Textarea, Body, Left, Right, Title, Subtitle } from 'native-base';
import base from './base'

export default class NewPost extends Component{

	constructor(props){
		super(props);
		this.state = {
			postContent:''
		}
	}
	postSubmit = (e)=>{
		console.log('form was submitted', this.state)
		console.log('here is the database details:', this.props.config )
	}
	render(){
		
		return(

      <Container>
        	<Header>
          	<Left />
          	<Body>
            <Title>New Post</Title>
            <Subtitle> Create your new post </Subtitle>
          	</Body>
          	<Right />
        	</Header>
        	<Content padder>
          	<Form>
            <Textarea
            style={{backgroundColor:'white'}}
             rowSpan={5}
             bordered
             onChangeText={(postContent) => this.setState({ postContent })}
             placeholder="Enter new post here..."
            />
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
        </Content>
      </Container>
    );
  }
}


AppRegistry.registerComponent('NewPost', () => NewPost);
