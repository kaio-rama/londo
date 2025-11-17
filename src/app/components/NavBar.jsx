"use client";

import React, { useState, useEffect } from "react";
import { Navbar, Typography, IconButton, Collapse } from "@material-tailwind/react";

export function StickyNavbar() {
    const [openNav, setOpenNav] = useState(false);
    const [activePage, setActivePage] = useState();

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    // Cerrar el menú al redimensionar la pantalla en desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navItems = [
        { href: "/", label: "Inicio" },
        { href: "/londoLabs", label: "Londo.ADV" },
        { href: "/barcelona", label: "BCN" },	
        { href: "/about", label: "About" },
        { href: "/contacto", label: "Contacto" },
        { href: "#", label: "WhatsApp", color: "text-green-200" }
    ];

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 z-100">
            {navItems.map(({ href, label, color = "text-blue-gray-200" }) => (
                <a key={href} href={href} className="flex items-center" onClick={() => setActivePage(href)}>
                  <Typography      
                      as="li"
                      variant="small"
                      className={`p-1 font-normal transition-all duration-300 hover:text-white hover:drop-shadow-glow ${activePage === href ? "text-blue-gray-600" : color}`}
                  >
                          {label}                    
                  </Typography>
                </a>
            ))}
        </ul>
    );

    return (
        <div className="sticky top-0 z-50 w-full">
            <Navbar className="sticky top-0 z-10 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-transparent border-none">
                <div className="flex items-center justify-between text-blue-gray-100">
                    <Typography as="a" href="/" className="mr-14 cursor-pointer py-1.5 text-2xl font-bold transition-all duration-300 hover:text-white hover:drop-shadow-glow">
                        Londo Labs //
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:drop-shadow-glow lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>{navList}</Collapse>
            </Navbar>
        </div>
    );
}