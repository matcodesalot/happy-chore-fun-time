import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';
//import {connect} from 'react-redux';
//import * as actions from './redux/actions';

export default class AddChore extends Component {
	render() {
		if (!this.props.addingChore) return null;
		return(
			<View style={styles.container}>
				<TextInput style={styles.input}
					placeholder='Enter a chore' />
				<TouchableHighlight style={styles.submitButton}
					underlayColor='#99d9f4'>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: 'row',
		marginBottom: 10,
	},
	input: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48BBEC',
		//borderRadius: 8,
		color: '#48BBEC',
	},
	submitButton: {
		height: 36,
		//flex: 1,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#42f453',
		borderColor: '#48BBEC',
		borderWidth: 1,
		//borderRadius: 8,
		//alignSelf: 'stretch',
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center',
	}
});