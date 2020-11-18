import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 6px;
  line-height: 20px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const Stat = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-right: 16px;
`;

export const StatCount = styled.Text`
  margin-left: 6px;
`;
