import React from "react";

function FurtherNav(props: any) {
  return (
    <div className="absolute left-0 w-full ">
      <div className="flex justify-between bg-white">
        <div className="grid grid-cols-2 w-1/2 py-6 gap-8">
          {props?.category?.subcategories.map(
            (category: any, index: number) => (
              <ul key={index} className="space-y-3">
                <h2 className="text-center font-semibold text-lg">
                  {category?.name}
                </h2>
                {category?.subcategories.map(
                  (subcategory: string, index: number) => (
                    <li className="hover:scale-110" key={index}>
                      {subcategory}
                    </li>
                  )
                )}
              </ul>
            )
          )}
        </div>
        <div className="w-1/2 p-10">
          <img
            src={props?.category?.categoryImage}
            className="w-full bg-cover rounded-lg h-96"
          />
        </div>
      </div>
    </div>
  );
}
export default FurtherNav;
