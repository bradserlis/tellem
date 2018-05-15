import React, { Component } from 'react';
import { AppRegistry, Text, View, ImageBackground, StyleSheet} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H1, H2, H3 } from 'native-base';

export default class Landing extends Component{
	render(){

		return(
		<ImageBackground
       style={{flex:1, resizeMode:'cover', width: window.width, 
        height: window.height}}
      source={require('./img/title.jpg')}>
      <Left />
      <Body>
      <H1 style={styles.title}> TellEm </H1>
      <H2 style={styles.statements}> Ask your questions...</H2>
      <H2 style={styles.statements}> Make your statements...</H2>
      <H3 style={styles.advice}> Leave your advice... </H3>
      </Body>
      <Right />

      </ImageBackground>
			)
	}

}

const styles = StyleSheet.create({
  title:{
  	fontSize:140, paddingTop:140, marginBottom:150, fontFamily:'Noteworthy',
  	color:'rgb(255, 255, 80)', fontWeight:'300', alignSelf:'auto'
  },
  	statements: {
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
    fontSize: 30,
  },
  advice: {
    color: 'rgba(250,250,240,.7)',
  },
});

AppRegistry.registerComponent('Landing', () => Landing);

