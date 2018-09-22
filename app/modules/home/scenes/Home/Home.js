import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import styles from "./styles"
import {actions as home, theme} from "../../index"
import * as c from "../../constants"

const {color} = theme;
const {checkDatabase} = home;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount()
    {
        this.props.checkDatabase();
    }

    render() {
        if (this.props.data_loading){
            return(
                <View style={styles.activityIndicator}>
                    <ActivityIndicator animating={true} />
                </View>
            )}
        else if (this.props.data_available)
        {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>Actions.ChecklistBoard({category: c.CATEGORY_NOI})}>
                    <View style={[styles.button, {backgroundColor: color.red}]}>
                        <Text style={styles.buttonText}> Nội </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.ChecklistBoard({category: c.CATEGORY_NGOAI})}>
                    <View style={[styles.button, {backgroundColor: 'green'}]}>
                        <Text style={styles.buttonText}> Ngoại </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.ChecklistBoard({category: c.CATEGORY_SAN})}>
                    <View style={[styles.button, {backgroundColor: 'blue'}]}>
                        <Text style={styles.buttonText}> Sản </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.ChecklistBoard({category: c.CATEGORY_NHI})}>
                    <View style={[styles.button, {backgroundColor: 'cyan'}]}>
                        <Text style={styles.buttonText}> Nhi </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.ChecklistBoard({category: c.CATEGORY_NHIEM})}>
                    <View style={[styles.button, {backgroundColor: 'orange'}]}>
                        <Text style={styles.buttonText}> Nhiễm </Text>
                    </View>
                </TouchableOpacity>
            </View>
            )
        }
        else {
            return(
            <View style={styles.container}>
                <Text> Error ! Can't load data </Text>
            </View>
            )
        }
    }
}

function mapStateToProps(state, props) {
    return {
        data_loading: state.homeReducer.data_loading,
        data_available: state.homeReducer.data_available
    }
}

export default connect(mapStateToProps,{checkDatabase})(Home);