import React from "react";
import useAxios from "axios-hooks";
import { scaleLinear, scaleTime } from "@visx/scale";
import LineChart from "components/LineChart";
import { DataProps } from "interfaces/DataProps";
import { max, min, extent } from "d3-array";
import { CoinChartProps } from "./interfaces";

const CoinChart: React.FC<CoinChartProps> = ({ id, color, height, width }) => {
  const [{ data, loading }, fetch] = useAxios(
    {
      url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
      method: "GET",
    },
    {
      manual: true,
    }
  );

  React.useEffect(() => {
    if (id) {
      fetch();
    }
  }, [fetch, id]);

  const mappedData: DataProps[] = React.useMemo(() => {
    return data?.prices.length
      ? data.prices.map((ele: any) => ({
          date: new Date(ele[0]),
          price: ele[1],
        }))
      : [];
  }, [data]);

  // accessors
  const getDate = (d: DataProps) => new Date(d.date);
  const getStockValue = (d: DataProps) => d.price;

  // scales
  const dateScale = React.useMemo(() => {
    return scaleTime({
      range: [0, width],
      domain: extent(mappedData, getDate) as [Date, Date],
    });
  }, [mappedData, width]);
  const priceScale = React.useMemo(() => {
    return scaleLinear({
      range: [height, 0],
      domain: [
        min(mappedData, getStockValue) || 0,
        max(mappedData, getStockValue) || 0,
      ],
      nice: true,
    });
    //
  }, [height, mappedData]);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ position: "relative" }}>
      <svg height={height} width={width}>
        <LineChart
          hideBottomAxis
          hideLeftAxis
          data={mappedData}
          width={width}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          yMax={height}
          xScale={dateScale}
          yScale={priceScale}
          stroke={color}
        />
      </svg>
    </div>
  );
};

export default CoinChart;
