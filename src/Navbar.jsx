import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-black text-white justify-between py-4 ">
        <div>
          <h3 className="font-semibold px-4">TechProject</h3>
        </div>
        <ul className="flex gap-4 px-4">
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;