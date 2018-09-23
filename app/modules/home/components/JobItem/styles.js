import { StyleSheet, Platform } from 'react-native';

import {theme} from "../../index"
const {color, normalize, fontFamily} = theme;
const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
        wrapper:{
            flex:1,
            borderWidth:1,
            borderRadius: 8,
            padding : 10,
            marginHorizontal: 10,
            marginVertical: 5,
            ...Platform.select({
                ios: {
                    shadowColor: 'rgba(0,0,0, .4)',
                    shadowOffset: { height: 1, width: 1 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                },
                android: {
                    elevation: 2,
                },
            }),
        },
            itemContainer:{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            },

                icon: {
                    flex: 1,
                    width: 40,
                    height: 40,
                    resizeMode
                },

    		    text:{
                    flex: 6,
    		        fontSize: normalize(17),
    		        lineHeight: normalize(21),
    		        color: color.black,
    		        textAlign: 'left',
    		        fontFamily: fontFamily.medium
    		    },

});


export default styles;