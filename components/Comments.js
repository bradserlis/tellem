import React, { Component } from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button,
 List, ListItem, Form, Textarea } from 'native-base';
import * as firebase from 'firebase';

export default class Comments extends Component {
	constructor(props){
		super(props);
		this.state = {
			newComment: ''
		}
	}

	addComment = () =>{
	    key = this.props.messageKey;
	    // console.log('this is the key: ', key);
	    this.props.updateCommentsList(this.state.newComment, key);
	    this.setState({
	    	newComment:''
	    })
	  }

	render() {
		let commentArr = this.props.comments ? Object.values(this.props.comments) : {};
		// console.log('rendering comments component', this.props);

		let commentText = <View><Text>Be the first to comment!</Text></View>
		if(this.props.comments){
			commentText = commentArr.map((c, i) => {
				return (
					<View>
						<Text style={{color:'white', fontWeight:'600', padding:8}}key={i}>{c}</Text>
						<View
					  	style={{
					    borderBottomColor: 'black',
					    borderBottomWidth: 1,
					  	}}
					/>
				</View>
				);
			});
		}
			
		return (
			<View style={{backgroundColor:'transparent'}}>
				<Text>COMMENTS:</Text>
				{commentText}
				<View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: .5,
                  marginBottom: 15
                  }}
                 />
	            <Form>
		            <Textarea
		            style={{backgroundColor:'rgba(255, 255, 255, .8)'}}
		             id="commentInput"
		             rowSpan={4}
		             bordered
		             onChangeText={(newComment) => this.setState({ newComment: newComment })}
		             placeholder="Enter new comment here..." 
		             value={this.state.newComment}
		             />
		            <Button style={{alignSelf: 'center', margin:20}}
		                onPress={() => this.addComment()}
		                warning
		                rounded
		                >
		              <Text style={{fontSize:12, fontWeight:'bold'}}> Add a Comment </Text>
		            </Button>
		        </Form>
			</View>
			);
	}
}

AppRegistry.registerComponent('Comments', () => Comments);