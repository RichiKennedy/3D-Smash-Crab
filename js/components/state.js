import "aframe-state-component";
AFRAME.registerState({
  initialState: {
    score: 2,
  },

  handlers: {
    decreaseScore: function (state, action) {
      state.score -= action.points;
    },

    increaseScore: function (state, action) {
      state.score += action.points;
    },
  },
});
