import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeSectionComponent from '../components/HomeSectionComponents';
import Menu from '../components/Menu';
//import Slide from '../components/silde';

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.headerContainer}>
      <View style={styles.cartContainer1}>
          <Icon name="location-outline" size={24} color="#000000" />
          <Text style={styles.Text}>ha noi</Text>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696" />
          <Text style={styles.inputText}>Bạn tìm gì hôm nay?</Text>
        </View>
        {/*  */}
        
        <View style={styles.cartContainer}>
          <Icon name="cart-outline" size={24} color="#000000" />
        </View>
        <View style={styles.chat}>
        <Icon name="chatbubble-ellipses-outline" size={24} color="#000000" />
        </View>
      </View>
      {/*  */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <Menu/>
          
          <HomeSectionComponent />
          <HomeSectionComponent />
          
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#FFB039',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  Text: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chat: {
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartContainer1: {
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
