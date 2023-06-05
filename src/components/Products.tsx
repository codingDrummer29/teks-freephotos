import _ from "lodash";

// constants
import { LocalStrings } from "../data/language";

// files
import CardTemplate from "../assets/images/card.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Test name of a sample product 1 Test name of a sample product 1",
      price: "0.39",
      imagepath: CardTemplate,
      isactive: true,
    },
    {
      id: 2,
      name: "Test name of a sample product 2 Test name of a sample product 2",
      price: "0.39",
      imagepath: CardTemplate,
      isactive: true,
    },
    {
      id: 3,
      name: "Test name of a sample product 3 Test name of a sample product 3",
      price: "0.39",
      imagepath: CardTemplate,
      isactive: true,
    },
    {
      id: 4,
      name: "Test name of a sample product 4 Test name of a sample product 4",
      price: "0.39",
      imagepath: CardTemplate,
      isactive: true,
    },
    {
      id: 5,
      name: "Test name of a sample product 5 Test name of a sample product 5",
      price: "0.39",
      imagepath: CardTemplate,
      isactive: true,
    },
  ];

  return (
    <>
      {/* ----- Product type section ----- */}
      <article className="flex text-left text-lg font-semibold">
        <span>Birthday Cards</span>
      </article>

      {/* ----- Item cards ----- */}
      <section className="grid grid-cols-2 md:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4 1.5xl:grid-cols-5 2xl:grid-cols-6 gap-6 lg:gap-x-7 lg:gap-y-4 xl:gap-x-11 xl:gap-y-8">
        {_.map(products, (product, index) => {
          return (
            <>
              <div
                key={`${index}_${product.id}`}
                className="col-span-1 flex flex-col items-center gap-3 w-full h-80 bg-card_bg text-xs pt-4"
              >
                {/* --- image --- */}
                <div className="flex justify-center aspect-square bg-white px-4">
                  <div className="w-card_img aspect-potrait">
                    <img
                      className="w-card_img aspect-potrait"
                      src={product.imagepath}
                      alt={`${product.name} preview image goes here`}
                    />
                  </div>
                </div>

                {/* --- product name --- */}
                <div className="w-full h-8 px-4">{product?.name}</div>

                {/* --- Price --- */}
                <div className="w-full font-medium px-4">
                  {LocalStrings.label_price}: ${product.price} /
                  {LocalStrings.phrase_peice}
                </div>

                {/* --- Separate line --- */}
                <hr className="w-full border-card_hr" />

                {/* --- Deactivate | Edit --- */}
                <div className="w-full flex justify-between px-4 pb-4">
                  {/* - Deactivate - */}
                  <div className="font-light">
                    <button>{LocalStrings.button_deactivate}</button>
                  </div>

                  {/* - Edit - */}
                  <div className="">
                    <button>{LocalStrings.button_edit}</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Products;
