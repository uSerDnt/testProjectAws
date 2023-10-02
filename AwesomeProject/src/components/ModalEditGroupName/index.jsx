import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native';
import Modal from 'react-native-modal';

const ModalEditGroupName = ({ isVisible, closeModal }) => {
  const [newGroupName, setNewGroupName] = useState('');
     const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  return (
    <Modal isVisible={isVisible} style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Đặt tên nhóm</Text>
        <View style={styles.inputContainer}>
           <View >
            <Text>
      Tên nhóm<Text style={styles.redAsterisk}>*</Text>
    </Text>
           </View>
           <View style={styles.input}>
             <TextInput
          placeholder="Nhập tên nhóm"
          value={newGroupName}
           onChangeText={(text) => {
                setNewGroupName(text);
                setIsSaveEnabled(!!text);
              }}
        />
           </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonHuy} onPress={closeModal}>
            <Text style={styles.buttonTextHuy}>Hủy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonSave, !isSaveEnabled && styles.disabledButton]}
            onPress={closeModal}
            disabled={!isSaveEnabled}
          >
             <Image
              source={require("../../../assets/icons/Save.png")}
              style={{ width: 16, height: 16 }}
            />
            <Text style={styles.buttonTextSave}>Lưu</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </Modal>
  );
};

export default ModalEditGroupName;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black',
  },
  input: {
   height:40
  },
  inputContainer:{
    borderRadius: 8,
    padding: 10,
    backgroundColor:'gray',
    height:70
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10
  },
  buttonHuy: {
    padding: 10,
    width:'50%',
    justifyContent:'center',
    alignItems:'center'
  },
   buttonSave: {
    padding: 10,
    backgroundColor:'blue',
    borderRadius:8,
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  buttonTextHuy: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine:'underline'
  },
   buttonTextSave: {
    color: 'white',
    fontSize: 16,
    marginLeft:10
  },
  redAsterisk:{
    color:'red'
  }
});
