import React, {useState} from 'react';
import {Image, Text, View, Switch} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {foodTemplates} from '../data/foodTemplates';
import recipestyle from '../styles/Recipes.styles';
import homestyle from '../styles/Home.styles';
import DropShadow from 'react-native-drop-shadow';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import vegIcon from '../../assets/images/vegIcon.jpg';
import Colors from '../constants/Colors';
import nonvegIcon from '../../assets/images/nonvegIcon.jpg';
const Recipes = () => {
  const [category, setCategory] = useState('vegDishes');
  return (
    <>
      <View style={homestyle.maincontainer}>
        <Text style={{fontSize: 16, color: Colors.text}}>
          Choose your preference kit
        </Text>
        <View style={recipestyle.dishtypecontainer}>
          <TouchableOpacity
            onPress={() => setCategory('vegDishes')}
            style={
              category === 'vegDishes'
                ? [recipestyle.dishtypebutton, recipestyle.selected]
                : recipestyle.dishtypebutton
            }>
            <Image source={vegIcon} style={recipestyle.dishicon}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCategory('nonVegDishes')}
            style={
              category === 'nonVegDishes'
                ? [recipestyle.dishtypebutton, recipestyle.selected]
                : recipestyle.dishtypebutton
            }>
            <Image source={nonvegIcon} style={recipestyle.dishicon}></Image>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={homestyle.maincontainer}>
            {foodTemplates?.map(food =>
              food?.category === category
                ? food?.dishes?.map(dish => (
                    <DropShadow style={recipestyle.shadowview} key={dish?.id}>
                      <View style={recipestyle.foodcardcontainer}>
                        <Image
                          source={dish?.src}
                          style={recipestyle.image}></Image>
                        <Text style={homestyle.imagetext}>{dish?.name}</Text>
                        <Text style={recipestyle.dishdesc}>
                          {dish?.description}
                        </Text>
                        <View style={recipestyle.dishdescview}>
                          <View style={recipestyle.dishdescinnerview}>
                            <Icon name="fire" size={16} color={Colors.text} />
                            <Text style={recipestyle.dishcal}>
                              {dish?.calories}
                            </Text>
                          </View>
                          <View style={recipestyle.dishdescinnerview}>
                            <Icon
                              name="clock-o"
                              size={16}
                              color={Colors.text}
                            />
                            <Text style={recipestyle.dishcal}>
                              {dish?.prepTime}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </DropShadow>
                  ))
                : null,
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Recipes;
