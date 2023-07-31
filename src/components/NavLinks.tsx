import { menuItems, menuLinks } from "../data/constants";

import { HStack, Hide, Link } from "@chakra-ui/react";
const NavLinks = () => {
  return (
    <>
      <Hide below="md">
        <HStack>
          {menuItems.map((menuItem, index) => {
            const linkHref = menuLinks[index];

            return (
              <Link padding={5} href={linkHref} key={menuItem}>
                {menuItem}
              </Link>
            );
          })}
        </HStack>
      </Hide>
    </>
  );
};

export default NavLinks;
