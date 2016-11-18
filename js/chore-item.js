import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './redux/actions';

class ChoreItem extends Component {
	onCheckPressed() {
		//add 1 ticket, make the check button inactive, turn the background of the textBox green
		// this.props.dispatch(actions.increaseTicketCount(1));
		this.props.dispatch(actions.setChoreInactive(this.props.index));
		this.props.dispatch(actions.saveTicketCount())
	}

	onXPressed() {
		//delete the chore
		this.props.dispatch(actions.removeChore(this.props.index));
	}

	render() {
		if (!this.props.chore.isActive) {
			return (
				<View style={styles.mainContainer}>
					<TouchableHighlight style={styles.goodButton}
						disabled={true}
						underlayColor='#57a85b'
						onPress={this.onCheckPressed.bind(this)}>
						<Text style={styles.buttonText}>Check</Text>
					</TouchableHighlight>

					<Text style={styles.textBoxDone}>{this.props.chore.text}{"\n"}(Done!)</Text>

					<TouchableHighlight style={styles.badButton}
						underlayColor='#a51313'
						onPress={this.onXPressed.bind(this)}>
						<Text style={styles.buttonText}>X</Text>
					</TouchableHighlight>
				</View>
			);
		}

		return (
			<View style={styles.mainContainer}>
				<TouchableHighlight style={styles.goodButton}
					underlayColor='#57a85b'
					onPress={this.onCheckPressed.bind(this)}>
					<Text style={styles.buttonText}>Check</Text>
				</TouchableHighlight>

				<Text style={styles.textBox}>{this.props.chore.text}</Text>

				<TouchableHighlight style={styles.badButton}
					underlayColor='#a51313'
					onPress={this.onXPressed.bind(this)}>
					<Text style={styles.buttonText}>X</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

export default connect()(ChoreItem);

const styles = StyleSheet.create({
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
		borderColor: '#721919',
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
	buttonText: {
		color: 'black',
	},
	textBoxDone: {
		flex: 1,
		height: 36,
		borderColor: '#48BBEC',
		borderWidth: 1,
		backgroundColor: '#91ff9b',
		textAlign: 'center',
		marginRight: 10,
	}
});