import { HeaderNav } from "./(components)/header-nav";
import { menuConfig } from "./(components)/menu.config";

export const Header = () => {
  return (
    <header className="fixed left-0 right-0  border-y-[1px]">
      <HeaderNav items={menuConfig} />
    </header>
  );
};
