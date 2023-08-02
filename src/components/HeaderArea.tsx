import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { NavLinks, MobileMenu } from "./index";

const HeaderArea = () => {
  return (
    <Flex
      w="80vw"
      p={2}
      mt={0}
      justifyContent={{ base: "center", md: "space-between" }}
    >
      <Logo />
      <MobileMenu />
      <NavLinks />
    </Flex>
  );
};

export default HeaderArea;
