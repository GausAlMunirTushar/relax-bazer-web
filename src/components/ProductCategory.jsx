import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductCategory = () => {
  return (
    <div>
      <div className="w-60 border-2 border-gray-300 rounded-lg p-3">
        <div className="flex justify-center">
          <Image
            src="/images/product/cumin-powder.png"
            alt="Product Image"
            height={211}
            width={85}
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl text-primary ">
            <p>70.00</p>
          </div>
          <div>
            <MdKeyboardArrowDown className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
