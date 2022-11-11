import { AxisScale } from "@visx/axis";
import { DataProps } from "interfaces/DataProps";

export interface LineChartProps {
  data: DataProps[];
  xScale: AxisScale<number>;
  yScale: AxisScale<number>;
  width: number;
  yMax: number;
  margin: { top: number; right: number; bottom: number; left: number };
  hideBottomAxis?: boolean;
  stroke: string;
  hideLeftAxis?: boolean;
  top?: number;
  left?: number;
  children?: React.ReactNode;
  xTickFormat?: (d: any) => any;
}
