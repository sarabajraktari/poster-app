import { ReactElement } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

export const Footer = (): ReactElement => {
  return (
    <footer className="text-center bg-cyan-700 text-white">
      <div className="container px-6 pt-6">
        <div className="flex justify-center mb-6">
          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <BsFacebook className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <BsTwitter className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <BsGoogle className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <BsInstagram className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <BsLinkedin className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <BsGithub className="w-4 h-full mx-auto" />
          </a>
        </div>
      </div>

      <div className="text-center p-4">© 2021 Copyright: Poster </div>
    </footer>
  );
};
