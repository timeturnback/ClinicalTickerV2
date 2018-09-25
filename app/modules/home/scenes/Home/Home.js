import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator, StatusBar, Image, ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"
import {actions as home, theme} from "../../index"
import * as c from "../../constants"

const {color} = theme;
const {checkDatabase,getChecklists,getHistory,getRecentTab,getSheetBySheetName,getChecklist} = home;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentItem1:{
                title: '',
            },
            recentItem2:{
                title: '',
            },
            recentItem3:{
                title: '',
            }
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setRecentItems = this.setRecentItems.bind(this);
        this.getRecentTab = this.getRecentTab.bind(this);
        this.getSheetSuccess = this.getSheetSuccess.bind(this);

        this.onCategoryPress = this.onCategoryPress.bind(this);
        this.onHistoryBtPress = this.onHistoryBtPress.bind(this);
        this.onRecentItemPress = this.onRecentItemPress.bind(this);
    }

    componentDidMount()
    {
        this.props.checkDatabase(this.getRecentTab);
    }

    getRecentTab()
    {
        getRecentTab(this.setRecentItems,(error)=>console.log(error.message));
    }

    setRecentItems(data)
    {
        let recentItem1 = {},recentItem2 = {},recentItem3 = {};

        if (typeof data[0] !== 'undefined') getSheetBySheetName(data[0].SheetName,(data)=>this.getSheetSuccess('recentItem1',data),(error)=>alert(error.message));

        if (typeof data[1] !== 'undefined') getSheetBySheetName(data[1].SheetName,(data)=>this.getSheetSuccess('recentItem2',data),(error)=>alert(error.message));

        if (typeof data[2] !== 'undefined') getSheetBySheetName(data[2].SheetName,(data)=>this.getSheetSuccess('recentItem3',data),(error)=>alert(error.message));
    }

    getSheetSuccess(key, data)
    {
        const item ={};
        item[key] = data;
        this.setState({...item});
    }

    onCategoryPress(category)
    {
        getChecklists(category,this.onSuccess,(error) => {alert(error.message)});
    }

    onSuccess(data)
    {
        Actions.ChecklistBoard({checklists: data});
    }

    onHistoryBtPress()
    {
        getHistory(this.gotoHistory,(error)=>this.gotoHistory(null));
    }

    onRecentItemPress(index)
    {
        switch (index)
        {
            case 1:
            {
                const {recentItem1} = this.state;
                getChecklist(recentItem1.tablename,(data)=>this.gotoChecklist(recentItem1,data),(error) => alert(error.message));
                break;
            }
            case 2:
            {
                const {recentItem2} = this.state;
                getChecklist(recentItem2.tablename,(data)=>this.gotoChecklist(recentItem2,data),(error) => alert(error.message));
                break;
            }
            case 3:
            {
                const {recentItem3} = this.state;
                getChecklist(recentItem1.tablename,(data)=>this.gotoChecklist(recentItem3,data),(error) => alert(error.message));
                break;
            }
        }

    }

    gotoChecklist(sheet,data)
    {
        Actions.Checklist({sheet: sheet,tasklist: data});
    }

    gotoHistory(data)
    {
        Actions.History({historytabs: data});
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
            <ImageBackground style={styles.container} source={require('../../../../assets/png/home.png')}>
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
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.historyIcon} onPress={this.onHistoryBtPress}>
                        <FontAwesome 
                            raised
                            name='history'
                            color='#353535'
                            size={35} />
                    </TouchableOpacity>
                    <View style={styles.recentTitle}>
                        <Text style={styles.titleText}> RECENT </Text>
                    </View>
                    <View style={styles.recentItems}>
                        <TouchableOpacity style={styles.itemTO} onPress={()=>this.onRecentItemPress(1)}>
                            <Text style={styles.itemText}> {this.state.recentItem1.title} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTO} onPress={()=>this.onRecentItemPress(2)}>
                            <Text style={styles.itemText}> {this.state.recentItem2.title} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemTO} onPress={()=>this.onRecentItemPress(3)}>
                            <Text style={styles.itemText}> {this.state.recentItem3.title} </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
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

export default connect(mapStateToProps,{checkDatabase})(Home);