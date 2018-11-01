import React from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';
import {Icon} from 'react-native-elements';

import styles from "./styles";
import {theme} from "../../index"

const {color,normalize} = theme;

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item, index}) => {
    const color = '#c4c4c4'
    return (
      <View style={[styles.wrapper, {backgroundColor: color, borderColor: color}]}>     
        <Text style={styles.subjectText}>
          {item.TitleName}
        </Text>
        <Text style={styles.tagText}>
          {item.UserScore} / {item.TotalScore}
        </Text>
        <Text style={styles.tagText}>
          {moment(parseInt(item.Date)).fromNow()}
        </Text>
        </View>
        )
  }

  renderFlatList = (historytabs) => {
    if (historytabs && (historytabs.length > 0)) {
      return(
        <View style={styles.flatListContainer}>
          <FlatList
            data={historytabs}
            renderItem={this.renderItem}
            initialNumToRender={8}
            keyExtractor={(item, index) => index.toString()}/>
            </View>)

    }
    else {
      return(
        <View style={styles.flatListContainer}>
          <Text style={styles.flatlistPlaceholderText}> Bạn chưa thực hiện bảng kiểm nào</Text>
          </View>)
    }
  }

  render() {
    const {historytabs} = this.props;

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Tìm kiếm
          </Text>
        </View>
        {this.renderFlatList(historytabs)}
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
        </View>
        </View>
        )
  }
}

export default Search;