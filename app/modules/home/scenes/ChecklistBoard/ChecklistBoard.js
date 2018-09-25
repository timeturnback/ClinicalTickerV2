import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import SheetItem from '../../components/SheetItem'

import styles from "./styles"
import {theme} from "../../index"

const {color, normalize} = theme;

class ChecklistBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItem({item, index})
    {
        let color = '#acacac';
        if (index % 2 == 0) color = '#fff';
        return (
            <SheetItem item={item}/>
            )
    }

    render() {
        const {checklists} = this.props;
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Danh sách bảng kiểm
                    </Text>
                </View>
                <View style={styles.flatListContainer}>
                    <FlatList
                        style={styles.flatList}
                        data={checklists}
                        renderItem={this.renderItem}
                        initialNumToRender={8}
                        keyExtractor={(item, index) => index.toString()}/>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={Actions.pop}>
                        <Icon
                            name='ios-arrow-back'
                            type='ionicon'
                            color={color.black}
                            iconStyle={{height:normalize(40)}}
                            size={normalize(40)}
                            />
                    </TouchableOpacity>
                </View>
            </View>
            )
    }
}

function mapStateToProps(state, props) {
    return {
        isChecklistsAvailable: state.homeReducer.isChecklistsAvailable
    }
}

export default connect(mapStateToProps,null)(ChecklistBoard);