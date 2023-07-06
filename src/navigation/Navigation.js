import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import Orders from '../screens/Orders';
import Recipes from '../screens/Recipes';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ScreenStackHeaderBackButtonImage} from 'react-native-screens';
import {Image} from 'react-native';
import Colors from '../constants/Colors';
import {initialWindowMetrics} from 'react-native-safe-area-context';
const screenheight = initialWindowMetrics.frame.height;
const screenwidth = initialWindowMetrics.frame.width;
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};
const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#fcd8b6'},
        headerTintColor: '#1c5858',
      }}>
      <Stack.Screen
        name="Saathi"
        component={BottomTabNavigation}
        style
        options={{
          headerTitle: () => (
            <Image
              source={require('../../assets/images/logo.jpg')}
              style={{
                width: screenwidth / 5,
                height: screenheight / 15,
                alignSelf: 'center',
              }}></Image>
          ),
          headerTitleStyle: {marginLeft: '20%'},
        }}
      />
    </Stack.Navigator>
  );
};
const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: Colors.secondary},
        tabBarLabelStyle: {color: '#fcd8b6'},
        tabBarIcon: ({color, size}) => {
          const icons = {
            Home: 'home',
            Orders: 'shopping-bag',
            Recipes: 'spoon',
          };
          return <Icon name={icons[route.name]} color={'#fcd8b6'} size={24} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: '#fcd8b6', height: 0},
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: '#fcd8b6', height: 0},
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: '#fcd8b6', height: 0},
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
