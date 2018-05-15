import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, ImageBackground } from 'react-native';
import App from '../App';
import Comments from './Comments';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button,
 List, ListItem, Form, Textarea, Title, Right } from 'native-base';
import * as firebase from 'firebase';

export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
    // this.componentWillMount = this.componentWillMount.bind(this)
  }


  componentWillMount = () => {
    let newList=[];
    let that = this;
    let ref = firebase.database().ref('/');
    ref.orderByKey().on("child_added", function(snapshot) {
      // console.log(snapshot.val(), typeof snapshot.val());
      newList.push(snapshot.val());
      that.setState({
        posts: newList,
      })
    })
  } 

updateCommentsList = (newComment, key) => {
  let returnValue = firebase.database().ref('/'+key).child('comments').push(newComment);

  let allPosts = this.state.posts;
  let post = allPosts.filter(p => {
    return p.messageKey === key;
  })[0];

  if(post){
    allPosts = allPosts.filter(p => {
      return p.messageKey != key;
    });

    post.comments[returnValue.key] = newComment;
    allPosts.push(post);
    this.setState({ posts: allPosts });
  }
  else {
    console.log('post with key', key, 'was not found');
  }
}

    
  render() {
    let post = this.state.posts[0] || {comments:{}}
    
    let commentsArray = Object.values(post.comments)
    var mappedComments = commentsArray.map( function(comment, index) {
      return <Text key={index}>{comment}</Text>;
    })

    return(
      <ImageBackground
       style={{flex:1, width: window.width, 
        height: window.height}}
      source={require('../img/backdrop.jpg')}>
      <Container>
  
        <View>
          <Header>
            <Left>
              <Title style={{fontFamily:'Gill Sans', fontSize:20, color:'rgba(255,  180, 80, 1)', fontWeight:'bold'}}>Posts</Title>
            </Left>
            <Body>
            </Body>
            <Right />
          </Header>
          <DeckSwiper
            dataSource={this.state.posts}
            renderItem={item =>
              <Card style={{ elevation: 5, height:450, backgroundColor:'transparent'}}>
                <CardItem>
                  <Left>
                    <Body>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem style={{backgroundColor:'transparent'}}>
                  <ScrollView>
                    <Text style={{fontStyle:'italic', fontFamily:'AvenirNext-Italic', color:'white', fontWeight:'500'}}>{item.message}</Text>
                  </ScrollView>
                </CardItem>
                <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: .5,
                  marginBottom: 15
                  }}
                 />
                 <ScrollView>
                 <Comments comments={item.comments} messageKey={item.messageKey} updateCommentsList={this.updateCommentsList} />                                
                 </ScrollView>
              </Card>
            }
          />
        </View>
      </Container>
      </ImageBackground>
    );
  } // close render
}



AppRegistry.registerComponent('Search', () => Search);
