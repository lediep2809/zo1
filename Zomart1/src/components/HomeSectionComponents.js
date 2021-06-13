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

const section_banner = require('../assets/section_banner.png');
const item_image_1 = require('../assets/item_image_1.png');
const item_image_2 = require('../assets/item_image_2.png');
const item_image_3 = require('../assets/item_image_3.png');
const item_image_4 = require('../assets/item_image_4.png');

const ProductItem = ({image, name, price}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

const HomeSectionComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      
     
      {/*  */}
      <Image source={section_banner} style={styles.sectionImage} />
      {/*  */}
     
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {[
            {image1: item_image_1,  name1: 'Bí đao', price1:'',kg1:'1',
             image2: item_image_2,  name2: 'Cải xanh'},
            {image1: item_image_2,  name1: 'Cải xanh',
             image2: item_image_3,  name2: 'Báp cải'},
            {image1: item_image_4,  name1: 'Bí đỏ',
             image2: item_image_1,  name2: 'Bí đao'},
            {image1: item_image_1,  name1: 'Bí đao',
             image2: item_image_2,  name2: 'Cải xanh'},
          ].map((e, index) => (
            <View key={index.toString()}>
              <ProductItem
                name={e.name1}
                image={e.image1}
                price="699.000đ"
              />
              <ProductItem
                name={e.name2}
                image={e.image2}
                price="699.000đ"
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>XEM THÊM </Text>
      </View>
    </View>
  );
};

export default HomeSectionComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
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
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
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
