import { menuItems, menuLinks } from "../data/constants";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Show,
  Box,
} from "@chakra-ui/react";
const MobileMenu = () => {
  return (
    <>
      <Show below="md">
        <Box mt={3}>
          <Menu>
            <MenuButton as="a">Menu</MenuButton>
            <MenuList>
              {menuItems.map((menuItem, index) => {
                const linkHref = menuLinks[index];

                return (
                  <MenuItem as="a" href={linkHref} key={menuItem}>
                    {menuItem}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Box>
      </Show>
    </>
  );
};

export default MobileMenu;
