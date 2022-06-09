AFRAME.registerComponent("timer-view", {
  init: function () {
    console.log("timer-view");
    this.el.setAttribute("text", "value", "start game");
  },

  tick: function (time, timeDelta) {
    let world = document.querySelector("a-scene");
    let { gametime, timer_ongoing } = world.getAttribute("world");

    let pretty_time = Math.ceil(gametime / 1000);

    if (timer_ongoing) {
      this.el.setAttribute("text", "value", pretty_time);
    } else {
      this.el.setAttribute("text", "value", "Timer ended");
    }
  },
});
