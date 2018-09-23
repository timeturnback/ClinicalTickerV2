import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import JobItem from '../../components/JobItem'

import styles from "./styles"

class Checklist extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItem({item,index})
    {
        let color = '#acacac';
        if (index % 2 == 0) color = '#fff';
        return (
            <JobItem item={item}/>
            )
    }

    render() {
        const {isChecklistAvailable} = this.props;
        if (isChecklistAvailable)
        {
            const {currentchecklist} = this.props;
            return (
                <View style={styles.container}>
                    <FlatList
                        style={styles.flatList}
                        data={currentchecklist}
                        renderItem={this.renderItem}
                        initialNumToRender={8}
                        keyExtractor={(item, index) => index.toString()}/>
                </View>
                )

        } else {
            return (
                <View style={styles.container}>
                    <Text> Checklist Loading ... </Text>
                </View>
                )
        }
    }
}

function mapStateToProps(state, props) {
    return {
        isChecklistAvailable: state.homeReducer.isChecklistAvailable,
        currentchecklist: state.homeReducer.currentchecklist,
    }
}

export default connect(mapStateToProps,{})(Checklist);