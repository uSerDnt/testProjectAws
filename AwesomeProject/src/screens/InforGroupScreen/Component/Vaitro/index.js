import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const VaiTro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Vai Trò</Text>
      <View>
        {/* {listRoleDetail.map((item, index) => { */}
        <View style={styles.itemContainer}>
          <Text style={styles.roleText}>role? học sinh</Text>
          <View style={styles.infoContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAMFBMVEXBx9D///++xM7W2uDGzNT7+/zr7fDN0dnc3+Ti5en29/jf4ufz9PbP1Nvm6OzT1907fuWOAAAE4UlEQVRogc2b7bKjIAyGUwQ/Ee//blfQVsEAL4pzNn92Zk/L0wQISQj0KZaxNVOzdFISkZTd0kymHcuHoUJo3wkndMj2H13fqrfIupfkIX1Z/yR7XZ+8YhPUg47DIbIaEOwX3hnI7ABZ9YRidzj1ADtLVg2s7lnxPDtH7m9wd/Yj8lBoZ49Nw23y2N3nOnaXcjAJ8vSM69gJtaPkcX4OXtFzVO0YuX0wwx6a2jJyX4fr2JFFzpOrWPqHnmGykjXBK1pyboUhj5XBFs2ssyu5PphHX8hvgFl0SK49xwc6nOuQ/BLYutI0uep2CtBzigw7EBt0zfOyzMnQLPhOHye32CBrwDPp77QpPXUgXLQx8oh9n5owyNMN6OXHCBk6jsXCnT7jAn33vMpOZOQ8jh89LUAmMXFkjYDDrXEShZhMHBN1kDvge0scvApi8eOn/8gDkEE0STCEPuKjHxnQOGFq3G4HcP8X8SFZMPT7v/5kH04Bdoqt6rMAvkgoj9xkv5FZXV/JO/7vaiFYZawsMMJKb+T8LIMqQ0r3B1llfycRmpAjDkn9yMBeliB4jS2yY2172pHz2zCbkx4C7M/uSwYMBG2pTZCNpXcy4kXwghdwyjsLEjQzxGYJvChkuI2MrMa8yz4EOfS0IyPGrk3uHRmwDvHpIC8zMJ60ZCjuq6yzXbGEhbq1yesuJSy6r7y27UQTNM2V97NVZSVDMXpdH2YH/BBwoBIQ/B2SDzLcgCOBuVTNs8qRWzJ3srHHxiZhCK0xor4E8SOWPBE2LV5ekhLkEHDDNQT+RtSZQA7MykzwR4UBwOCqsYoQthQdOu/HgOj5K7KADOysksHwjwIp3XuVJTGnDK5eLGmRkPG9pUuLeEX2JkGxFQ5kCwG3jGwnm1O7WOGVC+/nEzv04ebG9VKH+7AzmxazFwGVNsuty5aZmhvfoq3YKd21+73rw9VvV7gPu0We0PO5OtmgMUl1cgvGYfXJIxh71ifD8XZtkWiOUVtcjoEsMVEmwIAtkEsKsh06JbJ0MuvWxmz+LKS50RP0GU36CJG5moGQeD4VSptg7zWDeIh8vna4IXGV9jpJ1NwFCWRE7Rh6rw3FfttjcBT9q4fx5n5o6k34k/BXA+RTkpLSSFziQ0drvWAGlxPOnqdaL1ffLqmApYSLto76NrPGKiyvTa6L7FzT5zKxsnbCuFzt6d1jXMsqddaXlXCN+Xc3V6XRC5O8LLzKsTu6gipUTgJzhnd04b3ee+TLvWSwp18jM3ex/kp4jczcP/ve5i0ye+fuefeXyHyfgddb8Q451lvhxYJdLR/m7edYP8nZx4pa6JOjiPfQ+B/j+tjK5dT0kOob8itaFU7oc49JulfK7w97HA9pcbZh8MdkT1y68pYVb5tme+L8PsAnkb7Xngv0AYYtiKK5qbahNDjf7xmv+qVEexUysN/z0v9YbnLlNxDxvgHq671W/VISdqkV9PV+rsGokAM4321YiSzrZWb6twUtecX15QFFcf8216QvhGwST3vGtrmWChKt+mV9+rbNczF6DCyv7Esg9plKwgummr40XzwWW+WkH4wZpn6rirBVmdtvEz7J9xjZQtCT9xhW/uoNyuf2u5u80/2P3xo5tkGbhqnq+yonuvmTN2U7/G/e0W2SfjtYFjKWkXd8lfeS/wAS4y9V7yNN2QAAAABJRU5ErkJggg==',
                }}
                style={styles.avatar}
              />
              <View style={styles.nameContainer}>
                <Text style={styles.StudentName}>DoanNgoc Trong</Text>
                <Text style={styles.classText}>Lop 1A1</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.goMess}>
              <Image
                source={require('../../../../../assets/icons/ChatsCircle.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* })} */}
      </View>
    </View>
  );
};
export default VaiTro;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 16,
    borderRadius: 6,
  },
  headerText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
    color: 'black',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // backgroundColor: "red"
  },
  itemContainer: {
    marginTop: 16,
  },
  nameContainer: {
    marginLeft: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  roleText: {
    fontSize: 14,
    color: '#8D9BAC',
    fontFamily: 'Nunito-Bold',
    marginBottom: 8,
  },
  StudentName: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
    color: 'black',
  },
  classText: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D9BAC',
  },
  goMess: {
    backgroundColor: 'blue',
    width: 36,
    height: 36,
    borderRadius: 6,
    padding: 8,
  },
});
