import React, { Component } from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import App from '../App';
import Comments from './Comments';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button,
 List, ListItem, Form, Textarea } from 'native-base';
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
      <Container>
        <View>
          <DeckSwiper
            dataSource={this.state.posts}
            renderItem={item =>
              <Card style={{ elevation: 5, height:450}}>
                <CardItem>
                  <Left>
                    <Body>
                    <Text style={{textAlign: 'center', fontSize:30}}> Posts </Text>
                    </Body>
                  </Left>
                </CardItem>
                  <CardItem>
                  <ScrollView>
                    <Text style={{fontStyle:'italic', fontFamily:'AvenirNext-Italic'}}>{item.message}</Text>
                  </ScrollView>
                </CardItem>
                <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: .5,
                  marginBottom: 15
                  }}
                 />
                 <Comments comments={item.comments} messageKey={item.messageKey} updateCommentsList={this.updateCommentsList} />

            </Card>
            }
          />
        </View>
      </Container>
    );
  } // close render
}



AppRegistry.registerComponent('Search', () => Search);
