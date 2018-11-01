import { StyleSheet, Platform } from 'react-native';

import {theme} from "../../index"
const {color, fontSize, fontFamily, normalize, padding} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white
  }, 

  titleContainer:{
    flex: 0.8,
    backgroundColor: color.maincolor,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: 25
  },

  title:{
    fontSize: fontSize.large - 2,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    color: color.white,
  },

 searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10
  },

  ipContainerStyle: {
    flex: 4,
    marginRight: 10,
  },

  inputContainerStyle: {
    height: 40, 
    marginRight: 0,
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: color.black, 
  },

  inputStyle: { 
    marginLeft: 10, 
    color: color.black 
  },

  btContainer: {
    flex: 1.2,
    height: 40,
  }, 

  buttonStyle: {
    borderRadius:10,
    backgroundColor: color.grey
  },  

  flatListContainer:{
   flex: 10,
   justifyContent: 'center',
   marginTop: 5,
   width: '100%'
 },

  flatlistPlaceholderText:{
    fontSize: fontSize.large - 2,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
  },

  wrapper:{
    flex:1,
    borderWidth:1,
    borderRadius: 8,
    padding : 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  
  subjectText:{
    fontSize: normalize(19),
    lineHeight: normalize(21),
    color: color.white,
    fontFamily: fontFamily.medium,
  },

  tagText:{
    fontSize: normalize(16),
    lineHeight: normalize(21),
    color: color.white,
    fontFamily: fontFamily.medium,
  },

  bottomContainer:{
    flex:0.8,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal : 20,
    justifyContent: 'space-between',
    marginBottom: 5,
  },

});


export default styles;