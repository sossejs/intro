import { css } from "sosse/iso";
import png from "../assets/charles-deluvio-ieEv01cucy0-unsplash.jpg";

export const NotFound = () => (
  <div class="p-4 xl:p-20 w-full h-full">
    <div
      class={
        "relative flex items-center md:items-end justify-center w-full h-full bg-center bg-cover bg-no-repeat " +
        css({
          backgroundImage: `url(${png})`,
          textShadow: "0px 0px 25px #0009",
        })
      }
    >
      <div class="text-yellow-400 md:mb-28 flex flex-col">
        <span class="text-9xl tracking-tighter font-extralight leading-snug">
          404
        </span>
        <span class="text-3xl tracking-widest font-black">Page not found</span>
        <span class="">
          Go back{" "}
          <a class="text-blue-400" href="/">
            home
          </a>
        </span>
      </div>
    </div>
  </div>
);
