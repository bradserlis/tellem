import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import App from '../App';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import * as firebase from 'firebase';



export default class Search extends Component{
	constructor(){
		super();
		this.state = {
			posts:['post1', 'post2', 'post3']
		}
	}

  componentDidMount(){
// Find all posts 
var ref = firebase.database().ref("posts");
ref.orderByKey().on("child_added", function(snapshot) {
 console.log(snapshot.val());
});

  }

	render(){
		return(
			<Container>
        <View>
          <DeckSwiper
            dataSource={this.state.posts}
            renderItem={item =>
              <Card style={{ elevation: 5 }}>
                <CardItem>
                  <Left>
                    <Text> Thumbnail here </Text>
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                  <CardItem>
                  <Text>{item}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

AppRegistry.registerComponent('Search', () => Search);
