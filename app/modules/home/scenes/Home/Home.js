import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from "./styles"

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> cac </Text>
            </View>
            )
    }
}

export default connect(null,null)(Home);