import { ReactElement } from "react";
import { PostsProps } from "@interfaces";
import { Dropdown } from "@components";

export const PostItem = ({
  id,
  image,
  title,
  description,
}: PostsProps): ReactElement => {
  return (
    <div className="relative flex flex-col mx-auto m-5 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      {image ? (
        <img
          className="object-cover w-full h-96 rounded-lg md:h-auto md:w-48  md:rounded-l-lg"
          src={image}
          alt=""
        />
      ) : (
        <img
          className="object-cover w-full h-96 rounded-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        />
      )}

      <div className="w-full h-full justify-between p-5 leading-normal">
        <div className="flex justify-between relative">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <Dropdown id={id} />
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
