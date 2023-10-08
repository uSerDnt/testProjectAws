import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import VaiTro from '../Vaitro';

const InforMember = () => {
  return (
    <View style={styles.container}>
      <View style={styles.halfScreen}>
        <View style={styles.headerAvatar}>
          <View style={styles.titleAvatar}>
            <Image
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAMFBMVEXBx9D///++xM7W2uDGzNT7+/zr7fDN0dnc3+Ti5en29/jf4ufz9PbP1Nvm6OzT1907fuWOAAAE4UlEQVRogc2b7bKjIAyGUwQ/Ee//blfQVsEAL4pzNn92Zk/L0wQISQj0KZaxNVOzdFISkZTd0kymHcuHoUJo3wkndMj2H13fqrfIupfkIX1Z/yR7XZ+8YhPUg47DIbIaEOwX3hnI7ABZ9YRidzj1ADtLVg2s7lnxPDtH7m9wd/Yj8lBoZ49Nw23y2N3nOnaXcjAJ8vSM69gJtaPkcX4OXtFzVO0YuX0wwx6a2jJyX4fr2JFFzpOrWPqHnmGykjXBK1pyboUhj5XBFs2ssyu5PphHX8hvgFl0SK49xwc6nOuQ/BLYutI0uep2CtBzigw7EBt0zfOyzMnQLPhOHye32CBrwDPp77QpPXUgXLQx8oh9n5owyNMN6OXHCBk6jsXCnT7jAn33vMpOZOQ8jh89LUAmMXFkjYDDrXEShZhMHBN1kDvge0scvApi8eOn/8gDkEE0STCEPuKjHxnQOGFq3G4HcP8X8SFZMPT7v/5kH04Bdoqt6rMAvkgoj9xkv5FZXV/JO/7vaiFYZawsMMJKb+T8LIMqQ0r3B1llfycRmpAjDkn9yMBeliB4jS2yY2172pHz2zCbkx4C7M/uSwYMBG2pTZCNpXcy4kXwghdwyjsLEjQzxGYJvChkuI2MrMa8yz4EOfS0IyPGrk3uHRmwDvHpIC8zMJ60ZCjuq6yzXbGEhbq1yesuJSy6r7y27UQTNM2V97NVZSVDMXpdH2YH/BBwoBIQ/B2SDzLcgCOBuVTNs8qRWzJ3srHHxiZhCK0xor4E8SOWPBE2LV5ekhLkEHDDNQT+RtSZQA7MykzwR4UBwOCqsYoQthQdOu/HgOj5K7KADOysksHwjwIp3XuVJTGnDK5eLGmRkPG9pUuLeEX2JkGxFQ5kCwG3jGwnm1O7WOGVC+/nEzv04ebG9VKH+7AzmxazFwGVNsuty5aZmhvfoq3YKd21+73rw9VvV7gPu0We0PO5OtmgMUl1cgvGYfXJIxh71ifD8XZtkWiOUVtcjoEsMVEmwIAtkEsKsh06JbJ0MuvWxmz+LKS50RP0GU36CJG5moGQeD4VSptg7zWDeIh8vna4IXGV9jpJ1NwFCWRE7Rh6rw3FfttjcBT9q4fx5n5o6k34k/BXA+RTkpLSSFziQ0drvWAGlxPOnqdaL1ffLqmApYSLto76NrPGKiyvTa6L7FzT5zKxsnbCuFzt6d1jXMsqddaXlXCN+Xc3V6XRC5O8LLzKsTu6gipUTgJzhnd04b3ee+TLvWSwp18jM3ex/kp4jczcP/ve5i0ye+fuefeXyHyfgddb8Q451lvhxYJdLR/m7edYP8nZx4pa6JOjiPfQ+B/j+tjK5dT0kOob8itaFU7oc49JulfK7w97HA9pcbZh8MdkT1y68pYVb5tme+L8PsAnkb7Xngv0AYYtiKK5qbahNDjf7xmv+qVEexUysN/z0v9YbnLlNxDxvgHq671W/VISdqkV9PV+rsGokAM4321YiSzrZWb6twUtecX15QFFcf8216QvhGwST3vGtrmWChKt+mV9+rbNczF6DCyv7Esg9plKwgummr40XzwWW+WkH4wZpn6rirBVmdtvEz7J9xjZQtCT9xhW/uoNyuf2u5u80/2P3xo5tkGbhqnq+yonuvmTN2U7/G/e0W2SfjtYFjKWkXd8lfeS/wAS4y9V7yNN2QAAAABJRU5ErkJggg==',
              }}
              style={styles.avatar}
            />
            <Text style={styles.nameGroup}>Doan Ngoc Trong</Text>
            <Text style={styles.ruleText}>Phu huynh hoc sinh</Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                width: 154,
                height: 36,
                borderRadius: 6,
                padding: 8,
                gap: 16,
                flexDirection: 'row',
                marginTop: 4,
              }}>
              <Image
                source={require('../../../../../assets/icons/ChatsCircle.png')}
                style={{width: 20, height: 20}}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  lineHeight: 19.1,
                  paddingLeft: 8,
                }}>
                Nhan bang Biedu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.quarterScreen}>
        <TouchableOpacity style={styles.optionItemOut}>
          <Image
            source={require('../../../../../assets/icons/kickMember.png')}
            style={{width: 28, height: 28}}
          />
          <View style={styles.optionItem}>
            <Text style={styles.titleOptionOut}>Xoa khoi nhom</Text>
          </View>
        </TouchableOpacity>
      </View>

      <VaiTro />
    </View>
  );
};

export default InforMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  halfScreen: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 16,
  },
  quarterScreen: {
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 16,
  },
  headerAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleAvatar: {
    alignItems: 'center',
  },

  optionTitleContainerDisable: {
    flex: 1,
    paddingVertical: 15,
  },
  optionTitleContainerOut: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 15,
    justifyContent: 'center',
  },

  titleOptionOut: {
    fontSize: 16,
    color: 'red',
    fontFamily: 'Nunito-SemiBold',
    marginLeft: 5,
  },
  optionItemOut: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingLeft: 17,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#1473EE80',
  },
  ruleText: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#8D9BAC',
  },
  optionContainer: {
    marginTop: 16,
  },
});
