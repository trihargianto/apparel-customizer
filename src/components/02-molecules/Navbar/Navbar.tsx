import Logo from "../../01-atoms/Logo";

const Navbar = () => (
  <nav className="p-4 bg-white border-b border-gray-300">
    <div className="container mx-auto lg:px-40 xl:px-64">
      <Logo />
    </div>
  </nav>
);

export default Navbar;
