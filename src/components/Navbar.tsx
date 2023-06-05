import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Constants
import { LocalStrings } from "../data/language";

// files
import SettingsIcon from "../assets/icons/gear.png";
import { mainLogout } from "../store/features/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogout = () => {
    dispatch(
      mainLogout({
        callback: (response: { success: number }) => {
          if (response.success) Navigate("/login");
        },
      })
    );
  };

  return (
    <header className="z-10 sticky py-4 bg-offwhite shadow-md">
      <div className="container- flex items-center justify-between h-full px-6 mx-auto">
        {/* --- Hi user section --- */}
        <div className={``}>
          <span className="">{LocalStrings.phrase_hi}</span>
        </div>

        {/* --- Heading section --- */}
        <div className="">
          <NavLink to={"/"}>Free Pohotos</NavLink>
        </div>

        {/* --- Settings | Logout --- */}
        <div className="flex gap-4">
          <NavLink to={"/profile"}>
            <img
              className="h-6 aspect-square"
              src={SettingsIcon}
              alt={LocalStrings.img_alt_profile}
            />
          </NavLink>
          <div className="cursor-pointer" onClick={handleLogout}>
            {LocalStrings.button_logout}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
