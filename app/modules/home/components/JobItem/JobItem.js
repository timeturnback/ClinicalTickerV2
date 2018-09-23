import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from "./styles"

class JobItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {item} = this.props;
        const color = '#d8d8d8';
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onTouch}>
                    <View style={[styles.wrapper, {backgroundColor: color, borderColor: color}]}>
                        <Text style={styles.text}> {item.title} </Text>
                    </View>
                </TouchableOpacity>
            </View>
            )
    }
}

export default JobItem;