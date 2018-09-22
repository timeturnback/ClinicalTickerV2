import { StyleSheet } from 'react-native';

import {theme} from "../../index"
const {color, normalize, fontSize, fontFamily} = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white
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