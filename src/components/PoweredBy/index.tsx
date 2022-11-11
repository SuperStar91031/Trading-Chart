import React from "react";
import styled from "styled-components";

const PoweredByContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
  cursor: pointer;
`;

const PoweredBy = () => {
  return (
    <PoweredByContainer
      onClick={() => window.open("https://www.coingecko.com/en")}
    >
      <b>Powered By CoinGecko</b>
    </PoweredByContainer>
  );
};

export default PoweredBy;
