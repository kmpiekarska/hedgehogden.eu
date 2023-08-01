import { Box, Image, Hide, Text } from "@chakra-ui/react";
import FrontImage from "../assets/reindeer-image.png";

const FrontImageArea = () => {
  return (
    <Hide below="md">
      <Text
        className="pageTitle"
        top="34%"
        left="7%"
        fontSize={{ md: "1.8rem", lg: "2.5rem" }}
      >
        Hedgehog Den <br /> Crafts
      </Text>
      <Text
        className="pageTitle"
        top="40%"
        right="15%"
        fontSize={{ md: "1.8rem", lg: "2.5rem" }}
      >
        We just love <br />
        to crochet!
      </Text>

      <Box display="flex">
        <Image
          borderRadius="md"
          fontFamily="Alex Brush"
          maxHeight="78vh"
          mt="-5"
          src={FrontImage}
          alt="Rudolphine the Reindeer "
          boxShadow="2xl"
        />
      </Box>
    </Hide>
  );
};
export default FrontImageArea;
