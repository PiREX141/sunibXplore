"use client";

// untuk link & image dari next
import Link from "next/link";
import Image from "next/image";

// color palette
// 362013
// 6D442E

const Navbar = () => {
    return(
        <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#362013] to-[#6D442E] text-white">
            <div className="text-2xl">
                <h1>SunibXplore</h1>
            </div>

            {/* dropdownnya blm sbrp ngerti :Sob: */}
            <div className="space-x-3">
                <Link href="/">Home</Link>
                <Link href="/umkmList">UMKM List</Link>
                <Link href="/umkmDetails">UMKM Detail</Link>
                <Link href="/aboutUs">About Us</Link>

            </div>
        </nav>
    );
};

export default Navbar;
