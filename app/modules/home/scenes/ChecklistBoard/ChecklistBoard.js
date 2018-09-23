import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import JobItem from '../../components/JobItem'

import styles from "./styles"
import {theme} from "../../index"

const {color} = theme;

class ChecklistBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItem({item, index})
    {
        let color = '#acacac';
        if (index % 2 == 0) color = '#fff';
        return (
            <JobItem item={item}/>
            )
    }

    render() {
        const {checklists} = this.props;
        if (!this.props.isChecklistsAvailable){
            return(
                <View style={styles.activityIndicator}>
                    <ActivityIndicator animating={true} />
                </View>
            )}
        else
        {
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
}

function mapStateToProps(state, props) {
    return {
        isChecklistsAvailable: state.homeReducer.isChecklistsAvailable,
        checklists: state.homeReducer.checklists,
    }
}

export default connect(mapStateToProps,null)(ChecklistBoard);