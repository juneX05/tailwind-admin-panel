import React, { useState } from "react";
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { FaTachometerAlt } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(-1);
  const menus = [
    { title: "Menus", type: "header" },
    { title: "Dashboard", icon: <FaTachometerAlt /> },
    { title: "Pages", icon: <FaTachometerAlt /> },
    { title: "Media", icon: <FaTachometerAlt /> },
    {
      title: "Projects",
      icon: <FaTachometerAlt />,
      children: [
        { title: "All Projects" },
        { title: "New Project" },
        { title: "Active Projects" },
      ],
    },
    { title: "Analytics", icon: <FaTachometerAlt /> },
    { title: "Inbox", icon: <FaTachometerAlt /> },
    { title: "Configurations", type: "header" },
    { title: "Profile", icon: <FaTachometerAlt /> },
    {
      title: "Settings",
      icon: <FaTachometerAlt />,
      children: [
        { title: "System Configurations" },
        { title: "Theme" },
        { title: "Emails" },
        { title: "SMS" },
        { title: "Audit Trail" },
      ],
    },
    { title: "Logout", icon: <FaTachometerAlt /> },
  ];
  return (
    <div
      className={`bg-dark-purple min-h-screen p-5 pt-8 relative duration-300 ${
        open ? "w-72" : "w-20"
      }`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 
                        top-9 border border-dark-purple cursor-pointer duration-300 ${
                          !open && "rotate-180"
                        }`}
        onClick={() => setOpen(!open)}
      />

      <div className="inline-flex">
        <AiFillEnvironment
          className={`bg-amber-300 text-4xl rounded- cursor-pointer block float-left mr-2 duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          Tailwind
        </h1>
      </div>

      <div
        className={`flex items-center rounded-md bg-light-white mt-6 px-4 py-2 ${
          !open ? "px-2.5" : "px-4"
        }`}
      >
        <BsSearch
          className={`text-white text-lg block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />
        <input
          type={"search"}
          placeholder="Search"
          className={`text-base bg-transparent w-full text-white focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>

      <ul className="pt-2">
        {menus.map((menu, index) => (
          <>
            {menu.type == "header" ? (
              <li
                key={index}
                className={`text-gray-400 text-sm flex items-center gap-x-4 uppercase p-2 rounded-md ${
                  index == 0 ? "" : " mt-9"
                } ${!open && "hidden"}`}
              >
                <span
                  className={`text-base font-medium flex-1 duration-300 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            ) : (
              <>
                <li
                  key={index}
                  onClick={() => {
                    submenuOpen == index
                      ? setSubmenuOpen(-1)
                      : setSubmenuOpen(index);
                  }}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
                     hover:bg-light-white rounded-md mt-2`}
                >
                  <span className="text-2xl block float-left">{menu.icon}</span>
                  <span
                    className={`text-base font-medium flex-1 duration-300 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>

                  {menu.children && menu.children.length > 0 && (
                    <BsChevronDown
                      className={`${submenuOpen == index && "rotate-180"}`}
                    />
                  )}
                </li>

                {menu.children &&
                  menu.children.length > 0 &&
                  submenuOpen == index &&
                  open && (
                    <ul className="duration-300 bg-light-white">
                      {menu.children.map((submenu, submenuIndex) => (
                        <li
                          key={submenuIndex}
                          className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-10 hover:bg-light-white rounded-md mt-2`}
                        >
                          <span
                            className={`text-base font-medium flex-1 duration-300 ${
                              !open && "hidden"
                            }`}
                          >
                            {submenu.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
              </>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
