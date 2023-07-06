import {height} from '@mui/system';
import {StyleSheet} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
const screenheight = initialWindowMetrics.frame.height;
const screenwidth = initialWindowMetrics.frame.width;
const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: '5%',
    width: screenwidth,
  },
  welcometext: {
    fontSize: 35,
    color: Colors.text,
    color: Colors.text,
    fontFamily: 'Pacifico-Regular',
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
  },
  contenttext: {
    fontSize: 16,
    color: Colors.text,

    fontWeight: '500',
    marginVertical: '5%',
  },
  imageviewscontainer: {
    width: screenwidth / 1.01,
    display: 'flex',
    alignContent: 'center',
  },
  imageview: {
    borderStyle: 'solid',
    borderColor: Colors.secondary,
    borderWidth: 3,
    margin: '4%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: '3%',
    elevation: 1,
    paddingVertical: '3%',
    backgroundColor: 'white',
  },
  imagetext: {fontFamily: 'Pacifico-Regular', fontSize: 25, color: Colors.text},
  homeimg: {
    width: screenwidth,
    height: screenheight / 3,
  },
  button: {
    backgroundColor: Colors.tertiary,
    marginHorizontal: '5%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttontext: {
    fontSize: 16,
    color: Colors.text,
    margin: '3%',
  },
  saathitext: {
    color: Colors.secondary,
    fontFamily: 'Pacifico-Regular',
    fontSize: 25,
    color: Colors.text,
  },
});
export default styles;
