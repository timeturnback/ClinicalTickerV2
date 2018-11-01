import { StyleSheet, PixelRatio } from 'react-native';

import {theme} from "../../index"
const {color, scale, fontSize, fontFamily, normalize} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',height: '100%',
    backgroundColor: color.white
  },

  categoryContainer:{
    flex:2.7,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  imageNoiView:{
    left: scale(94),top: scale(153),
    position: 'absolute',
  },

  imageNoi:{
    width: scale(114),height: scale(99),
  },

  imageNgoaiView:{
    left: scale(12),top: scale(104),
    position: 'absolute',
  },

  imageNgoai:{
    width: scale(108),height: scale(94),
  },

  imageSanView:{
    left: scale(98),top: scale(254),
    position: 'absolute',
  },

  imageSan:{
    width: scale(92),height: scale(80),
  },

  imageNhiView:{
    left: scale(25),top: scale(213),
    position: 'absolute',
  },

  imageNhi:{
    width: scale(94),height: scale(80),
  },

  imageNhiemView:{
    left: scale(186),top: scale(114),
    position: 'absolute',
  },

  imageNhiem:{
    width: scale(99),height: scale(86),
  },

  imageKyNangView:{
    left: scale(256),top: scale(243),
    position: 'absolute',
  },

  imageKyNang:{
    width: scale(84),height: scale(73),
  },

  imageDieuDuongView:{
    left: scale(190),top: scale(205),
    position: 'absolute',
  },

  imageDieuDuong:{
    width: scale(84),height: scale(73),
  },

  imageKhacView:{
    left: scale(190),top: scale(282),
    position: 'absolute',
  },

  imageKhac:{
    width: scale(84),height: scale(73),
  },

  bottomContainer:{
    flex:1,
  },

  iconContainer:{
    flex:1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },

  recentTitle:
  {
    flex:1,
  },
  titleText:{
    color: color.white,
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    backgroundColor: color.maincolor,
  },
  recentItems:{
    flex:4,
    justifyContent: 'center',
  },
  itemTO:{
    flex:1
  },
  itemText:{
    color: color.maincolor,
    fontSize: fontSize.large,
    fontFamily: fontFamily.regular,
    width: '100%'
  },

  button:{
   justifyContent: 'center',
   height: normalize(55),
   width: normalize(200),
   marginVertical: 10,
   borderRadius: 7
 },

 buttonText:{
   textAlign: 'center',
   color: color.white,
   fontSize: fontSize.regular + 5,
   fontFamily: fontFamily.bold,
 },

 activityIndicator:{
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: "center"
},
});


export default styles;