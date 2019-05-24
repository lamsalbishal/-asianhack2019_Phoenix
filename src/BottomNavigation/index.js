

import React, {Component} from 'react';
import { StyleSheet, Text, View,Picker,AsyncStorage,Modal,TouchableOpacity} from 'react-native';


export default class Index extends Component {
    constructor(){
        super();
        this.state={
            language:'',
            modalVisible: false,
        }
    }

  

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    onTitleFun(data){
        AsyncStorage.setItem('field',data); 
        this.setState({
            language:data,
            
        })
        this.setModalVisible(!this.state.modalVisible);
    }

    modalShow(){
        return(
            <View style={{flex:1}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{marginTop: 22}}>
                       <View>
                           <TouchableOpacity onPress={() => this.onTitleFun('Agriculture')}>
                             <Text>Agriculture</Text>
                           </TouchableOpacity>
                           <View>
                               <Text>Education</Text>
                                <TouchableOpacity onPress={() => this.onTitleFun('Science')}>
                                   <Text>Science</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onTitleFun('History')}>
                                    <Text>History</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onTitleFun('Math')}>
                                    <Text>Math</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onTitleFun('Fashion')}>
                                   <Text>Fashion</Text>
                                </TouchableOpacity>
                           </View>
                           <View>
                               <TouchableOpacity>

                               </TouchableOpacity>
                           </View>
                           
                       </View>
                    </View>
                </Modal>
            </View>
        )
    }

    viewShow(){
        return(
            <View>
                <View>
                    <Text>Worldwide Remote Connection</Text>
                    <Text>Develop our Remote place</Text>
                    <Text>{this.state.language}</Text>
                </View>
                
                <View >
                    <TouchableOpacity onPress={ () => {  this.setModalVisible(true) }}>
                        <View style={{flexDirection:'row'}}>

                        <Text>
                            Choose
                        </Text>
                        <Text>
                            arrow
                        </Text>
                        </View>
                    </TouchableOpacity>
                
                </View>
                <View>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('BottomNavigation')}}>
                        <Text>Button</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
              
                {this.viewShow()}
                {this.modalShow()}
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#F5FCFF',
  },
  
});
