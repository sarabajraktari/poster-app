import { PostActionsEnums } from "@enums";
import { usePost } from "@hooks";
import { ReactElement, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";
import { useOutsideClickRef } from "rooks";

export const Dropdown = ({ id }: { id: string }): ReactElement => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  // const [showDeleteModal, setDeleteModal] = useState<boolean>(false);

  const { removePost } = usePost();
  const navigate = useNavigate();
  const [ref] = useOutsideClickRef(() => {
    setShowDropDown(!showDropDown);
  });
  const { modal } = useParams();

  const showDeleteModal = modal === PostActionsEnums.DELETE;

  const handleShowDropdown = () => {
    setShowDropDown(!showDropDown);
  };
  const handleEditPost = () => {
    setShowDropDown(!showDropDown);
    navigate(`/posts/edit/${id}`);
  };

  const handleDeletePost = () => navigate(`/posts/delete/${id}`);
  const handleGoBack = () => navigate("/posts");

  const deletePost = () => {
    removePost(id);
    handleGoBack();
  };

  return (
    <div className="flex">
      <button
        data-dropdown-toggle="dropdownDots"
        className="inline-flex  "
        type="button"
        onClick={handleShowDropdown}
      >
        <SlOptionsVertical className="absolute right-0  pointer" />
      </button>
      {showDropDown && (
        <div
          ref={ref}
          className=" absolute top-0 right-0 m-3 z-10  w-48  bg-white rounded divide-y divide-gray-100 shadow "
        >
          <ul className="py-1 text-sm text-gray-700 ">
            <li>
              <button
                onClick={handleEditPost}
                className="block py-2 px-4 w-full hover:bg-gray-100"
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={handleDeletePost}
                className="block py-2 px-4 w-full hover:bg-gray-100 "
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Delete </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure you wanna to delete this ?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleGoBack}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={deletePost}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};
