import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const InforGroupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.halfScreen}>
        <View style={styles.headerAvatar}>
          <View style={styles.titleAvatar}>
            <View style={{ height: 80, width: 80, backgroundColor: 'blue', borderRadius: 50 }}>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 30 }}>
              <View><Text style={styles.titleClass}>Lop 1A1</Text></View>
              <View><Image
                source={require("../../../assets/icons/edit2.png")}
                style={{ width: 40, height: 40 }}
              /></View>
            </View>
          </View>
        </View>
        <View style={styles.option}>
          <View style={styles.optionItem}>
            <View style={styles.icon}><Image
              source={require("../../../assets/icons/addmember.png")}
              style={{ width: 30, height: 30 }}
            /></View>
            <View style={styles.optionTitleContainer}>
              <Text style={styles.titleOption}>Thêm thành viên</Text>
            </View>
          </View>
        </View>
        <View style={styles.option}>
          <View style={styles.optionItem}>
            <View style={styles.icon}><Image
              source={require("../../../assets/icons/member.png")}
              style={{ width: 30, height: 30 }}
            /></View>
            <View style={styles.optionTitleContainer}>
              <Text style={styles.titleOption}>Xóa thành viên</Text>
            </View>
          </View>
        </View>
        <View style={styles.option}>
          <View style={styles.optionItem}>
            <View style={styles.icon}><Image
              source={require("../../../assets/icons/bin.png")}
              style={{ width: 30, height: 30 }}
            /></View>
            <View style={styles.optionTitleContainerEnd}>
              <Text style={styles.titleOption}>Xóa lịch sử trò chuyện</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.quarterScreen}>
         <View style={styles.option}>
          <View style={styles.optionItemOut}>
            <View style={styles.icon}><Image
              source={require("../../../assets/icons/SignOut.png")}
              style={{ width: 30, height: 30 }}
            /></View>
            <View style={styles.optionTitleContainerOut}>
              <Text style={styles.titleOptionOut}>Rời khỏi nhóm</Text>
            </View>
          </View>
        </View>
        <View style={styles.option}>
          <View style={styles.optionItemOut}>
            <View style={styles.icon}><Image
              source={require("../../../assets/icons/kickMember.png")}
              style={{ width: 30, height: 30 }}
            /></View>
            <View style={styles.optionTitleContainerEnd}>
              <Text style={styles.titleOptionOut}>Xóa Nhóm</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  halfScreen: {
    flex: 0.5,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10
  },
  quarterScreen: {
    flex: 0.2,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'space-around', 
  },
  headerAvatar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  option: {
    flex: 0.2,
    justifyContent: 'space-around'
  },
  titleAvatar: {
    alignItems: 'center',
  },
  titleClass: { fontSize: 21, fontWeight: 'bold', color: 'black', paddingRight: 8 },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    height: 60,
  },
  titleOption: {fontSize:20, color:'black'},
   optionTitleContainer: {
    flex: 1,
    borderBottomWidth: 1, 
    borderBottomColor: 'gray', 
    paddingVertical: 15,
  },
  optionTitleContainerOut: {
    flex: 1,
    borderBottomWidth: 1, 
    borderBottomColor: 'gray', 
    paddingVertical: 15,
    height: 80,
    justifyContent:'center'
  },
  optionTitleContainerEnd: {
    paddingVertical: 10,
  },
  icon:{ paddingRight: 8 },
  titleOptionOut:{
    fontSize: 20,
    color:'red'
  },
  optionItemOut:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    height: 60,
  }
});

export default InforGroupScreen

