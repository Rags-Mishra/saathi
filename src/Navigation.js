import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import Orders from './screens/Orders';
import Recipes from './screens/Recipes';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
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
    <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#fcd8b6' },headerTintColor:'#1c5858'}}>
      <Stack.Screen name="Saathi" component={BottomTabNavigation} style/>
    </Stack.Navigator>
  );
};
const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator backBehavior='history'  screenOptions={({ route }) => ({
      tabBarStyle:{backgroundColor:'#1c5855'},
      tabBarLabelStyle:{color:'#fcd8b6'},
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Home: 'home',
          Orders: 'shopping-bag',
          Recipes:'spoon'
        };
  
        return (
          <Icon
            name={icons[route.name]}
            color={"#fcd8b6"}
            size={24}
          />
        );
      },
    })}
    >
      <Tab.Screen name="Home" component={Home} options={{
         headerTitle:'',headerStyle:{backgroundColor:'#fcd8b6',height:0}}}/>
      <Tab.Screen name="Orders" component={Orders}/>
      <Tab.Screen name="Recipes" component={Recipes} />
    </Tab.Navigator>
  );
};

export default Navigation;
