// constants
import { LocalStrings } from "../data/language";

// components
import Products from "../components/Products";

// files
import DownArrow from "../assets/icons/down-arrow.png";
import { useNavigate } from "react-router-dom";
import { getLocalSession } from "../store/features/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  // useEffect(() => {}, [])
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getLocalSession({
        callback: (response) => {
          if (!response.isLoggedIn) Navigate("/login");
        },
      })
    );
  }, [Navigate, dispatch]);

  return (
    <>
      {/* ----- Top add product section ----- */}
      <section className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 px-28 py-12">
        {/* --- Select product label --- */}
        <div className="col-span-1 flex justify-start items-center text-2xl font-medium">
          <div>{LocalStrings.label_select_product}</div>
        </div>

        {/* --- Dropdown --- */}
        <div className="col-span-2 lg:col-span-3 xl:col-span-3 ml-4 border border-gray-400 rounded p-4 flex justify-between w-full text-xl">
          <div className="">
            {LocalStrings.label_card_designer}
            {" - "}
            {LocalStrings.dropdown_options_birthday_cards}
          </div>
          <div className="">
            <img
              className="h-6 aspect-square"
              src={DownArrow}
              alt={LocalStrings.img_alt_dropdown}
            />
          </div>
        </div>

        {/* --- Add product button --- */}
        <div className="col-span-1 xl:col-span-2 flex justify-end items-center">
          <button className="text-white rounded-md px-8 py-2 text-base bg-primary w-52 shadow-md shadow-slate-400">
            <div className="">
              <span>{LocalStrings.button_add_product}</span>
            </div>
          </button>
        </div>
      </section>

      {/* ----- Section devider ----- */}
      <hr className="border-border" />

      {/* ----- Product list section ----- */}
      <main className="flex flex-col gap-8 px-28 py-12">
        {/* --- Product count --- */}
        <div className="text-3xl ">
          {LocalStrings.label_products}({24})
        </div>

        <Products />
      </main>
    </>
  );
};

export default Home;
