import { FC } from 'react';
import styled from 'styled-components';
import { TDefaultButtonProps } from '../../types/style.types';

const DefaultButton = styled.button<TDefaultButtonProps>`
  margin-top: ${({ marginTop }) => marginTop}px;
  height: ${({ theme }) => theme.sizes.defaultButtons.height}px;
  width: ${({ theme }) => theme.sizes.defaultButtons.width}px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: 39px;
  border: none;
  font-family: "Roboto";
  font-size: ${({ theme }) => theme.textBolt15.size}px;
  line-height: ${({ theme }) => theme.textBolt15.lineHeight}px;
  font-weight: ${({ theme }) => theme.textBolt15.weight};
  color: white;
`;

export { DefaultButton };