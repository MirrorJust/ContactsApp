import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



const App = () => {
  return (
    <View style = {styles.root}>
      <View style = {styles.cardStyle}>
        <View style = {styles.mainBox}>

          <Image 
          style = {styles.iconStyle}
          source={require('./icons/image.png')}/>

          <View style = {styles.titleBox}>
            <Text style = {styles.nameStyle}>Laenne Graham</Text>
            <Text style = {styles.phoneStyle}>Phone: 010-692-6593 * 09125</Text>
          </View>
        </View>
        <View style = {styles.hiddenBox}> 
          <Text style = {styles.addressTitle}>ADDRESS</Text>
          <Text style = {styles.address}>53198-4257, South Elvis, Hoeger Mall, Apt. 692</Text>
        </View>
        <View style = {styles.hiddenBox}>
          <Text style = {styles.mailTitle}>MAIL</Text>
          <Text style = {styles.mail}>graham@yahoo.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardStyle: {
    width: 363,
    height: 190,
    backgroundColor: '#E5E5E5',
    borderRadius: 15,
  },
  nameStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00ADD3',
    fontFamily: 'Roboto'
  },
  iconStyle: {
    width: 73,
    height: 73,
    backgroundColor: '#00ADD3',
    borderRadius: 36
  },
  imageStyle: {

  },
  mainBox: {
    flexDirection: 'row',
    paddingTop: 22,
    paddingLeft: 16,

  },
  phoneStyle: {
    fontSize: 16,
    color: '#00ADD3',
  },
  titleBox: {
    paddingLeft: 26,
    justifyContent: 'center'
  },
  hiddenBox: {
    paddingLeft: 115,

  },
  addressTitle: {
    fontSize: 9,
    fontWeight: '700',
    color: '#00ADD3'
    
  },
  address: {
    fontSize: 12,
    fontWeight: '400',
    color: '#0A0A0A',
    width: 154,
    paddingBottom: 13
  },
  mailTitle: {
    fontSize: 9,
    fontWeight: '700',
    color: '#00ADD3'
    
  },
  mail: {
    fontSize: 12,
    fontWeight: '400',
    color: '#0A0A0A',
    width: 154
  }
});

export default App;
