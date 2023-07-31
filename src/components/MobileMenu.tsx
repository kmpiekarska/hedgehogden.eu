import { menuItems, menuLinks } from "../data/constants";

import { Menu, MenuButton, MenuList, MenuItem, Show } from "@chakra-ui/react";
const MobileMenu = () => {
  return (
    <>
      <Show below="md">
        <Menu>
          <MenuButton as="a">Open menu</MenuButton>
          <MenuList>
            {menuItems.map((menuItem, index) => {
              const linkHref = menuLinks[index];

              return (
                <MenuItem as="a" className="" href={linkHref} key={menuItem}>
                  {menuItem}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Show>
    </>
  );
};

export default MobileMenu;
