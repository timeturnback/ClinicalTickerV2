import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import styles from "./styles"
import {actions as home} from "../../index"

const {getChecklist} = home;

class TaskItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iconsource: require('../../../../assets/png/check_green_bg.png'),
            iconstate: 0
        }

        this.onPress = this.onPress.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let imageurl = require('../../../../assets/png/check_green_bg.png');
        if (nextProps.type != 1) imageurl = require('../../../../assets/png/check_red.png');
        return {
            iconsource: imageurl,
            iconstate: 0
        };
    }
    
    onPress()
    {
        const {type} = this.props;
        let iconstate = this.state.iconstate;
        if (type == 1) iconstate = (iconstate + 1) % 2;
        else iconstate = (iconstate + 1) % 3;
        let iconsource = require('../../../../assets/png/check_green_bg.png'); //default
        if (type != 1) iconsource = require('../../../../assets/png/check_red.png');
        switch (iconstate)
        {
            case 0:{
                if (type == 1) iconsource = require('../../../../assets/png/check_green_bg.png');
                else iconsource = require('../../../../assets/png/check_red.png');
                break;
            }
            case 1:{
                if (type == 1) iconsource = require('../../../../assets/png/check_green.png');
                else iconsource = require('../../../../assets/png/check_yellow.png');
                break;
            }
            case 2:{
                if (type != 1) iconsource = require('../../../../assets/png/check_green.png');
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

export default connect(null,{getChecklist})(TaskItem);