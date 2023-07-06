import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import homestyle from '../styles/Home.styles';
import orderstyle from '../styles/Orders.styles';
import recipestyle from '../styles/Recipes.styles';
import orders from '../data/orders';
import DropShadow from 'react-native-drop-shadow';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Orders = () => {
  return (
    <View style={homestyle.maincontainer}>
      <ScrollView>
        <View style={homestyle.maincontainer}>
          {orders?.map(order => (
            <DropShadow style={recipestyle.shadowview} key={order?.date}>
              <View style={orderstyle.ordercontainer}>
                <View style={orderstyle.imageview}>
                  <Image source={order?.src} style={orderstyle.image}></Image>
                </View>
                <View style={orderstyle.orderinnercontainer}>
                  <Text style={orderstyle.text}>
                    {' '}
                    Order Id: {order?.orderid}
                  </Text>
                  <Text style={orderstyle.imagetext}>{order?.orderName}</Text>
                  <Text style={orderstyle.text}>
                    Quantity: {order?.orderQty}
                  </Text>
                  <View style={orderstyle.deliverytext}>
                    <Text style={orderstyle.text}>
                      Delivery Status: {order?.deliveryStatus}
                    </Text>

                    {order?.deliveryStatus === 'Delivered' ? (
                      <Icon name="check-circle-o" size={16} color="green" />
                    ) : (
                      <Icon name="truck" size={16} color="red" />
                    )}
                  </View>
                  <Text style={orderstyle.text}>
                    Delivery Partner: {order?.deliveryPartner}
                  </Text>
                  <Text style={orderstyle.text}>Address: {order?.address}</Text>
                  <Text style={orderstyle.text}>
                    Total Amount: ₹{order?.totalAmount}
                  </Text>
                </View>
              </View>
            </DropShadow>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Orders;
