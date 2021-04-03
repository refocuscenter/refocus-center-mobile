import React, { useEffect, useRef } from "react";
import { StyleProp, Text, TextInput, TextStyle, TextInputProps, ViewStyle, View, StyleSheet, ViewProps } from "react-native";
import { colors, fonts } from "../theme";
import { Gradient } from "../types/app/theme";
import { GradientType, ViewGradient } from "./ViewGradient";

const style = StyleSheet.create({
    textInput: {
        fontFamily: fonts.mainFontFamily,
        fontWeight: "500",
        fontSize: 14,
        marginLeft: 5,
        paddingVertical: 6,
        color: colors.darkPurple
    },
    viewGradient: {
        paddingTop: 2,
        justifyContent: 'center',
    }
});

export interface TextInputGradientProps extends TextInputProps {
    gradient?: Gradient;
    style?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}

export function TextInputGradient(props: TextInputGradientProps) {

    const {
        gradient = colors.MainDegrade100,
        containerStyle
    } = props;

    const textInputRef: React.MutableRefObject<TextInput | null> = useRef(null);

    //Fixing native font bug
    useEffect(() => {
        textInputRef.current?.setNativeProps({
            style: { fontFamily: fonts.mainFontFamily }
        })
    }, [])

    return (
        <ViewGradient
            containerStyle={style.viewGradient}
            style={containerStyle}
            gradient={gradient}
            type="secondary">
            <TextInput
                ref={textInputRef}
                placeholderTextColor={colors.darkPurple}
                {...props}
                style={[style.textInput, props.style]}
            />
        </ViewGradient>
    );
}