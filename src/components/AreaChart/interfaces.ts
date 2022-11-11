import { AxisScale } from "@visx/axis";
export interface DataProps {
  date: string;
  price: number;
}

export interface AreaChartProps {
  data: DataProps[];
  xScale: AxisScale<number>;
  yScale: AxisScale<number>;
  width: number;
  yMax: number;
  margin: { top: number; right: number; bottom: number; left: number };
  gradientColor: string;
  stroke?: string;
  hideBottomAxis?: boolean;
  hideLeftAxis?: boolean;
  top?: number;
  left?: number;
  children?: React.ReactNode;
}
