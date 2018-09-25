import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

import {actions as home, theme} from "../../index"

import styles from "./styles"
const {color, normalize} = theme;
const {getSheetBySheetName,getChecklist,saveResult,getRecents} = home;

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextsheet: null,
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.getSheetBySheetName = this.getSheetBySheetName.bind(this);
        this.getSheetSuccess = this.getSheetSuccess.bind(this);
        this.renderNextSheetButton = this.renderNextSheetButton.bind(this);
        this.onNextPress = this.onNextPress.bind(this);
        this.gotoNextSheet = this.gotoNextSheet.bind(this);
        this.onHome = this.onHome.bind(this);
        this.saveResult = this.saveResult.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {score,tasklist} = nextProps;
        let userscore = 0;
        let totalscore = 0;
        score.map((score,index)=>
        {
            userscore+=score;
            if (tasklist[index].point1) totalscore+=tasklist[index].point1
                else totalscore++;
        });
        return {userscore,totalscore};
    }

    saveResult()
    {
        const {sheet} = this.props;
        const {userscore,totalscore} = this.state;
        saveResult(sheet,{userscore,totalscore},()=>this.props.getRecents((error)=>alert(error.message)),(error)=>alert(error.message));
    }

    renderItem({item,index})
    {  
        return (
            <Text style={styles.itemText}>{item.str}</Text>
            )
    }

    onNextPress()
    {
        const {sheet} = this.props;
        getChecklist(sheet.nextsheet,this.gotoNextSheet,(error) => alert(error.message));
    }

    gotoNextSheet(data)
    {
        const {nextsheet} = this.state;
        this.saveResult();
        Actions.Checklist({sheet: nextsheet,tasklist: data});
    }

    componentDidMount()
    {
        this.getSheetBySheetName();
    }

    getSheetBySheetName()
    {
        const {sheet} = this.props;
        if (sheet.nextsheet == null) return
            else getSheetBySheetName(sheet.nextsheet,this.getSheetSuccess,(error)=>alert(error.message));
    }

    getSheetSuccess(data)
    {
        this.setState({
            nextsheet: data
        });
    }

    renderNextSheetButton()
    {
        if (!(this.state.nextsheet == null))
        {
            return (
                <View style={styles.nextSheetButton}>
                    <TouchableOpacity onPress={this.onNextPress}>
                        <Text style={[styles.buttonText,{color: color.red}]}> NEXT : {this.state.nextsheet.title} </Text>
                    </TouchableOpacity>
                </View>)
        }else return null;
        
    }

    onHome()
    {
        this.saveResult();
        Actions.popTo('Home');
    }

    renderFlatList()
    {
        const {tasklist,score} = this.props;
        let unfinishtasks = [];
        score.map((score,index)=>{
            if (score == 0) unfinishtasks.push(tasklist[index]);
        });
        if (unfinishtasks.length == 0)
        {
            return (
                <View style={styles.thirdContainer}>
                    <Text style={styles.flatListText}> Đã hoàn thành tất cả các task </Text>
                    {this.renderNextSheetButton()}
                </View>
                )
        }
        else{
            return (
                <View style={styles.thirdContainer}>
                    <Text style={styles.unfinishText}> Undone : {unfinishtasks.length} </Text>
                    <FlatList
                        style={styles.flatList}
                        data={unfinishtasks}
                        renderItem={this.renderItem}
                        initialNumToRender={8}
                        keyExtractor={(item, index) => index.toString()}/>
                    {this.renderNextSheetButton()}
                </View>
                )
            }
    }

    render() {
        const {sheet, tasklist} = this.props;
        const title = sheet.title.toUpperCase();
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <View style={styles.scoreContainer}>
                    <Image style={styles.image} 
                        source={require('../../../../assets/png/score_circle.png')}/>
                    <Text style={styles.score}>
                        {this.state.userscore}
                    </Text>
                    <Text style={styles.totalPoint}>
                        / {this.state.totalscore}
                    </Text>
                </View>
                
                { this.renderFlatList()}
                
                <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={Actions.pop}>
                        <Icon
                            name='ios-arrow-back'
                            type='ionicon'
                            color={color.black}
                            iconStyle={{height:normalize(50)}}
                            size={normalize(50)}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onHome}>
                        <Text style={styles.buttonText}> HOME </Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
    }
}
export default connect(null,{getRecents})(Result);