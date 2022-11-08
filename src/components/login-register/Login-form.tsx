import { AuthContext } from "context/AuthContext";
import { UserProps } from "interfaces/User.props";
import { ReactElement, useContext } from "react";
import { useForm } from "react-hook-form";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export const LoginForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>();

  const value = useContext(AuthContext);

  const onLogin = (data: Partial<UserProps>) => {
    value.login({
      email: data.email || "",
      password: data.password || "",
      id: data.id || "",
    });
  };
  return (
    <>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                aria-hidden
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit(onLogin)}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Sign in with</p>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    {/* <!-- Facebook --> */}
                    <BsFacebook className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    {/* <!-- Twitter --> */}
                    <BsTwitter className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    {/* <!-- Linkedin --> */}
                    <BsLinkedin className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <div className="text-red-600">Email is empty</div>
                  )}
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <div className="text-red-600">Password is empty</div>
                  )}
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-gray-800">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-cyan-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-800 hover:shadow-lg focus:bg-cyan-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-md font-semibold mt-2 pt-1 mb-0 ">
                    Don't have an account?
                    <label className="text-cyan-700 text-md hover:text-cyan-800 focus:text-cyan-800 transition duration-200 ease-in-out">
                      <Link to="/register"> Register</Link>
                    </label>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
