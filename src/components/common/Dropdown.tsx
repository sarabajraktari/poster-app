import { baseURL } from "@config";
import { PostActionsEnums } from "@enums";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";

export const Dropdown = (): ReactElement => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const handleChange = () => {
    setShowDropDown(!showDropDown);
  };
  const { modal, id } = useParams();
  const navigate = useNavigate();
  const handleEditPost = () => navigate(`/posts/edit/${id}`);

  return (
    <>
      <button
        data-dropdown-toggle="dropdownDots"
        className="inline-flex relative"
        type="button"
        onClick={() => handleChange()}
      >
        <SlOptionsVertical className="absolute top-0 right-0 pointer" />
      </button>
      {showDropDown && (
        <div className=" absolute right-7 top-10 z-10 mt-2 w-48  bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button
                onClick={() => handleEditPost()}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </button>
            </li>
            <li>
              <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
