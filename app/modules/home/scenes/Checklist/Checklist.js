import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import TaskItem from '../../components/TaskItem'
import {theme} from "../../index"

import styles from "./styles"

const {color, normalize} = theme;

class Checklist extends React.Component {
    constructor(props) {
        super(props);

        this.state =
        {
            score: []
        };

        this.renderItem = this.renderItem.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {tasklist} = nextProps;
        let score = [];
        tasklist.map((task,index) => {
            score[index] = 0;
        });
        return { score: score };
    }

    onSubmit()
    {
        const {sheet, tasklist} = this.props;
        let {score} = this.state;
        Actions.Result({sheet,tasklist,score});
    }

    onItemChange(index, iconstate)
    {
        let {score = []} = this.state;
        if (this.props.sheet.type == 1) score[index] = iconstate;
        else score[index] = iconstate * 0.5;
        this.setState({
            score: score,
        });
    }

    renderItem({item,index})
    {
        let color = '#acacac';
        const {type} = this.props.sheet;
        if (index % 2 == 0) color = '#fff';
        return (
            <TaskItem item={item} type={type} index={index} callback={this.onItemChange}/>
            )
    }

    render() {
        const {tasklist} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.flatListContainer}>
                    <FlatList
                    style={styles.flatList}
                    data={tasklist}
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
                            iconStyle={{height:normalize(50)}}
                            size={normalize(50)}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onSubmit}>
                        <Text style={styles.buttonText}> DONE </Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
    }
}
export default Checklist;