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

            imageNoi:{
                left: scale(94),top: scale(153),
                width: scale(114),height: scale(99),
                position: 'absolute',
            },
            imageNgoai:{
                left: scale(12),top: scale(104),
                width: scale(108),height: scale(94),
                position: 'absolute',
            },
            imageSan:{
                left: scale(98),top: scale(254),
                width: scale(92),height: scale(80),
                position: 'absolute',
            },
            imageNhi:{
                left: scale(25),top: scale(213),
                width: scale(94),height: scale(80),
                position: 'absolute',
            },
            imageNhiem:{
                left: scale(186),top: scale(114),
                width: scale(99),height: scale(86),
                position: 'absolute',
            },
            imageKyNang:{
                left: scale(256),top: scale(243),
                width: scale(84),height: scale(73),
                position: 'absolute',
            },
            imageDieuDuong:{
                left: scale(190),top: scale(205),
                width: scale(84),height: scale(73),
                position: 'absolute',
            },
            imageKhac:{
                left: scale(190),top: scale(282),
                width: scale(84),height: scale(73),
                position: 'absolute',
            },
        bottomContainer:{
            flex:1,
        },
            historyIcon:{
                flex:1.4,
                width: '10%',
                marginLeft: 10,
                marginBottom: 5
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