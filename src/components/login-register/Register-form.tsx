import { UserValidatorSchema } from "@validators";
import { createUser } from "api/user";
import { UserProps } from "interfaces/User.props";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";

export const RegisterForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: joiResolver(UserValidatorSchema()),
  });
  const navigate = useNavigate();

  const onSubmit = ({ username, email, password }: Partial<UserProps>) => {
    // alert(JSON.stringify(data));
    createUser<Partial<UserProps>>({ username, email, password });
    navigate("/posts");
  };

  return (
    <>
      {/* <!-- component --> */}
      <div className="bg-gradient-to-r from-cyan-700 to-blue-500 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded-xl shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center text-cyan-700">Sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email input */}
              <div className="mb-6">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
                {errors.email && (
                  <div className="text-red-600">{errors.email.message}</div>
                )}
              </div>

              {/* <!-- Username input --> */}
              <div className="mb-6">
                <input
                  {...register("username", { required: true })}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Username"
                />
                {errors.username && (
                  <div className="text-red-600">{errors.username.message}</div>
                )}
              </div>

              {/*Password input */}
              <div className="mb-6">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
                {errors.password && (
                  <label className="text-red-600">
                    {errors.password.message}
                  </label>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-center py-3 bg-cyan-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-800 hover:shadow-lg focus:bg-cyan-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="text-white mt-6 text-lg">
            Already have an account?
            <label className="no-underline border-b border-blue text-white">
              <Link to="/"> Log in</Link>.
            </label>
          </div>
        </div>
      </div>
    </>
  );
};