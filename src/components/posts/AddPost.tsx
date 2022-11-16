// import { joiResolver } from "@hookform/resolvers/joi";
import { usePost } from "hooks/UsePost";
import { PostsProps } from "interfaces/Posts.props";
import React from "react";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
// import { PosterValidatorSchema } from "validators/Poster.validator";

export const AddPost = (): ReactElement => {
  const {
    register,
    handleSubmit,
    // reset,
    // formState: { errors },
  } = useForm<PostsProps>();

  const { createPost } = usePost();

  const onCreate = (data: PostsProps) => {
    createPost(data);
    // alert(JSON.stringify(data));
  };
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-cyan-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none m-5 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create a post
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create post</h3>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit(onCreate)}>
                  <div className="  block items-center p-4 max-w-sm w-96 m-5 float-right bg-white  dark:bg-gray-800 dark:border-gray-700 ">
                    <div className=" mb-3">
                      <input
                        {...register("title", { required: true })}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Title"
                      />
                      {/* {errors.title && (
                        <div className="text-red-600">
                          {errors.title.message}
                        </div>
                      )} */}
                    </div>
                    <div className=" mb-3">
                      <textarea
                        {...register("description")}
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your content..."
                      ></textarea>
                    </div>
                    <div className=" mb-3">
                      <input
                        {...register("image")}
                        type="url"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="img URL"
                      />
                    </div>
                  </div>

                  {/*footer*/}
                  <div className=" p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 float-right text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      // onClick={() => setShowModal(false)}
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
