import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');
const thucpham = require('../assets/thucpham.png');
const raucuqua = require('../assets/raucuqua.png');
const combo = require('../assets/combo.png');
const gan = require('../assets/gan.png');
const hot = require('../assets/hot.png');
const ct = require('../assets/ct.png');
const gift = require('../assets/gift.png');
const overtime = require('../assets/overtime.png');


const ProductItem = ({image, name}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
  </View>
);

const Slide = () => {
  return (
    <View style={styles.menu}>
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {[
            {image1: thucpham,  name1: 'Thực phẩm tưới sống', image2: hot ,name2: 'Deal hot'},
            {image1: raucuqua,  name1: 'Rau củ quả', image2: ct,name2: 'Công thức'},
            {image1: combo, name1: 'Combo', image2: gift,name2: 'Voucher'},
            {image1: gan, name1: 'Gần bạn', image2: overtime, name2: 'time'},
          ].map((e, index) => (
            <View key={index.toString()}>
              <ProductItem
                name={e.name1}
                image={e.image1}
              />
              <ProductItem
                name={e.name2}
                image={e.image2}
              />
          
            </View>
          ))}
        </View>
      </ScrollView>
    
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    marginTop : 10,
    
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  //
  listItemContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 82,
    height:82,
    marginRight:12,
    marginTop: 10,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  itemImage: {
    width: 39,
    height: 39,

  },
  itemName: {
    fontSize: 17,
    color: '#484848',
    marginVertical: 4,
    textAlign: 'center',
    width: 100,
    height:50,
  },
  
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
});
