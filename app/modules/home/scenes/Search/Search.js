import React from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity, Keyboard} from 'react-native';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';
import { Icon, Input, Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "./styles";
import { theme, actions as home } from "../../index";
import * as stringhelper from './stringhelper';

const {color,normalize} = theme;
const { searchRecord, getChecklist } = home;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      searchstring: ''
    }
  }

  itemOnPress = (item) => {
    getChecklist(item.tablename,(data) => this.gotoChecklist(item,data),(error) => alert(error.message));
  }

  gotoChecklist = (item,data) => {
    Actions.Checklist({sheet: item,tasklist: data});
  }

  renderItem = ({item, index}) => {
    const color = '#c4c4c4'
    return (
      <TouchableOpacity onPress={() => this.itemOnPress(item)}>
        <View style={[styles.wrapper, {backgroundColor: color, borderColor: color}]}>     
          <Text style={styles.subjectText}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderFlatList = () => {
    const { searchResults } = this.state;
    if (searchResults.length > 0) {
      return(
        <View style={styles.flatListContainer}>
          <FlatList
            data={searchResults}
            renderItem={this.renderItem}
            initialNumToRender={8}
            keyExtractor={(item, index) => index.toString()}/>
            </View>)

    }
    else {
      return(
        <View style={styles.flatListContainer}>
          <Text style={styles.flatlistPlaceholderText}> 0 kết quả </Text>
        </View>)
    }
  }

  searchSubject = () => {
    Keyboard.dismiss();
    let { searchstring } = this.state;
    searchstring = stringhelper.toSearchableString(searchstring.toLowerCase());
    searchRecord(searchstring, this.handleResult, (error) => alert(error.message));
  }

  handleResult = (data) => {
    this.setState({searchResults: data})
  }

  render() {
    const { searchstring } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Tìm kiếm
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <Input 
            containerStyle={styles.ipContainerStyle}
            inputContainerStyle={styles.inputContainerStyle} 
            leftIcon={<Ionicons 
              name="ios-search" 
              size={25} 
              />} 
            iconContainerStyle={{ marginLeft: 20 }} 
            placeholder=" Tìm kiếm bảng ghi ..."
            placeholderTextColor={color.grey}
            inputStyle={styles.inputStyle} 
            autoCapitalize="none"  autoCorrect={false} 
            keyboardAppearance="light" returnKeyType="done" 
            ref={input => (this.searchInput = input)} 
            onSubmitEditing={this.searchSubject}
            onChangeText={(text)=>this.setState({searchstring: text})}
            value={searchstring}
            blurOnSubmit={false} />
          <Button
            containerStyle={styles.btContainer}
            buttonStyle={styles.buttonStyle}
            onPress={this.searchSubject}
            title='Search'/>
        </View>

        {this.renderFlatList()}

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