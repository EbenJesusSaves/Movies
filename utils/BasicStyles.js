import styled from "styled-components/native";

export const BackgroundColor = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.colors.brand.black};
`;

export const HeaderText = styled.Text`
  font-family: ${(p) => p.theme.fonts.body};
  color: ${(p) => p.theme.colors.text.white};
  font-size: ${(p) => p.theme.fontSizes.title};
  padding-left: ${(p) => p.theme.space[4]};
  margin-bottom: ${(p) => p.theme.space[3]};
`;
