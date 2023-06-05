import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Constants
import { LocalStrings } from "../data/language";
import { UserStateData } from "../@types/data-models";

// actions
import {
  getLocalSession,
  getUserDetails,
  mainLogout,
} from "../store/features/userSlice";

// files
import SettingsIcon from "../assets/icons/gear.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(false);
  const userDetails = useSelector(getUserDetails);

  useEffect(() => {
    dispatch(
      getLocalSession({
        callback: (response: UserStateData) => {
          if (response.isLoggedIn) setUserIsLoggedIn(true);
          else setUserIsLoggedIn(false);
        },
      })
    );
  }, [dispatch, userDetails]);

  const handleLogout = () => {
    dispatch(
      mainLogout({
        callback: (response: { success: boolean }) => {
          if (response.success) Navigate("/login");
        },
      })
    );
  };

  return (
    <header className="z-10 sticky py-4 bg-offwhite shadow-md">
      <div className="grid grid-cols-3 align-baseline h-full px-6 mx-auto">
        {/* --- Hi user section --- */}
        <div className="col-span-1 flex justify-start w-full h-full items-center">
          <span className={`${userIsLoggedIn ? "block" : "hidden"}`}>
            {LocalStrings.phrase_hi} {userDetails?.firstname}
          </span>
        </div>

        {/* --- Heading section --- */}
        <div className="col-span-1 flex justify-center w-full h-full items-center">
          <NavLink to={"/"}>Free Pohotos</NavLink>
        </div>

        {/* --- Settings | Logout --- */}
        <div className="col-span-1 flex justify-end w-full h-full items-center gap-2">
          <NavLink
            className={`${userIsLoggedIn ? "block" : "hidden"}`}
            to={"/profile"}
          >
            <img
              className="h-6 aspect-square"
              src={SettingsIcon}
              alt={LocalStrings.img_alt_profile}
            />
          </NavLink>
          <div
            className={`${userIsLoggedIn ? "block" : "hidden"} cursor-pointer`}
            onClick={handleLogout}
          >
            {LocalStrings.button_logout}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
