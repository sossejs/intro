import "../iso";
import { inject } from "sosse/iso";
import "./assets/styles.css";
import { scroll } from "./lib/scroll";

import {
  inOutTime,
  time,
  timeToHalf,
  timeToCenterHalf,
  easeBounceOut,
} from "smolscroll/time";

inject();

const { addWithSelector } = scroll;

const translateFromTime = function (el, time) {
  el.el.style.transform = `translateY(${time}%)`;
};

addWithSelector(".scroll-top", {
  transform: (i, screen) => {
    const t = time(true, i, screen);

    translateFromTime(i, t * 300);
    i.el.style.opacity = 1 - t * t * t * 70;
  },
});

addWithSelector(".scroll-lg-opacity", {
  transform: (i, screen) => {
    const t = timeToHalf(true, i, screen, 0, 300);

    translateFromTime(i, t * 30);
    i.el.style.opacity = 1 - t;
  },
});

addWithSelector(".scroll-xl", {
  transform: (i, screen) => {
    const t = time(true, i, screen, screen.height / 2);

    translateFromTime(i, t * 10 - 30);
    i.el.style.opacity = 0.3 - inOutTime(t) * 0.2;
  },
});

addWithSelector(".scroll-xs", {
  transform: (i, screen) => {
    const t = time(true, i, screen, screen.height + 100);

    translateFromTime(i, t * 160 - 100);
  },
});

addWithSelector(".scroll-zoom", {
  transform: (i, screen) => {
    let t = timeToCenterHalf(
      true,
      i,
      screen,
      -screen.height / 2,
      screen.height
    );

    t = inOutTime(t);
    t = easeBounceOut(t);

    i.el.style.opacity = t;
    i.el.style.transform = `scale(${t * 4}, ${t * 4})`;
  },
});
