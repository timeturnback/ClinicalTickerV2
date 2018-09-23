import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';

import styles from "./styles"
import {actions as home, theme} from "../../index"
import * as c from "../../constants"

const {color} = theme;
const {checkDatabase,getChecklists} = home;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onCategoryPress = this.onCategoryPress.bind(this);
    }

    componentDidMount()
    {
        this.props.checkDatabase();
    }

    onCategoryPress(category)
    {
        this.props.getChecklists(category, (error) => alert(error.message));
        Actions.ChecklistBoard();
    }

    render() {
        if (this.props.isDataLoading){
            return(
                <View style={styles.activityIndicator}>
                    <ActivityIndicator animating={true} />
                </View>
            )}
        else if (this.props.isDataAvailable)
        {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_NOI)}>
                    <View style={[styles.button, {backgroundColor: 'orange'}]}>
                        <Text style={styles.buttonText}> Nội </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_SAN)}>
                    <View style={[styles.button, {backgroundColor: 'blue'}]}>
                        <Text style={styles.buttonText}> Sản </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_KYNANG_DIEUDUONG)}>
                    <View style={[styles.button, {backgroundColor: color.red}]}>
                        <Text style={styles.buttonText}> Kỹ năng điều dưỡng </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_KYNANG)}>
                    <View style={[styles.button, {backgroundColor: 'green'}]}>
                        <Text style={styles.buttonText}> Kỹ năng </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_DIEUDUONG)}>
                    <View style={[styles.button, {backgroundColor: 'cyan'}]}>
                        <Text style={styles.buttonText}> Điều dưỡng </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_KSNK)}>
                    <View style={[styles.button, {backgroundColor: 'orange'}]}>
                        <Text style={styles.buttonText}> KSNK </Text>
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
        isDataLoading: state.homeReducer.isDataLoading,
        isDataAvailable: state.homeReducer.isDataAvailable,
    }
}

export default connect(mapStateToProps,{checkDatabase,getChecklists})(Home);