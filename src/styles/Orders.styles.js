import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {initialWindowMetrics} from 'react-native-safe-area-context';
const screenheight = initialWindowMetrics.frame.height;
const screenwidth = initialWindowMetrics.frame.width;
const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenwidth,
    height: screenheight,
  },
  image: {
    width: screenwidth / 5,
    height: screenheight / 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  ordercontainer: {
    width: screenwidth / 1.05,
    height: screenheight / 3,
    padding: '2%',
    backgroundColor: '#f0b073',
    marginVertical: '2%',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  imagetext: {
    fontSize: 25,
    fontFamily: 'Pacifico-Regular',
    color: Colors.text,
    textDecorationLine: 'underline',
  },
  imageview: {width: screenwidth / 4},
  orderinnercontainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: screenheight / 3.1,
    paddingHorizontal: '1%',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    justifyContent: 'space-around',
  },
  text: {
    color: Colors.text,
  },
  deliverytext: {
    color: Colors.text,
    width: '80%',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
