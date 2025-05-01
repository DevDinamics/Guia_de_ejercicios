import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black/95 backdrop-blur-sm py-4 px-4 flex justify-between items-center sticky top-0 z-50 border-b border-white/10">
      <div className="flex items-center">
      <Image
      src="https://github.com/DevDinamics/baco_de_imagenes_guia/blob/main/images/logo_fitgo.png?raw=true"
      alt="Logo de la marca"
      width={70}
      height={70}
      className="rounded-full"
    />
        <span className="text-xl font-black text-white">Fitgo</span> 
      </div>
      
      <div className="flex space-x-6">

        <Link href="../Acerca_de" className="font-black text-white hover:text-[#FFA100] transition-colors">
          Acerca de la guia
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;