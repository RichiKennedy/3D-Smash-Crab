AFRAME.registerComponent("hammer-logic", {
  init: function () {
    let crabs = [];

    this.el.addEventListener(
      "crabs_spawned",
      function () {
        crabs = this.get_crabs();
      }.bind(this)
    );
    this.el.addEventListener("animationstart", function () {
      crabs.map(
        function (crab) {
          crab.emit("dontdie");
        }.bind(this)
      );
    });
    this.el.addEventListener("animationend", function () {
      crabs.map(
        function (crab) {
          crab.emit("candie");
        }.bind(this)
      );
    });
  },
  get_crabs: function () {
    crabs = Array.prototype.slice.call(document.querySelectorAll(".crab"));

    return crabs;
  },
});
// this.whackableMoles = Array.from(document.querySelectorAll('.mole'));
