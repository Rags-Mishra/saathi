import {height} from '@mui/system';
import {StyleSheet} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';
const screenheight = initialWindowMetrics.frame.height;
const screenwidth = initialWindowMetrics.frame.width;
const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcd8b6',
    paddingVertical: '5%',
    width: screenwidth,
  },
  welcometext: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  contenttext: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: '5%',
  },
  textcolor: {color: '#4F0A0A'},
  imageviewscontainer: {
    width: screenwidth / 1.01,
    display: 'flex',
    alignContent: 'center',
    
  },
  imageview: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 3,
    margin: '4%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: '3%',
    elevation:1,
    paddingVertical: '3%',
  },
  imagetext:{fontFamily:'Pacifo-Regular'},
  homeimg: {
    width: screenwidth,
    height: screenheight / 3,
  },
});
export default styles;
