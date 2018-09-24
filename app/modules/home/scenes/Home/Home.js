import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator, StatusBar, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
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
                <StatusBar hidden={true} />
                <View style={styles.categoryContainer}>
                    <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_NOI)}>
                        <Image style={styles.imageNoi} source={require('../../../../assets/png/m_bt_noi.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_SAN)}>
                        <Image style={styles.imageSan} source={require('../../../../assets/png/m_bt_san.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_KYNANG)}>
                        <Image style={styles.imageKyNang} source={require('../../../../assets/png/m_bt_skill.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_DIEUDUONG)}>
                        <Image style={styles.imageDieuDuong} source={require('../../../../assets/png/m_bt_dieuduong.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onCategoryPress(c.CATEGORY_KSNK)}>
                        <Image style={styles.imageKhac} source={require('../../../../assets/png/m_bt_other.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.imageNgoai} source={require('../../../../assets/png/m_bt_ngoai.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.imageNhi} source={require('../../../../assets/png/m_bt_nhi.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.imageNhiem} source={require('../../../../assets/png/m_bt_nhiem.png')}/>
                    </TouchableOpacity>
                </View>
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