import { StyleSheet, Platform } from 'react-native';

import {theme} from "../../index"
const {color} = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white
    },

});

export default styles;