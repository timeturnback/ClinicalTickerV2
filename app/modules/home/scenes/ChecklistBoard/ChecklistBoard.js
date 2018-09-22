import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import styles from "./styles"
import {theme} from "../../index"

const {color} = theme;

class ChecklistBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItem({item, index})
    {
        return (
            <Text> asdasd {item.name} </Text>
            )
    }

    render() {
        const checklists = [];
        checklists.push({name: 'bangkiem1'});
        checklists.push({name: 'bangkiem2'});
        checklists.push({name: 'bangkiem3'});
        checklists.push({name: 'bangkiem4'});
        checklists.push({name: 'bangkiem5'});

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={checklists}
                    renderItem={this.renderItem}
                    initialNumToRender={8}
                    keyExtractor={(item, index) => index.toString()}/>
            </View>
            )
    }
}

export default connect(null,null)(ChecklistBoard);