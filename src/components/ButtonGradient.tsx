import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewProps, ViewStyle } from 'react-native';
import { colors, fonts, actions } from '../theme';
import { TextGradient, TextGradientProps } from './TextGradient';
import React from 'react';
import { ViewGradient, ViewGradientProps } from './ViewGradient';

type ButtonGradientType = 'primary' | 'secondary';

interface ButtonGradientProps extends ViewProps {
	type?: ButtonGradientType;
	textStyle?: StyleProp<TextStyle>;
	containerStyle?: StyleProp<ViewStyle>;

  viewGradientProps?: ViewGradientProps;
	/**
	 * Only for type = "secondary"
	 */
	borderWidth?: number;

	[key: string]: any;
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

function PrimaryButton(props: ButtonGradientProps) {
	const { children, textStyle, containerStyle, viewGradientProps } = props

	return <View {...props}>
		<TouchableOpacity
			activeOpacity={actions.activeOpacity}
		>
			<ViewGradient {...viewGradientProps} style={[style.primary.container, containerStyle]}>
				<Text style={[style.primary.text, textStyle]}>{children}</Text>
			</ViewGradient>
		</TouchableOpacity>
	</View>

}

function SecondaryButton(props: ButtonGradientProps) {

	const { children, textStyle, containerStyle, borderWidth = 1, viewGradientProps } = props

	return <View {...props}>
		<TouchableOpacity
			activeOpacity={actions.activeOpacity}
		>
			<ViewGradient {...viewGradientProps} style={
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
	</View>
}
