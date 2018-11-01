import { StyleSheet } from 'react-native';

import {theme} from "../../index"
const {color, fontFamily, fontSize} = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white
    },

        titleContainer:
        {
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
            buttonText:{
                fontSize: fontSize.large,
                fontFamily: fontFamily.bold
            },
    activityIndicator:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center"
    },
});


export default styles;