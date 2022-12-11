import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const BackgroundColor = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.colors.brand.black};
`;

export const HeaderText = styled.Text`
  font-family: ${(p) => p.theme.fonts.heading};
  color: ${(p) => p.theme.colors.text.white};
  font-size: ${(p) => p.theme.fontSizes.title};

  padding-left: ${(p) => p.theme.space[4]};
  margin-bottom: ${(p) => p.theme.space[3]};

  flex-shrink: 1;
`;

export const HeaderTextHot = styled.Text`
  font-family: ${(p) => p.theme.fonts.body};
  color: ${(p) => p.theme.colors.ui.secondary};
  font-size: ${(p) => p.theme.fontSizes.title};
  padding-left: ${(p) => p.theme.space[4]};
  margin-bottom: ${(p) => p.theme.space[3]};
`;

export const DescriptionText = styled.Text`
  font-family: ${(p) => p.theme.fonts.body};
  color: ${(p) => p.theme.colors.text.white};
  font-size: ${(p) => p.theme.fontSizes.body};
  padding-left: ${(p) => p.theme.space[4]};
  margin-bottom: ${(p) => p.theme.space[3]};
`;

export const MovieCard = styled(Card)`
  margin: ${(p) => p.theme.space[0]};
`;

export const MovieCardCover = styled(Card.Cover)`
  height: 150px;
  width: 120px;
`;
