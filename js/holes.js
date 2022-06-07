export const createPosition = (x, y, z) => ({
  x,
  y,
  z,
});

export const holePositions = [
  createPosition(1, 0, 0.5),
  createPosition(0, 0, 0.5),
  createPosition(-1, 0, 0.5),
  createPosition(-1, 0, -0.5),
  createPosition(0, 0, -0.5),
  createPosition(1, 0, -0.5),
];
