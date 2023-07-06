import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {initialWindowMetrics} from 'react-native-safe-area-context';
const screenheight = initialWindowMetrics.frame.height;
const screenwidth = initialWindowMetrics.frame.width;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
  },
  foodcardcontainer: {
    width: screenwidth / 1.05,
    height: screenheight / 1.8,
    padding: '2%',
    backgroundColor: '#f0b073',
    marginVertical: '2%',
    borderRadius: 5,
  },
  shadowview: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  dishtypecontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: screenwidth / 2,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  dishtypeheader: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  dishtypebutton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    borderWidth: 2,
    borderRadius: 50,
    height: screenheight / 16,
    width: screenwidth / 8,
    borderColor: Colors.secondary,
  },
  dishdesc: {
    margin: 'auto',
    color: Colors.text,
  },
  dishdescview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 'auto',
  },
  dishdescinnerview: {
    display: 'flex',
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-around',
  },
  dishcal: {color: Colors.text},
  dishicon: {
    width: screenwidth / 12,
    height: screenheight / 24,
  },
});
export default styles;
