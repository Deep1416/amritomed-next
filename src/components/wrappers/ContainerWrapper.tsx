import React from 'react';

const ContainerWrapper: React.FC<{
  title?: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-5 py-10 text-center">
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-5 text-blue-600">{title}</h2>}
      {children}
    </div>
  );
};

export default ContainerWrapper;
