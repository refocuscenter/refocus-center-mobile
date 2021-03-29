import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { colors, fonts, actions } from '../theme';
import { TextGradient, TextGradientProps } from './TextGradient';
import React from 'react';
import { ViewGradient } from './ViewGradient';

type ButtonGradientType = 'primary' | 'secondary';

interface ButtonGradientProps {
	children?: any;
	type?: ButtonGradientType;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	containerStyle?: StyleProp<ViewStyle>;
	onPress?: Function;

	/**
	 * Only for type = "secondary"
	 */
	borderWidth?: number;
}

const PADDING_VERTICAL = 8
const BORDER_RADIUS = 8

const style = {
	primary: {
		text: {
			color: colors.white,
			fontFamily: 'Poppins-Medium',
			fontSize: 14
		} as StyleProp<TextStyle>,
		container: {
			alignItems: 'center',
			borderRadius: BORDER_RADIUS,
			paddingVertical: PADDING_VERTICAL
		} as StyleProp<ViewStyle>
	},
	secondary: {
		text: {
			fontFamily: 'Poppins-Medium',
			fontSize: 14
		} as StyleProp<TextStyle>,
		container: {
			backgroundColor: colors.white,
			alignItems: 'center',
			borderRadius: BORDER_RADIUS,
			paddingVertical: PADDING_VERTICAL
		} as StyleProp<ViewStyle>,
		border: {
			borderRadius: BORDER_RADIUS,
			padding: 1
		} as StyleProp<ViewStyle>
	}
}

export function ButtonGradient(props: ButtonGradientProps) {
	const { type = 'primary' } = props

	return type === 'primary' ? (
		<PrimaryButton {...props} />
	) : (
		<SecondaryButton {...props} />
	);
}

function PrimaryButton({ children, style: styleProp, textStyle, containerStyle, onPress }: ButtonGradientProps) {

	return <TouchableOpacity
		style={styleProp}
		activeOpacity={actions.activeOpacity}
		onPress={() => onPress}>
		<ViewGradient style={[style.primary.container, containerStyle]}>
			<Text style={[style.primary.text, textStyle]}>{children}</Text>
		</ViewGradient>
	</TouchableOpacity>

}

function SecondaryButton({ children, style: styleProp, textStyle, containerStyle, onPress, borderWidth = 1 }: ButtonGradientProps) {

	return <TouchableOpacity
		style={styleProp}
		activeOpacity={actions.activeOpacity}
		onPress={() => onPress}>
		<ViewGradient style={
			[
				style.secondary.border,
				(borderWidth ?
					{ padding: borderWidth, borderRadius: BORDER_RADIUS + borderWidth }
					: undefined)
			]}>
			<View style={[style.secondary.container, containerStyle]}>
				<TextGradient style={[style.secondary.text, textStyle]}>{children}</TextGradient>
			</View>
		</ViewGradient>
	</TouchableOpacity>
}
