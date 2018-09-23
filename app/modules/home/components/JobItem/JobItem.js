import React from 'react';
import {View, Text} from 'react-native';

import styles from "./styles"

class JobItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {item} = this.props;
        return (
            <View style={styles.container}>
                <Text> {item.title} </Text>
            </View>
            )
    }
}

export default JobItem;