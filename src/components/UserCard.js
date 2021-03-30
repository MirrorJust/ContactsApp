import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';


if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  

export const UserCard = ({
    name, 
    phone, 
    userpictures, 
    userAdress, 
    userMail
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePress = () => {
        setIsOpen(!isOpen);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    };

    return (
    <>
    <TouchableOpacity 
        style = {[styles.cardStyle, {height: isOpen ? 190 : 94}]}
        onPress={handlePress}>
        <View style = {styles.mainBox}>
        <View style = {styles.iconBox}>
        <Image 
            style = {styles.iconStyle}
            source={userpictures}/>
        </View>
        <View style = {styles.titleBox}>
            <Text style = {styles.nameStyle}>{name}</Text>
            <Text style = {styles.phoneStyle}>{phone}</Text>
        </View>
        </View>
        {isOpen && (
            <View style = {styles.hiddenBox}>
            <AddressBlock title = 'ADDRESS' description = {userAdress} />
            <AddressBlock title = 'MAIL' description = {userMail} />
            </View>
         )}
    </TouchableOpacity>
    </>
)
}

const AddressBlock = ({title, description}) => {
return (
    <>
    <View style = {styles.adressBox}> 
        <Text style = {styles.addressTitle}>{title}</Text>
        <Text style = {styles.address}>{description}</Text>
    </View>
    </>
)
}

const styles = StyleSheet.create({
cardStyle: {
    width: 363,
    backgroundColor: '#E5E5E5',
    borderRadius: 15,
    marginBottom: 10
},
nameStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00ADD3',
    fontFamily: 'Roboto'
},
iconBox: {
    width: 66,
    height: 63,

    alignItems: 'center',
    justifyContent: 'center'
},
iconStyle: {
    width: 61,
    height: 58,
    borderWidth: 5,
    borderColor: '#00ADD3',
    borderRadius: 30
},
mainBox: {
    flexDirection: 'row',
    paddingTop: 22,
    paddingLeft: 20,

},
phoneStyle: {
    fontSize: 16,
    color: '#00ADD3',
},
titleBox: {
    paddingLeft: 29,
    justifyContent: 'center',
    paddingBottom: 21
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
},
scrollStyle: {
    flex: 1
},
scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center'
}
});