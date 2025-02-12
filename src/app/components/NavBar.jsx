"use client";

import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
  } from "@material-tailwind/react";
   
  export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 z-100">
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal text-blue-gray-200"
        >
          <a href="/londoLabs" className="flex items-center">
            Londo.ADV
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal text-blue-gray-200"
        >
          <a href="/" className="flex items-center">
            Inicio
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal text-blue-gray-200"
        >
          <a href="/about" className="flex items-center">
            About
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal text-blue-gray-200"
        >
          <a href="/contacto" className="flex items-center">
            Contacto
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal text-green-200"
        >
          <a href="#" className="flex items-center">
            WhattsApp
          </a>
        </Typography>
      </ul>
    );
   
    return (
      <div className="sticky top-0 z-50 max-h-[768px] w-[calc(100%)]">   
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-transparent border-none">
          <div className="flex items-center justify-between text-blue-gray-100">
            <Typography
              as="a"
              href="/"
              className="mr-14 cursor-pointer py-1.5 text-2xl font-bold"
            >
              Londo Labs //
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <Collapse open={openNav}>
            {navList}
          </Collapse>
        </Navbar>
      </div>
    );
  }