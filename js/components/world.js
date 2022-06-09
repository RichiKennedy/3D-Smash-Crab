import { create_yabbi } from "../crabs";
import { holePositions } from "../holes";

AFRAME.registerComponent("world", {
  schema: {
    gametime: {
      type: "float",
      default: 0.0,
    },
    timer_ongoing: {
      type: "boolean",
      default: true,
    },
  },
  init: function () {
    this.time = 0;

    // game lasts 1 0 seconds
    this.el.setAttribute("world", "gametime", 10.0 * 1000);

    // start the timer
    this.el.setAttribute("world", "timer_ongoing,", true);

    // add game reset listener
    this.el.addEventListener("click", this.reset_game.bind(this));

    this.spawn_crabs();
  },
  spawn_crabs: function () {
    var crabs = document.getElementById("crab-container");

    holePositions.map(function (position) {
      let crab = create_yabbi(position);
      crabs.appendChild(crab);
    });

    let hammer = document.getElementById("player-hammer");
    hammer.emit("crabs_spawned");
  },

  kill_all_crabs: function () {
    let crab_container = document.getElementById("crab-container");
    let crabs = document.querySelectorAll(".crab");

    crabs.forEach(function (crab) {
      crab_container.removeChild(crab);
    });
  },

  reset_game: function () {
    let { timer_ongoing } = this.el.getAttribute("world");
    if (timer_ongoing === false) {
      // kill the crabs
      this.kill_all_crabs();
      //   reset score
      AFRAME.scenes[0].emit("resetScore", {});
      // reset timer
      // game lasts 1 0 seconds
      this.el.setAttribute("world", "gametime", 10.0 * 1000);

      // start the timer
      this.el.setAttribute("world", "timer_ongoing,", true);
    }
  },
  show_win_text: function () {
    let win_text = document.getElementById("winning-text");
    let visible = win_text.getAttribute("visible");

    if (visible === false) {
      win_text.setAttribute("visible", true);
    }
  },
  hide_win_text: function () {
    let win_text = document.getElementById("winning-text");
    let visible = win_text.getAttribute("visible");

    if (visible === true) {
      win_text.setAttribute("visible", false);
    }
  },

  tick: function (time, timeDelta) {
    var crabs = document.querySelectorAll(".crab");

    // decrement the game timer
    let { gametime, timer_ongoing } = this.el.getAttribute("world");
    let updated_gametime = gametime - timeDelta;

    if (timer_ongoing) {
      if (Math.ceil(updated_gametime / 1000) >= 0) {
        this.el.setAttribute("world", "gametime", updated_gametime);
      } else {
        this.el.setAttribute("world", "timer_ongoing", false);
      }
    }

    if (crabs.length <= 0 && timer_ongoing) {
      this.time += timeDelta;

      if (this.time >= 1000) {
        this.time = 0;
        this.spawn_crabs();
      }
    }

    if (timer_ongoing == true) {
      this.hide_win_text();
    }

    if (timer_ongoing === false) {
      this.kill_all_crabs();
      this.show_win_text();
    }
  },
});
