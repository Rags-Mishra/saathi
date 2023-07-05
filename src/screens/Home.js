import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import dishes from '../assets/dishes_food_img.jpg';
import recipe_card from '../assets/recipe_card_img.jpg';
import delivery_box from '../assets/delivery_box.jpg';
import homestyle from '../styles/Home.styles';
const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={homestyle.maincontainer}>
        <Text style={homestyle.welcometext}>Welcome to Saathi!</Text>
        <Text style={homestyle.contenttext}>
          Want to cook but don't know how? Worry not.
        </Text>
        <Text style={[homestyle.contenttext, homestyle.textcolor]}>
          You have got Saathi
        </Text>
        <Text>Why should I choose you?</Text>
        <Text>Good Question Saathi! Here's why</Text>
        <View style={homestyle.imageviewscontainer}>
          <View style={homestyle.imageview}>
            <Text>Fresh Ingredients</Text>
            <Text>
              We deliver only free vegetables, fruits and grains to you. So,
              forget getting those stale veggies, Saathi has got you covered
            </Text>
            <Image source={dishes} style={homestyle.homeimg} />
          </View>
          <View style={homestyle.imageview} >
            <Text>World-class meal</Text>
            <Text>
              With 100+ unique recipes from all over the world, prepared by our
              world-class chefs, your meal is going to be
            </Text>
            <Text>Delecious</Text>
            <Image source={recipe_card} style={homestyle.homeimg} />
          </View>
          <View style={homestyle.imageview}>
            <Text>Hygenic Delivery</Text>
            <Text>
              Our delivery is completly safe and hygenic. Our pacakaging is
              environment-friendly and made with recylced items. So, a win-win
              situation for you and mother Earth
            </Text>
            <Image source={delivery_box} style={homestyle.homeimg} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
