import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import App from '../App';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button,
 List, ListItem, Form, Textarea } from 'native-base';
import * as firebase from 'firebase';

export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      newComment: ''
    }
    // this.componentWillMount = this.componentWillMount.bind(this)
  }


  componentWillMount = () => {
    let newList=[];
    let that = this;
    let ref = firebase.database().ref('/');
    ref.orderByKey().on("child_added", function(snapshot) {
      console.log(snapshot.val(), typeof snapshot.val());
      newList.push(snapshot.val());
      console.log('new list is: ', newList)
      that.setState({
        posts: newList,
      })
    })
  } 

  addComment= () =>{
   key = this.state.posts[0].messageKey;
    console.log('this is the key: ', key)
    firebase.database().ref('/'+key).child('comments').push(this.state.newComment);

    // firebase.database().ref('/'+ key).child('comments').push(this.state.newComment)
  }

    
  render() {
    let post = this.state.posts[0] || {comments:{}}
    
    console.log('this is post: ', post)
    let commentsArray = Object.values(post.comments)
    // console.log('this is commentsArray:', commentsArray)
    // console.log(commentsArray[0])
    // var reallyNow = Array.from(commentsArray)

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
                  <Text style={{fontStyle:'italic', fontFamily:'AvenirNext-Italic'}}>{item.message}</Text>
                </CardItem>
                <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: .5,
                  marginBottom: 15
                  }}
                 />
                  {mappedComments}
                  <Form>
            <Textarea
            style={{backgroundColor:'white'}}
             rowSpan={4}
             bordered
             onChangeText={(newComment) => this.setState({ newComment })}
             placeholder="Enter new comment here..."
            />
                <Button style={{alignSelf: 'center', margin:20}}
                onPress={() => this.addComment()}
                warning
                rounded
                >
                <Text style={{fontSize:12, fontWeight:'bold'}}> Add a Comment </Text>
                </Button>
            <Text style={{fontSize:10, color:'red', marginTop:30}}> {this.state.newComment}</Text>
            </Form>
              </Card>
            }
          />
        </View>
      </Container>
    );
  } // close render
}



AppRegistry.registerComponent('Search', () => Search);
