import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';

function Header() {
  return (
    <View style={styles.mainHeader}>
      <TouchableOpacity onPress={() => console.log('logo')}>
        <Image
          style={styles.logo}
          source={require('./../../assets/header-logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.mainHeaderIconSection}>
        <TouchableOpacity onPress={() => console.log('logo')}>
          <Image
            style={styles.icons}
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('logo')}>
          <Image
            style={styles.icons}
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('logo')}>
          <View style={styles.messageNotificationNumber}>
            <Text>10</Text>
          </View>
          <Image
            style={styles.icons}
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    //   flex: 1,
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
  mainHeaderIconSection: {
    flexDirection: 'row',
  },
  icons: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 8,
  },
  messageNotificationNumber: {
    position: 'absolute',
    backgroundColor: '#FF3250',
    left: 20,
    top: 2,
    // bottom:,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
});

export default Header;
