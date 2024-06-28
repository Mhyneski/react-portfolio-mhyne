import logo from "../assets/mjLogo.jpg"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub/>
      </div>
    </nav>
  )
}

export default Navbar