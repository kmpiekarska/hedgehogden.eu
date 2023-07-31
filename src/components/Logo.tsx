import { Box, Image } from "@chakra-ui/react";
import { LogoImage } from "../assets";

const Logo = () => {
  return (
    <Box borderRadius="30%" overflow="hidden" boxSize="120">
      <Image alt="HedgehogDenCrafts Logo" src={LogoImage} padding={2} />
    </Box>
  );
};

export default Logo;
