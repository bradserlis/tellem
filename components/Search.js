import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import App from '../App';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';


export default class Search extends Component{
	constructor(){
		super();
		this.state = {
			posts:['post1', 'post2', 'post3']
		}
	}
	render(){
		return(
			<Container>
        <View>
          <DeckSwiper
            dataSource={this.state.posts}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
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
