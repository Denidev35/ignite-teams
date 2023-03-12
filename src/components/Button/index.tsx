import { TouchableOpacityProps } from "react-native";
import { ButtonTypesStyleProps, Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string
  type?: ButtonTypesStyleProps
}

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}