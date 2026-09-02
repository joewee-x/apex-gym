import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#f8f5ee] shadow-sm">
      <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="text-xl font-bold text-[#173126] sm:text-2xl">
          ApexGym
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm lg:gap-7">
            <li className="cursor-pointer">Programme</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Membership</li>
            <li className="cursor-pointer">Schedule</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="hidden items-center text-sm md:flex">
          <button className="mr-3 h-10 rounded-full border border-[#173126] px-5 font-bold text-[#173126] lg:px-7">
            Member Access
          </button>

          <button className="h-10 rounded-full bg-[#173126] px-5 font-bold text-[#f8f5ee] lg:px-7">
            Book a Tour
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-[#173126] md:hidden">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#173126]/10 bg-[#f8f5ee] px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-5 text-sm font-medium text-[#173126]">
            <li>Programme</li>
            <li>About</li>
            <li>Membership</li>
            <li>Schedule</li>
            <li>Contact</li>
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <button className="h-11 w-full rounded-full border border-[#173126] font-bold text-[#173126]">
              Member Access
            </button>

            <button className="h-11 w-full rounded-full bg-[#173126] font-bold text-[#f8f5ee]">
              Book a Tour
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
