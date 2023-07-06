import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import dishes from '../../assets/images/dishes_food_img.jpg';
import recipe_card from '../../assets/images/recipe_card_img.jpg';
import delivery_box from '../../assets/images/delivery_box.jpg';
import homestyle from '../styles/Home.styles';
const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={homestyle.maincontainer}>
        <Text style={homestyle.welcometext}>Welcome to Saathi!</Text>
        <Text style={homestyle.contenttext}>
          Want to cook but don't know how? Worry not.
        </Text>
        <Text style={homestyle.saathitext}>You have got Saathi</Text>
        <Text style={homestyle.contenttext}>Why should I choose you?</Text>
        <Text style={homestyle.contenttext}>
          Good Question Saathi! Here's why
        </Text>
        <View style={homestyle.imageviewscontainer}>
          <View style={homestyle.imageview}>
            <Text style={homestyle.imagetext}>Fresh Ingredients</Text>
            <Text style={homestyle.contenttext}>
              We deliver only free vegetables, fruits and grains to you. So,
              forget getting those stale veggies, Saathi has got you covered
            </Text>
            <Image source={dishes} style={homestyle.homeimg} />
          </View>
          <View style={homestyle.imageview}>
            <Text style={homestyle.imagetext}>World-class meal</Text>
            <Text style={homestyle.contenttext}>
              With 100+ unique recipes from all over the world, prepared by our
              world-class chefs, your meal is going to be
            </Text>
            <Text>Delecious</Text>
            <Image source={recipe_card} style={homestyle.homeimg} />
          </View>
          <View style={homestyle.imageview}>
            <Text style={homestyle.imagetext}>Hygenic Delivery</Text>
            <Text style={homestyle.contenttext}>
              Our delivery is completly safe and hygenic. Our pacakaging is
              environment-friendly and made with recylced items. So, a win-win
              situation for you and mother Earth
            </Text>
            <Image source={delivery_box} style={homestyle.homeimg} />
          </View>
          <TouchableOpacity
            style={homestyle.button}
            onPress={() => navigation.navigate('Orders')}>
            <Text style={homestyle.buttontext}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
