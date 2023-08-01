import { menuItems, menuLinks } from "../data/constants";

import { Flex, Hide, Link } from "@chakra-ui/react";
const NavLinks = () => {
  return (
    <>
      <Hide below="md">
        <Flex direction="row" justifyContent="space-between">
          {menuItems.map((menuItem, index) => {
            const linkHref = menuLinks[index];

            return (
              <Link
                as="a"
                className="navLink"
                padding={5}
                href={linkHref}
                key={menuItem}
              >
                {menuItem}
              </Link>
            );
          })}
        </Flex>
      </Hide>
    </>
  );
};

export default NavLinks;
