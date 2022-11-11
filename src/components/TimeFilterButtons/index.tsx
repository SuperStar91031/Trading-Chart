import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import useOptionalControlledState from "hooks/useOptionalControlledState";
import { TimeFilters } from "enums/TimeFilters";

export const TimePeriod: {
  [key: string]: TimeFilters;
} = {
  "1D": TimeFilters.P1D,
  "7D": TimeFilters.P7D,
  "1M": TimeFilters.P1M,
  "3M": TimeFilters.P3M,
  "1Y": TimeFilters.P1Y,
  ALL: TimeFilters.ALL,
};

export const TimeFilterButtons: React.FC<{
  value?: string;
  defaultValue?: string;
  onChange?: (value: string | undefined) => void;
}> = ({ value, defaultValue, onChange }) => {
  const [filter, setFilter] = useOptionalControlledState<string | undefined>({
    controlledValue: value,
    initialValue: TimeFilters.P1D,
    onChange,
  });

  return (
    <ToggleButtonGroup
      size="small"
      value={filter}
      exclusive
      onChange={(e, v) => {
        setFilter(v);
      }}
      color="primary"
      aria-label="outlined primary button group"
    >
      {Object.keys(TimePeriod).map((t) => {
        return (
          <ToggleButton key={t} value={TimePeriod[t]}>
            {t}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default TimeFilterButtons;
