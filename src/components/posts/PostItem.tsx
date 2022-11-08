import { PostsProps } from "interfaces/Posts.props";
import { ReactElement } from "react";
import { SlOptionsVertical } from "react-icons/sl";

export const PostItem = ({
  image,
  title,
  content,
}: PostsProps): ReactElement => {
  return (
    <div className="flex flex-col m-5 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <button className="relative">
          <SlOptionsVertical className="absolute top-0 right-0 pointer" />
        </button>

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
    </div>
  );
};
