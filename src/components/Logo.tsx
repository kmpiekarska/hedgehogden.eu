import { Box, Image } from "@chakra-ui/react";
import { LogoImage } from "../assets";

const Logo = () => {
  return (
    <Box
      borderRadius="30%"
      overflow="hidden"
      boxSize="120"
      mt="-5"
      ml={{ sm: "0", md: "0", lg: "20px" }}
    >
      <Image
        alt="HedgehogDenCrafts Logo"
        mt="10px"
        src={LogoImage}
        padding={2}
      />
    </Box>
  );
};

export default Logo;
