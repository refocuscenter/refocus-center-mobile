import React from "react";
import { IconGradient, IconGradientProps } from "../components/IconGradient";

interface ToggleIconProps {
  focused: boolean,
  [key: string]: any
}

export function createToggleIconGradient(icon: any, iconGradientProps?: IconGradientProps) {
  return function toggleIconGradient({focused}: ToggleIconProps) {
    return !focused ? icon : <IconGradient {...iconGradientProps}>{icon}</IconGradient>;
  };
}