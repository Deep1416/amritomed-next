import React from 'react';
import Image from 'next/image';
import logo from '@assets/logo.png';
const Header: React.FC = () => {
  return (
    <div className="w-full h-16 bg-slate-800 text-light flex justify-between items-center p-4 border-b border-gray-600">
      <div className="flex items-center justify-start gap-3">
        <Image src={logo} alt="Amritomed Logo" className="w-8 h-8 object-contain rounded-full" />
        <span className="text-xl md:text-2xl font-medium">AMRITOMED</span>
      </div>
    </div>
  );
};

export default Header;
