import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';

export default class Chores extends Component {
	render() {
		return(
			<View>
				<View style={styles.topContainer}>
	                <Text style={styles.ticketText}>tickets:
	                    &nbsp;
	                    <Text style={styles.underline}>16</Text>
	                </Text>
	            </View>

				<View style={styles.mainContainer}>
					<TouchableHighlight style={styles.goodButton}
						underlayColor='#57a85b'>
						<Text style={styles.centerText}>Check</Text>
					</TouchableHighlight>

					<Text style={styles.textBox}>Clean your room</Text>

					<TouchableHighlight style={styles.badButton}
						underlayColor='#a51313'>
						<Text style={styles.centerText}>X</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.addContainer}>
					<TouchableHighlight
						underlayColor='#656565'>
						<Text style={styles.addText}>+</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
        marginTop: 60,
        marginBottom: 60,
    },
    ticketText: {
        color: '#48BBEC',
        fontSize: 16,
        textAlign: 'right',
        margin: 10,
    },
    underline: {
        textDecorationLine: 'underline',
    },
    centerText: {
    	alignSelf: 'center',
    },
	mainContainer: {
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: 'row',
		marginBottom: 10,
	},
	goodButton: {
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
	badButton: {
		height: 36,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#ef3232',
		borderColor: '#48BBEC',
		borderWidth: 1,
		justifyContent: 'center',
		//borderRadius: 8,
	},
	textBox: {
		flex: 1,
		height: 36,
		borderColor: '#48BBEC',
		borderWidth: 1,
		//borderRadius: 8,
		// justifyContent: 'center',
		textAlign: 'center',
		//alignSelf: 'center',
		marginRight: 10,
	},
	addContainer: {
		marginBottom: 10,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	addText: {
		fontSize: 48,
		color: '#48BBEC'
	}
});