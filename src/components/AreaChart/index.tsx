import React from "react";
import { AreaClosed } from "@visx/shape";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { LinearGradient } from "@visx/gradient";
import { Group } from "@visx/group";
import { AreaChartProps, DataProps } from "./interfaces";
import {
  AXIS_COLOR,
  AXIS_BOTTOM_TICK_LABEL_PROPS,
  AXIS_LEFT_TICK_LABEL_PROPS,
} from "./constants";

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  width,
  yMax,
  margin,
  xScale,
  yScale,
  gradientColor,
  hideBottomAxis = false,
  hideLeftAxis = false,
  top,
  left,
  children,
}) => {
  // accessors
  const getDate = (d: DataProps) => new Date(d?.date);
  const getStockValue = (d: DataProps) => d?.price;

  if (width < 10) return null;
  return (
    <Group left={left || margin.left} top={top || margin.top}>
      <LinearGradient
        id="gradient"
        from={gradientColor}
        fromOpacity={1}
        to={gradientColor}
        toOpacity={0.2}
      />
      <AreaClosed<DataProps>
        data={data}
        x={(d) => xScale(getDate(d)) || 0}
        y={(d) => yScale(getStockValue(d)) || 0}
        yScale={yScale}
        strokeWidth={1.5}
        stroke={`url(#gradient)`}
        fill={`url(#gradient)`}
      />
      {!hideBottomAxis && (
        <AxisBottom
          top={yMax}
          scale={xScale}
          numTicks={width > 520 ? 10 : 5}
          stroke={AXIS_COLOR}
          tickStroke={AXIS_COLOR}
          tickLabelProps={() => AXIS_BOTTOM_TICK_LABEL_PROPS}
        />
      )}
      {!hideLeftAxis && (
        <AxisLeft
          scale={yScale}
          numTicks={5}
          stroke={AXIS_COLOR}
          tickStroke={AXIS_COLOR}
          tickLabelProps={() => AXIS_LEFT_TICK_LABEL_PROPS}
        />
      )}
      {children}
    </Group>
  );
};

export default AreaChart;
