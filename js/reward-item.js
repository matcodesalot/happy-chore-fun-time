import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './redux/actions';

class RewardItem extends Component {
	onBuyPressed() {
		if(this.props.ticketCount < this.props.reward.cost) {
			//you do not have enough tickets to purchase this item
			this.props.dispatch(actions.canIBuyIt(false));
		}
		else {
			//you have enough tickets
			this.props.dispatch(actions.canIBuyIt(true));
			this.props.dispatch(actions.decreaseTicketCount(this.props.reward.cost));
			this.props.dispatch(actions.increaseItemAmount(this.props.index));
		}
	}

	render() {
		const buyText = `Buy ${this.props.reward.text} for ${this.props.reward.cost} tickets`;
		return (
			<View style={styles.mainContainer}>
				<TouchableHighlight style={styles.buyButton}
					underlayColor='#378db2'
					onPress={this.onBuyPressed.bind(this)}>
					<Text style={styles.text}>{buyText}</Text>
				</TouchableHighlight>

				<View style={styles.amountBox}>
					<Text style={styles.amountBoxText}>{this.props.reward.amount}</Text>
				</View>
			</View>
		);
	}
}

let mapStateToProps = function(state, props) {
	return {
		ticketCount: state.ticketCount,
	}
}

export default connect(mapStateToProps)(RewardItem);

const styles = StyleSheet.create({
	mainContainer: {
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: 'row',
		marginBottom: 10,
	},
	buyButton: {
		height: 36,
		width: 335,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#48BBEC',
		borderColor: '#66d1ff',
		borderWidth: 1,
		borderRadius: 8,
		alignSelf: 'flex-end',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 12,
	},
	amountBox: {
		right: 30,
		height: 36,
		justifyContent: 'center',
		alignSelf: 'center',
		borderColor: '#66d1ff',
		borderWidth: 1,
		borderRadius: 8,
		padding: 10,
		backgroundColor: 'white',
		zIndex: 10,
	},
	amountBoxText: {
		color: '#48BBEC',
	}
});