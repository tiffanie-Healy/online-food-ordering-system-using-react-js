import { FC } from "react";
import { Path, Rect, Svg } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const MotorBikeIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "#000",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512" fill="none">
      <Path
        d="M417.975 226.338c-5.966 0-11.764.618-17.404 1.684l-33.048-100.841c-5.781-17.644-22.258-29.577-40.822-29.577h-45.506v24.414h45.506c8.038 0 15.147 5.155 17.636 12.768l6.028 18.433h-60.684c-31.084 0-54.424 15.542-54.424 15.542v45.358h135.064l7.064 21.54c-31.579 15.163-53.42 47.345-53.435 84.704 0 51.936 42.09 94.018 94.026 94.033 51.92-0.015 94.01-42.097 94.025-94.033 0.015-51.928-42.075-94.01-94.095-94.025z"
        fill={color}
      />
      <Path
        d="M94.01 226.338c-51.936 0.015-94.01 42.097-94.026 94.025 0.016 51.936 42.074 94.018 94.01 94.033 51.936-0.015 94.01-42.097 94.026-94.033 0.015-51.928-42.075-94.01-94.095-94.025z"
        fill={color}
      />
      <Path
        d="M94.01 293.167c-15.024 0-27.204 12.172-27.204 27.196 0 15.032 12.18 27.22 27.204 27.22 15.025 0 27.22-12.188 27.22-27.22 0-15.024-12.195-27.196-27.22-27.196z"
        fill={color}
      />
      <Path
        d="M439.074 207.55v-65.855c-27.854 0-45.583 18.997-45.583 18.997v27.854c0 20.01 17.729 39.014 45.583 39.014z"
        fill={color}
      />
      <Rect
        x="450.868"
        y="141.68"
        width="13.525"
        height="65.847"
        fill={color}
      />
      <Path
        d="M70.5 214.119H220.17v-42.762h-45.52c-12.212 0-24.345-1.932-35.954-5.742l-16.261-5.34c-11.592-3.81-23.742-5.758-35.953-5.758H70.5c-8.47 0-15.348 6.886-15.348 15.372v28.858c0 8.486 6.878 15.372 15.348 15.372z"
        fill={color}
      />
      <Path
        d="M343.302 232.111v-1.352H167.03c26.029 21.161 42.708 53.435 42.708 89.636 0 3.246 1.112 9.761 10.433 9.761h69.928c8.888 0 12.118-6.515 12.118-9.761 0-36.113 15.982-67.839 41.085-89.636z"
        fill={color}
      />
    </Svg>
  );
};

export default MotorBikeIcon;
