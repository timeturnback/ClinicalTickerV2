import { StyleSheet, Platform } from 'react-native';

import {theme} from "../../index"
const {color} = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white
    },
    flatList:{
    	flex: 1,
    },
});

export default styles;