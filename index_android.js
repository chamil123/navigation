import React,{Component} from 'react';
import{AppRegistry,View,Text} from 'react-native';

import{StackNavigator} from 'react-navigation';
class InputUsers extends Component{


}
 class CodeTR extends Component{
    static navigationOptions={
        title:'Input users'
    }
    render(){
        return(
            <View>
                <Text>Hello code</Text>
            </View>
        );
    }
}
export default CodeTR =StackNavigator({
First:{screen: InputUsers}


});
AppRegistry.registerComponent('navigation',()=>CodeTR);

