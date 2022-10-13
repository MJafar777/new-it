import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [subHover, setSubHover] = useState(false);
  const [indexNum, setIndexNum] = useState();
  const [subIndexNum, setSubIndexNum] = useState(null);

  const onMouseEnterHandler = (index) => {
    setHover(!hover);
    setIndexNum(index);
  };
  const onMouseLeaveHandler = () => {
    setHover(!hover);
    setIndexNum();
  };
  const onMouseEnterHandlerSub = (index) => {
    setSubHover(!subHover);
    setSubIndexNum(index);
  };
  const onMouseLeaveHandlerSub = () => {
    setSubHover(!subHover);
    setSubIndexNum();
  };
  const data = [
    {
      navbar: [
        { name: "Home", link: "/", subNavbar: false },
        { name: "About Us", link: "/about", subNavbar: false },
        {
          name: "Our Services",
          subNavbar: [
            { name: "About Us", link: "/" },
            { name: "PC Repair", link: "/" },
            { name: "Laptop Repair", link: "/" },
          ],
        },
        { name: "Phone Parts", link: "/", subNavbar: false },
        {
          name: "Help Communities",
          subNavbar: [
            { name: "Groups", link: "/" },
            { name: "Members", link: "/" },
          ],
        },
        { name: "Blog", link: "/", subNavbar: false },
        { name: "Contact", link: "/", subNavbar: false },
      ],
    },
  ];
  return (
    <header className=" lg:text-2xl text-gray-400 bg-white">
      <div className="head">
        <div className="container flex items-center justify-between ">
          <div className="left_head flex items-center justify-between gap-6 py-6">
            <div className="imgContainer">
              <img src="" alt="header_Img" />
            </div>
            <div className="flex items-center">
              <div className="flex border border-purple-200 rounded">
                <input
                  type="text"
                  className="block w-full px-4 py-2 text-gray-400 bg-white rounded-l-md focus:outline-none"
                  placeholder="Search..."
                />
                <button className="px-4 text-white bg-green-600 transition-all hover:bg-green-500 rounded-r ">
                  Search
                </button>
              </div>
            </div>
            <div className="text-base">
              <p className="flex items-center gap-2">
                <p className="w-2 h-2 rounded-full bg-green-600"></p>
                Пользователей онлайн: 2241
              </p>
              <p className="flex items-center gap-2">
                <p className="w-2 h-2 rounded-full bg-blue-600"></p>
                Последний заказ: 33 сек. назад
              </p>
            </div>
          </div>
          <div className="right_head space-x-8">
            <NavLink className="text-black decoration-none" to="/login">
              Login
            </NavLink>
            <NavLink className="" to="/register">
              Register
            </NavLink>
            <NavLink to="/frilancer">Frilancer</NavLink>
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <nav className="relative">
        <div className="container">
          <ul className="flex items-center justify-center">
            {data[0]["navbar"].map((item, index) => (
              <div key={index} className="flex">
                <li
                  onMouseEnter={() => onMouseEnterHandler(index)}
                  onMouseLeave={() => onMouseLeaveHandler(index)}
                  className=" cursor-pointer"
                >
                  {item.link ? (
                    <NavLink
                      className="text-gray-700 block px-10 py-3 hover:text-blue-600 relative before:absolute before:bottom-0 before:left-0 hover:before:right-0 before:h-1 before:rounded-full hover:before:bg-blue-600"
                      to={item.link}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <p className="text-gray-700 px-10 py-3 hover:text-blue-600 relative before:absolute before:bottom-0 before:left-0 hover:before:right-0 before:h-1 before:rounded-full hover:before:bg-blue-600">
                      {item.name}
                    </p>
                  )}
                  {item.subNavbar && hover && indexNum === index ? (
                    <div className="absolute top-full left-0 right-0 bg-white">
                      <hr />
                      <ul className="flex items-center justify-center">
                        {item.subNavbar.map((subItem, index) => (
                          <li
                            key={index}
                            onMouseEnter={() => onMouseEnterHandlerSub(index)}
                            onMouseLeave={() => onMouseLeaveHandlerSub(index)}
                            className="relative text-gray-700"
                          >
                            <NavLink className="inline-block py-3 px-6 hover:text-blue-600" to={subItem.link}>
                              {subItem.name}
                            </NavLink>
                            {index === subIndexNum ? (
                              <ul className="absolute bg-white border border-gray-300 rounded-md min-w-max max-h-[500px] py-6">
                                <div>
                                  <h3 className="text-gray-800 text-2xl font-bold pb-2 px-8">Klaviatura</h3>
                                  <li>
                                    <NavLink
                                      className="text-gray-700 leading-loose hover:text-blue-600 px-8 relative w-full before:absolute before:top-0 before:bottom-0 before:left-0 before:w-1 hover:before:bg-blue-600"
                                      to="/"
                                    >
                                      texnik ko'rik
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="text-gray-700 leading-loose hover:text-blue-600 px-8 relative w-full before:absolute before:top-0 before:bottom-0 before:left-0 before:w-1 hover:before:bg-blue-600"
                                      to="/"
                                    >
                                      texnik ko'rik
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="text-gray-700 leading-loose hover:text-blue-600 px-8 relative w-full before:absolute before:top-0 before:bottom-0 before:left-0 before:w-1 hover:before:bg-blue-600"
                                      to="/"
                                    >
                                      texnik ko'rik
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      className="text-gray-700 leading-loose hover:text-blue-600 px-8 relative w-full before:absolute before:top-0 before:bottom-0 before:left-0 before:w-1 hover:before:bg-blue-600"
                                      to="/"
                                    >
                                      texnik ko'rik
                                    </NavLink>
                                  </li>
                                </div>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                        ))}
                      </ul>
                      <hr />
                    </div>
                  ) : (
                    ""
                  )}
                </li>
                <span className=" border-l mt-4 border-gray-400 h-8"></span>
              </div>
            ))}
          </ul>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
