import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView } from 'react-native';
import App from '../App';
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

var data=['person1', 'person2'];

export default class NewPost extends Component{

	constructor(props){
		super(props);
		this.state = {
			postContent:''
		}

		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		this.state = {
			listViewData: data,
			newContact: ''
		}
	}

	addPost= () =>{
let key = firebase.database().ref('/posts').push().key
    firebase.database().ref('/').child(key).child('message').set(this.state.postContent)
    firebase.database().ref('/').child(key).child('comments').push('')
    firebase.database().ref('/').child(key).child('messageKey').set(key)
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
		         onPress={() => this.addPost()}
		        >
		        <Text style={{color:'white'}}> Post to the public! </Text> 
		        </Button>
          </Form>
        </Content>

        <Content>
        <List
        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
        renderRow={data=>
        	<ListItem>
        	<Text> {data} </Text>
        	</ListItem>
        }
        renderLeftHiddenRow={data=>
        	<Button full>
        	</Button>
        }
        renderRightHiddenRow={data=>
        	<Button full danger>
        	</Button>
        }
        />
        </Content>
      </Container>
    );
  }
}


AppRegistry.registerComponent('NewPost', () => NewPost);
