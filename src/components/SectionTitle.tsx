import { Text, Image, Box } from "@chakra-ui/react";

interface Props {
  children: string;
}
import Divider from "../assets/divider.png";
const SectionTitle = ({ children }: Props) => {
  return (
    <>
      <Box
        w={{ sm: "90vw", md: "80vw", lg: "80vw" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          as="h1"
          fontSize={{ md: "1.4rem", lg: "1.8rem" }}
          marginY={2}
          letterSpacing={3}
          fontStyle="italic"
          color="rgba(224, 154, 11, 1)"
          textShadow="2px 2px 6px #fae5a2"
        >
          {children}
        </Text>
        <Image src={Divider} alt="divider" h="50%"></Image>
        <hr className="divider"></hr>
      </Box>
    </>
  );
};

export default SectionTitle;
