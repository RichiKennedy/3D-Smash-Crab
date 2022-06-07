AFRAME.registerComponent("hammer-logic", {
  init: function () {
    let crabs = [];
    console.log("hammer");
    this.el.addEventListener(
      "crabs_spawned",
      function () {
        crabs = this.get_crabs();
      }.bind(this)
    );
    this.el.addEventListener("animationstart", function () {
      crabs.map(
        function (crab) {
          crab.emit("wontDie");
        }.bind(this)
      );
    });
    this.el.addEventListener("animationend", function () {
      crabs.map(
        function (crab) {
          crab.emit("canDie");
        }.bind(this)
      );
    });
  },
  get_crabs: function () {
    crabs = Array.prototype.slice.call(document.querySelectorAll(".crab"));
    console.log(crabs);
    return crabs;
  },
});
// this.whackableMoles = Array.from(document.querySelectorAll('.mole'));
