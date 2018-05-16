import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, ImageBackground } from 'react-native';
import { Container, Content, Header, Form, Input, Icon,
	Item, Button, Label, Textarea, Body,
	 Left, Right, Title, Subtitle, List,
 ListItem } from 'native-base';

import * as firebase from 'firebase';

var firebaseconfig = {
    apiKey: "AIzaSyBuJ5UKxKO6XY3eMAnhKvI9gNgQ4vRL-Yw",
    authDomain: "whatshouldido-8533d.firebaseapp.com",
    databaseURL: "https://whatshouldido-8533d.firebaseio.com",
    projectId: "whatshouldido-8533d",
    storageBucket: "whatshouldido-8533d.appspot.com",
    messagingSenderId: "172620956922"
  };
  firebase.initializeApp(firebaseconfig);


export default class NewPost extends Component{

	constructor(props){
		super(props);
		this.state = {
			postContent:''
    }
  }

  addPost= () =>{
const { navigate } = this.props.navigation;
let key = firebase.database().ref('/posts').push().key
    firebase.database().ref('/').child(key).child('message').set(this.state.postContent)
    // firebase.database().ref('/').child(key).child('comments').push('')
    firebase.database().ref('/').child(key).child('messageKey').set(key)
    this.setState({
      postContent:''
    })
    navigate('Home')
  }

  postSubmit = (e)=>{
    console.log('form was submitted', this.state)
  }
  render(){

		return(
      <ImageBackground
       style={{flex:1, width: window.width, 
        height: window.height}}
      source={require('../img/backdrop2.jpg')}>
      <Container>
        	<Header>
          	<Left>
            <Title style={{fontFamily:'Gill Sans', fontSize:20, color:'rgba(255,  180, 80, 1)', fontWeight:'bold'}}>New Post</Title>
            </Left>
            <Body>
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
             value={this.state.postContent}
            />
				<Button style={{marginTop: 10}}
		        full
		        rounded
		        primary
		         onPress={() => this.addPost()}
		        >
		        <Text style={{color:'white'}}> Post to the public! </Text> 
		        </Button>
          </Form>
        </Content>

        
      </Container>
      </ImageBackground>
    );
  }
}


AppRegistry.registerComponent('NewPost', () => NewPost);
