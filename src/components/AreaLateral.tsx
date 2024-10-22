import Logo from "./Logo";
import Menu from "./Menu";

export default function AreaLateral() {
  return (
    <div className=" flex flex-col gap-5 custom-shadow mr-2">
      <Logo />
      <Menu />
    </div>
  );
}
