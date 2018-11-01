import { StyleSheet } from 'react-native';

import {theme} from "../../index"
const {color, fontSize, fontFamily, windowWidth} = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white,
        paddingTop: 25
    },
    	titleContainer:
    	{
    		flex: 1.5,
        	backgroundColor: color.maincolor,
	        alignItems: 'center',
            width: '100%',
	        justifyContent: 'center',
    	},
    		title:{
                fontSize: fontSize.large - 2,
                fontFamily: fontFamily.bold,
                textAlign: 'center',
                color: color.white,
    		},

    	scoreContainer:{
    		flex: 5,
	        alignItems: 'center',
	        justifyContent: 'center',
    	},
            image:{
                width: 150,
                height: 150,
                position: 'absolute',
            },
            score:{ 
                position: 'absolute',
                fontSize: fontSize.large + 50,
                fontFamily: fontFamily.bold,
            },
            totalPoint:{
                position: 'relative',
                top: 40,
                left: 100,
                fontSize: fontSize.large + 10,
                fontFamily: fontFamily.bold,
            },
    	thirdContainer:{
    		flex: 8,
    	},
            unfinishText:{
                flex:1,
                marginLeft: 10,
                fontSize: fontSize.large - 3,
                fontFamily: fontFamily.bold,
            },
            flatListContainer:{
                flex:8,
                justifyContent:'center'
            },
                flatList:{
                    backgroundColor: '#e2e2e2',
                },
                itemText:{
                    fontSize: fontSize.large - 3,
                    fontFamily: fontFamily.bold,
                    color: color.red,
                    marginVertical: 10,
                    marginHorizontal: 10,
                },
            flatListText:{
                flex:4,
                fontSize: fontSize.large - 3,
                fontFamily: fontFamily.regular,
                },
            nextSheetButton:{
                flex:2,
                marginTop: 10,
                marginLeft: 10
            },

    	bottomContainer:{
            flex:1.5,
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

});


export default styles;