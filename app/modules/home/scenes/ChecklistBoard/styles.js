import { StyleSheet } from 'react-native';

import {theme} from "../../index"
const {color} = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white
    },
    flatList:{
    	flex: 1,
    },
    activityIndicator:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center"
    },
});


export default styles;