AFRAME.registerComponent("crab-logic", {
  init: function () {
    this.time = 0;
    this.randomInterval = Math.floor(Math.random() * Math.floor(2000)) + 2000;
    this.can_die = true;

    this.el.addEventListener(
      "switch",
      function () {
        let visible = this.el.getAttribute("visible");
        this.el.setAttribute("visible", !visible);
      }.bind(this)
    );

    this.el.addEventListener(
      "candie",
      function () {
        this.can_die = true;
        console.log("clicked");
      }.bind(this)
    );
    this.el.addEventListener(
      "dontdie",
      function () {
        this.can_die = false;
      }.bind(this)
    );

    var hammer_hit = function () {
      let crabs = document.getElementById("crab-container");

      var hit = document.getElementById("hit");

      if (this.can_die === true) {
        crabs.removeChild(this.el);

        AFRAME.scenes[0].emit("increaseScore", { points: 1 });
        console.log("die");

        let hammer = document.getElementById("player-hammer");
        hammer.emit("rotate");
        hit.components.sound.playSound();
      }
    }.bind(this);
    this.el.addEventListener("mousedown", hammer_hit);
    this.el.addEventListener("click", hammer_hit);
  },

  tick: function (time, timeDelta) {
    this.time += timeDelta;

    if (this.time >= this.randomInterval) {
      this.el.emit("switch");
      this.time = 0;
    }
  },
});
