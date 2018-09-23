import React from 'react';
import {View, Text} from 'react-native';

import styles from "./styles"

class Checklist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Checklist </Text>
            </View>
            )
    }
}

export default Checklist;