import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import FoodBg from "../assets/FoodBg.jpg";
import RnadomFood from "../components/RnadomFood";
import CookingTips from "../components/CookingTips";

function Home() {
  const cookingTips = [
    "Add a pinch of salt to boiling water before cooking pasta to enhance its flavor.",
    "Use lemon juice or vinegar to prevent sliced fruits like apples and bananas from browning.",
    "To easily peel garlic cloves, crush them lightly with the flat side of a knife before peeling.",
    "Keep a bowl of ice water nearby when peeling hard-boiled eggs to make the shells easier to remove.",
    "To make fluffy pancakes, avoid overmixing the batter. A few lumps are okay!",
    "Sprinkle a little sugar over caramelized onions to enhance their sweetness.",
    "Store fresh herbs like parsley and cilantro in a glass of water in the refrigerator to keep them fresh longer.",
    "Use parchment paper when baking cookies to prevent them from sticking to the baking sheet.",
    "Add a dash of cinnamon to coffee grounds before brewing for a flavorful twist.",
    "To revive stale bread, sprinkle it with water and reheat it in the oven for a few minutes.",
  ];

  console.log(cookingTips);

  return (
    <>
      <Container>
        <div className="">
          {/* section 1 */}
          <section>
            <RnadomFood />
          </section>
        </div>
      </Container>
      <section>
        <div class="relative bg-cover bg-center bg-black  bg-opacity-40 overflow-hidden text-white py-16 px-4">
          <div className="w-full h-full bg-red-700 absolute top-0 left-0 -z-10 ">
            <img
              src={FoodBg}
              alt="bg"
              className=" home-bg-image duration-300 w-full max-w-full object-cover object-center absolute bottom-[-12%]"
            />
          </div>
          <div class="max-w-3xl mx-auto text-center text-orange-400 ">
            <h2 class="text-4xl font-bold mb-4 text-shadow-lg">
              Embark on a Culinary Romance
            </h2>
            <p class="mb-8">
              Food isn't just about filling your belly; it's a passionate affair
              that ignites the senses and kindles the flames of love. From the
              sizzle of a hot pan to the tantalizing aroma of spices, each dish
              is a love letter written with flavors.
            </p>
            <p class="mb-8">
              Let's dance in the kitchen, twirling with excitement as we explore
              new recipes and flavors. With every chop, stir, and sprinkle,
              we're crafting a symphony of taste that sings of romance and
              adventure.
            </p>
            <p class="mb-8">
              Join us on this gastronomic journey, where every bite is a kiss
              and every meal is a celebration of love. Let's create culinary
              magic together, turning simple ingredients into unforgettable
              memories that linger on the lips and in the heart.
            </p>
          </div>
        </div>
      </section>
      <Container>
        <section>
          <CookingTips cookingTips={cookingTips} />
        </section>
      </Container>
    </>
  );
}

export default Home;
