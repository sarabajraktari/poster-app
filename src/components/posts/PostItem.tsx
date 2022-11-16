import { PostsProps } from "interfaces/Posts.props";
import React from "react";
import { ReactElement } from "react";
import { SlOptionsVertical } from "react-icons/sl";

export const PostItem = ({
  image,
  title,
  description,
}: PostsProps): ReactElement => {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const handleChange = () => {
    return setShowDropDown(!showDropDown);
  };
  return (
    <div className="relative flex flex-col m-5 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-5 leading-normal">
        <button
          data-dropdown-toggle="dropdownDots"
          className="inline-flex relative"
          type="button"
          onClick={() => handleChange()}
        >
          <SlOptionsVertical className="absolute top-0 right-0 pointer" />
        </button>
        {showDropDown ? (
          <div className=" absolute right-7 top-10 z-10 mt-2 w-48  bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Edit
                </a>
              </li>
              <li>
                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Delete
                </a>
              </li>
            </ul>
          </div>
        ) : null}

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
