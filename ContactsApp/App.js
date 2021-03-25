import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import {UserCard} from './src/components/UserCard.js';
import {userArray} from './src/userData.js'

const App = () => {

  return (

    <ScrollView style = {styles.scrollStyle} contentContainerStyle = {styles.scrollContainer}>
      {userArray.map(item=> (
      <UserCard 
      name = {item.userName} 
      phone = {item.userPhone} 
      userpictures = {item.userPic}
      userAdress = {item.addressDescription}
      userMail = {item.contactDescription}
      />))}
    </ScrollView>
    
  );
};


const styles = StyleSheet.create({
scrollStyle: {
    flex: 1
},
scrollContainer: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
}
    

});
export default App;
