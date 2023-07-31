import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { NavLinks, MobileMenu } from "./index";

const HeaderArea = () => {
  return (
    <Flex h="120px" justifyContent="space-between" align->
      <Logo />
      <MobileMenu />
      <NavLinks />
    </Flex>
  );
};

export default HeaderArea;
