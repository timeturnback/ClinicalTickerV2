import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import styles from "./styles"
import {actions as home} from "../../index"

const {getChecklist} = home;

class JobItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iconsource: require('../../../../assets/png/check_green_bg.png'),
            iconstate: 0
        }

        this.onPress = this.onPress.bind(this);
    }

    onPress()
    {
        let iconstate = this.state.iconstate;
        iconstate = (iconstate + 1) % 2;
        iconsource = require('../../../../assets/png/check_green_bg.png'); //default
        switch (iconstate)
        {
            case 0:{
                iconsource = require('../../../../assets/png/check_green_bg.png');
                break;
            }
            case 1:{
                iconsource = require('../../../../assets/png/check_green.png');
                break;
            }
        }
        this.setState({
            iconsource: iconsource,
            iconstate: iconstate
        });

        const {callback,index} = this.props;
        callback(index,iconstate);
    }

    render() {
        const {item} = this.props;
        const color = '#f2f2f2';
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress}>
                    <View style={[styles.wrapper, {backgroundColor: color, borderColor: color}]}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.text}> {item.str} </Text> 
                            <Image style={styles.icon} source={this.state.iconsource} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            )
    }
}

export default connect(null,{getChecklist})(JobItem);