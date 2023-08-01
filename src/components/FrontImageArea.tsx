import { Box, Image } from "@chakra-ui/react";
import FrontImage from "../assets/reindeer-image.png";

const FrontImageArea = () => {
  return (
    <Box display="flex" hideBelow="md">
      <Image
        borderRadius="md"
        h="78vh"
        mt="-5"
        src={FrontImage}
        alt="Rudolphine the Reindeer "
        boxShadow="2xl"
      />
    </Box>
  );
};
export default FrontImageArea;
