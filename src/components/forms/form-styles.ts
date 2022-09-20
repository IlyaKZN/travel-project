import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.form`
  padding: 0 14px;
  width: 100%;
  gap: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLink = styled(Link)`
  font-family: ${({ theme }) => theme.textBolt15.family};
  font-size: ${({ theme }) => theme.textBolt15.size}px;
  line-height: ${({ theme }) => theme.textBolt15.lineHeight}px;
  font-weight: ${({ theme }) => theme.textBolt15.weight};
  color: ${({ theme }) => theme.colors.primary};
`;

const FormText = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.textBolt15.family};
  font-size: ${({ theme }) => theme.textBolt15.size}px;
  line-height: ${({ theme }) => theme.textBolt15.lineHeight}px;
  font-weight: ${({ theme }) => theme.textBolt15.weight};
`;

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%
`;

const RadioButtonsContainer = styled.div`
  margin-top: 13px;
  display: flex;
`;

const FormFieldDescription = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.textRegular13.family};
  font-size: ${({ theme }) => theme.textRegular13.size}px;
  line-height: ${({ theme }) => theme.textRegular13.lineHeight}px;
  font-weight: ${({ theme }) => theme.textRegular13.weight};
`;

export {
  Form,
  FormLink,
  FormText,
  FormFieldContainer,
  FormFieldDescription,
  RadioButtonsContainer,
};
