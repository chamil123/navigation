
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputName: '',
      TextInputEmail: '',
      TextInputPhoneNumber: '',
    };
  }
InputUsers=()=>{
  const {TextInputName}=this.state;
  const {TextInputEmail}=this.state;
  const {TextInputPhoneNumber}=this.state;

  // alert("sasdas");
  fetch('http://192.168.8.106/tr_reactnative/insert.php',{
    method:'POST',
    headers:{
      'Accept': 'application/json',
    'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:TextInputName,
      email:TextInputEmail,
      phone_number:TextInputPhoneNumber,
    })
  }).then((response)=>response.text())
  .then((responseJson)=>{
    Alert.alert(responseJson);
  }).catch((error)=>{
    alert(error);
    console.error(error);
  })
  

}
  render() {
    return (
      <View>
        <TextInput
          placeholder='Enter name'
           onChangeText={TextInputValue=>this.setState({TextInputName:TextInputValue})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyle}
        />
        <TextInput
          placeholder='Enter Email'
           onChangeText={TextInputValue=>this.setState({TextInputEmail:TextInputValue})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyle}
        />
        <TextInput
          placeholder='Enter phone number'
           onChangeText={TextInputValue=>this.setState({TextInputPhoneNumber:TextInputValue})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyle}
        />
        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.InputUsers}>
          <Text >Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  TextInputStyle: {
    textAlign: 'center',
    marginTop:20,
    marginBottom: 7,
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
  TouchableOpacityStyle:{

  }
});

// export default App;
