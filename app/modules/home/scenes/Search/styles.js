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