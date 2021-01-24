import { css } from "sosse/iso";
import { Icon } from "feather-icons/dist/icons/smile.svg";
import { Icon as Pattern } from "../assets/patternpad3.svg";
import { Icon as Pattern2 } from "../assets/patternpad4.svg";
import png from "../assets/shane-rounce-1ZZ96uESRJQ-unsplash.png";

/**
 * @param {import("fastify").FastifyInstance} app
 */
export default (app, opts, done) => {
  app.get("/", (_, res) => {
    return res.render(
      () => (
        <>
          <div class="relative z-10 bg-gradient-to-b pb-28 from-blue-500 to-indigo-600 bg-cover shadow-inner">
            <img
              class="top-0 left-0 absolute object-contain w-full h-full opacity-5"
              src={png}
              loading="lazy"
            />
            <div
              class={
                "relative bg-gradient-to-b from-blueGray-900 to-transparent " +
                css({
                  "--tw-gradient-from": "#0006",
                })
              }
            >
              <div class="scroll-top mx-auto px-5 lg:px-20 lg:w-3/4 p-12 pb-32 text-white text-right text-2xl">
                Docs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Github
              </div>
            </div>
            <div class="relative mx-auto px-5 lg:px-20 pt-14 lg:pt-24 lg:w-3/4 text-white">
              <h1 class="text-5xl tracking-wider ml-1 mb-9 font-bold">
                Sosse{" "}
                <span
                  class={
                    "inline-block ml-6 text-8xl select-none" +
                    css({
                      filter: "drop-shadow(4px 4px 2px #0003)",
                    })
                  }
                >
                  🥣
                </span>
              </h1>
              <span class="scroll-lg-opacity inline-block text-8xl tracking-tighter font-light">
                Composable toolkit for full-stack node web servers with Preact
              </span>
            </div>
          </div>

          <div class="absolute z-20 mx-auto px-5 lg:px-20 lg:w-3/4 text-right transform -translate-y-1/2">
            <button class="cursor-pointer select-none text-4xl px-7 py-5 tracking-tighter rounded shadow-lg bg-lightBlue-600 border-t border-lightBlue-400 hover:bg-pink-700 hover:border-violet-400 text-white inline-block">
              Getting Started
            </button>
          </div>

          <div class="scroll-xl absolute w-full opacity-20 text-9xl">
            <Pattern width="50%" height="25%" />
          </div>

          <div class="scroll-lg-opacity font-serif relative mx-auto w-2/4 mt-44 text-4xl leading-snug text-justify tracking-tight font-semibold text-blueGray-700">
            Cupidatat sint est laborum duis exercitation sunt sint elit. Ea non
            aliquip pariatur eu cupidatat. Veniam id est amet est fugiat. Tempor
            velit dolore consectetur eu incididunt consectetur veniam amet
            deserunt. Deserunt dolor mollit id ad in esse veniam sit amet sit
            consectetur quis.
          </div>

          <div class="relative z-10 flex flex-wrap mx-auto w-5/6 mt-36 justify-between">
            <div class="w-full mb-10">
              <h2 class="scroll-xs text-blueGray-700 text-2xl font-semibold tracking-wide">
                Features
              </h2>
            </div>
            <div class="w-1/5 h-80 p-8 bg-indigo-700 text-indigo-100 shadow-2xl">
              Do commodo esse in elit excepteur enim occaecat irure.
            </div>
            <div class="w-1/5 h-80 p-8 bg-indigo-700 text-indigo-100 shadow-2xl">
              Incididunt tempor Lorem excepteur sunt eiusmod incididunt commodo.
            </div>
            <div class="w-1/5 h-80 p-8 bg-indigo-700 text-indigo-100 shadow-2xl">
              Veniam ea sunt tempor adipisicing ea duis tempor do irure
              reprehenderit mollit do.
            </div>
            <div class="w-1/5 h-80 p-8 bg-indigo-700 text-indigo-100 shadow-2xl">
              Aliqua exercitation nulla commodo anim excepteur nostrud tempor
              proident ipsum velit eu do in adipisicing.
            </div>
          </div>

          <div class="scroll-xl absolute w-full opacity-20 text-9xl flex justify-end">
            <Pattern2 width="50%" height="25%" />
          </div>

          <div class="relative z-10 flex flex-wrap mx-auto w-5/6 mt-36 justify-between">
            <div class="w-full mb-10">
              <h2 class="scroll-xs text-blueGray-700 text-2xl font-semibold tracking-wide">
                Intro Kit includes
              </h2>
            </div>
            <div class="w-1/5 h-80 p-8 bg-teal-700 text-teal-50 shadow-2xl">
              Anim labore eiusmod laborum excepteur irure.
            </div>
            <div class="w-1/5 h-80 p-8 bg-teal-700 text-teal-50 shadow-2xl">
              Officia sint magna duis non amet minim labore dolore cupidatat
              duis consequat.
            </div>
            <div class="w-1/5 h-80 p-8 bg-teal-700 text-teal-50 shadow-2xl">
              Esse ullamco consequat aliquip qui officia in elit ut.
            </div>
            <div class="w-1/5 h-80 p-8 bg-teal-700 text-teal-50 shadow-2xl">
              Ex elit in cupidatat sit ullamco consectetur nostrud ad.
            </div>
          </div>

          <div class="relative mt-36 py-36 text-center bg-gray-100 text-teal-700">
            <span class="inline-block scroll-zoom">
              Anim eiusmod deserunt cillum veniam officia do occaecat.
            </span>
          </div>
        </>
      ),
      { title: "Sosse" }
    );
  });

  done();
};
