import { Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const SectionTitle = ({ children }: Props) => {
  return (
    <>
      <Text
        as="h1"
        fontSize={{ md: "1.4rem", lg: "1.8rem" }}
        marginY={2}
        letterSpacing={3}
        color="orange.500"
        text-shadow="lg"
      >
        {children}
      </Text>
    </>
  );
};

export default SectionTitle;
