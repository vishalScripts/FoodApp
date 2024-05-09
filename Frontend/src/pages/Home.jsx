import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import FoodBg from "../assets/FoodBg.jpg";
import RnadomFood from "../components/RnadomFood";

function Home() {
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
            sizzle of a hot pan to the tantalizing aroma of spices, each dish is
            a love letter written with flavors.
          </p>
          <p class="mb-8">
            Let's dance in the kitchen, twirling with excitement as we explore
            new recipes and flavors. With every chop, stir, and sprinkle, we're
            crafting a symphony of taste that sings of romance and adventure.
          </p>
          <p class="mb-8">
            Join us on this gastronomic journey, where every bite is a kiss and
            every meal is a celebration of love. Let's create culinary magic
            together, turning simple ingredients into unforgettable memories
            that linger on the lips and in the heart.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
