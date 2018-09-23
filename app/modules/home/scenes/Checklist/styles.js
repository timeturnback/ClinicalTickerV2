import { StyleSheet, Platform } from 'react-native';

import {theme} from "../../index"
const {color, fontFamily, fontSize, normalize} = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white
    },
        flatListContainer:{
            flex: 9,
            width: '100%'
        },
            flatList:{
            	flex: 1,
            },

        bottomContainer:{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal : 20,
            justifyContent: 'space-between',
        },
            buttonText:{
                fontSize: fontSize.large,
                fontFamily: fontFamily.bold
            },
});

export default styles;