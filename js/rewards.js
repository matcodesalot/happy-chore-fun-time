import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight, NavigatorIOS} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import Chores from './chores';

export default class Rewards extends Component {
	render() {
		return(
			<Text style={{marginTop: 200, alignSelf: 'center'}}>COOL</Text>
		);
	}
}