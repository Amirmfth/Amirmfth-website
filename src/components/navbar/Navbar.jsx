import NavButtons from "./NavButtons"
import Navitems from "./navItems"

function Navbar() {
  return (
    <nav className="container flex mb-8 mx-auto  justify-between ">
        <Navitems />
        <NavButtons />
    </nav>
  )
}

export default Navbar
