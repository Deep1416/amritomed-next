import ContainerWrapper from '@components/wrappers/ContainerWrapper';
import React from 'react';

const OurBrands: React.FC = () => {
  return (
    <ContainerWrapper title="Our Brands">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {['AMIGEST', 'CRAMPMOL', 'FERTICEIVE', 'ISORINE', 'MYOTOVA', 'NORMITRO'].map((brand) => (
          <button
            key={brand}
            className="cursor-pointer py-2.5 px-5 me-2 mb-2 text-lg sm:text-xl font-medium text-blue-600 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {brand}
          </button>
        ))}
      </div>
    </ContainerWrapper>
  );
};

export default OurBrands;
