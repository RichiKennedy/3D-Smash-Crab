AFRAME.registerComponent("hammer-logic", {
  init: function () {
    let crabs = [];

    this.el.addEventListener("crabs_appear", function () {
      crabs = Array.prototype.slice.call(document.querySelectorAll(".crab"));
    });
    this.el.addEventListener("animationStart", function () {
      crabs.map(function (crab) {
        crab.emit("dontDie");
      });
    });
    this.el.addEventListener("animationEnd", function () {
      crabs.map(function (crab) {
        crab.emit("die");
      });
    });
  },
});
