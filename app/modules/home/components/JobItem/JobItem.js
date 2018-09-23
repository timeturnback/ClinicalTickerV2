import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import styles from "./styles"
import {actions as home} from "../../index"

const {getChecklist} = home;

class JobItem extends React.Component {
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }

    onPress()
    {
        
    }

    render() {
        const {item} = this.props;
        const color = '#d8d8d8';
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress}>
                    <View style={[styles.wrapper, {backgroundColor: color, borderColor: color}]}>
                        <Text style={styles.text}> {item.str} </Text>
                    </View>
                </TouchableOpacity>
            </View>
            )
    }
}

export default connect(null,{getChecklist})(JobItem);