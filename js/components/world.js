import { create_yabbi } from "../crabs";
import { holePositions } from "../holes";

AFRAME.registerComponent("world", {
  schema: {},
  init: function () {
    this.time = 0;
    console.log("world");
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
  tick: function (time, timeDelta) {},
});
