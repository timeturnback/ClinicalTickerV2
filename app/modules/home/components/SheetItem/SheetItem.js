import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import styles from "./styles"
import {actions as home} from "../../index"

const {getChecklist} = home;

class SheetItem extends React.Component {
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
        this.gotoChecklist = this.gotoChecklist.bind(this);
    }

    onPress()
    {
        const {item} = this.props;
        getChecklist(item.tablename,this.gotoChecklist,(error) => alert(error.message));
    }

    gotoChecklist(data)
    {
        const {item} = this.props;
        Actions.Checklist({sheet: item,joblist: data});
    }

    render() {
        const {item} = this.props;
        const color = '#d8d8d8';
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress}>
                    <View style={[styles.wrapper, {backgroundColor: color, borderColor: color}]}>
                        <Text style={styles.text}> {item.title} </Text>
                    </View>
                </TouchableOpacity>
            </View>
            )
    }
}

export default connect(null,{})(SheetItem);