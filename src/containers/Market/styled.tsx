import styled from "styled-components";

const MarketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Title = styled.h2`
  color: ${(p) => p.theme.colors.primary};
`;

export const SC = {
  MarketHeader,
  Title,
};
