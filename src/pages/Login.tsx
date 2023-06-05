import { useRef } from "react";
import { useNavigate } from "react-router";
import _ from "lodash";

// constants
import { LocalStrings } from "../data/language";
import {
  DEVELOPMENT_TYPE,
  LOGIN_EMAIL,
  LOGIN_PASSWORD,
} from "../data/constant";

// actions
import { mainLogin } from "../store/features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginPopulate = () => {
    if (emailRef.current) emailRef.current.value = LOGIN_EMAIL;
    if (pwdRef.current) pwdRef.current.value = LOGIN_PASSWORD;
  };

  const handleForgotPassword = () => {
    //
  };

  const handleLogin = () => {
    if (
      _.isEmpty(emailRef.current?.value) ||
      _.isEmpty(pwdRef.current?.value)
    ) {
      alert("Kindly provide valid credentials");
    } else {
      dispatch(
        mainLogin({
          email: emailRef?.current?.value ?? "",
          password: pwdRef.current?.value ?? "",
          callback: (response: { success: boolean }) => {
            if (response.success) {
              Navigate("/");
            } else {
              alert("Invalid credentials");
            }
          },
        })
      );
    }
  };

  return (
    <>
      <div className="flex items-center min-h-nav_minus_screen bg-gray-50">
        <div className="flex-1 h-full max-w-4xl- max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2- w-full">
              <div className="w-full">
                {/* - Header - */}
                <h1 className="mb-4 text-xl font-semibold text-gray-700">
                  {LocalStrings.phrase_login_with_email}
                </h1>

                {/* - Input - */}
                <form>
                  <label className="block text-sm">
                    <span className="text-gray-700">
                      {LocalStrings.label_username}
                    </span>
                    <input
                      ref={emailRef}
                      className="block w-full mt-1 text-sm focus:border-gray-300 focus:outline-none focus:shadow-outline-purple form-input"
                      placeholder={LocalStrings.ph_username}
                    />
                  </label>
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700">
                      {LocalStrings.label_password}
                    </span>
                    <input
                      ref={pwdRef}
                      className="block w-full mt-1 text-sm focus:border-gray-300 focus:outline-none focus:shadow-outline-purple form-input"
                      placeholder={LocalStrings.ph_password}
                      type="password"
                    />
                  </label>
                  <button
                    type="button"
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-gray-600 hover:bg-gray-600 focus:outline-none focus:shadow-outline-purple"
                    onClick={handleLogin}
                  >
                    {LocalStrings.button_login}
                  </button>
                </form>

                {/* - Dev-Populate | Forgot password -  */}
                <div
                  className={`flex ${
                    DEVELOPMENT_TYPE === "DEV"
                      ? "justify-between"
                      : "justify-end"
                  } mt-4 text-sm font-medium text-gray-700`}
                  // href="./forgot-password.html"
                >
                  {/* Populate */}
                  <div
                    className={`${
                      DEVELOPMENT_TYPE === "DEV" ? "block" : "hidden"
                    } cursor-pointer`}
                    onClick={handleLoginPopulate}
                  >
                    Populate
                  </div>

                  {/* Forgot password */}
                  <div className="">
                    <span
                      className="hover:underline cursor-pointer"
                      onClick={handleForgotPassword}
                    >
                      {LocalStrings.phrase_reset_password}
                    </span>
                  </div>
                </div>

                <hr className="my-8" />

                <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                  {LocalStrings.phrase_contact_for_designer_acc}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
