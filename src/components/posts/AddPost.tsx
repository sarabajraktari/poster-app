import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const AddPost = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <>
      <h1>Create a post</h1>
      <div className="flex flex-col m-5 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl  dark:bg-gray-800 ">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="mb-2">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              {...register("title", {
                required: "This is required",
                minLength: { value: 4, message: "Min length is 4" },
              })}
              type="text"
              id="base-input"
              className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Content
            </label>
            <textarea
              {...register("content")}
              id="message"
              rows={2}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your content..."
            ></textarea>
          </div>
          <div className="mb-2">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image URL
            </label>
            <input
              {...register("image")}
              type="url"
              id="image"
              className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <div className="flex space-x-2 justify-center">
              <button
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Click me
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
