import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import App from '../App';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button } from 'native-base';
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
      console.log(snapshot.val(), typeof snapshot.val());
      newList.push(snapshot.val());
      console.log('new list is: ', newList)
      that.setState({
        posts: newList
      })
    })
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
                  <Text style={{fontStyle:'italic', fontFamily:'AvenirNext-Italic'}}>{item.messageKey}</Text>
                  <View>
                    {mappedComments}
                  </View>
                </CardItem>
                <Button style={{alignSelf: 'center', margin:20}}

                warning
                rounded
                >
                <Text style={{fontSize:12, fontWeight:'bold'}}> Add a Comment </Text>
                </Button>
              </Card>
            }
          />
        </View>
      </Container>
    );
  } // close render
}

AppRegistry.registerComponent('Search', () => Search);
