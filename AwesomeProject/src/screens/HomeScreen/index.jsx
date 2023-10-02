import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Modal from 'react-native-modal';
import ModalEditGroupName from '../../components/ModalEditGroupName';
const Home = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
     <Button
  onPress={toggleModal}
  title="Press"
  color="#841584"
/>
 {isModalVisible && (
        <ModalEditGroupName
          isVisible={isModalVisible}
          closeModal={toggleModal}
        />
      )}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})