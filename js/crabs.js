export const create_yabbi = function (position) {
  var yabbi = document.createElement("a-entity");

  yabbi.setAttribute("mixin", "crab");
  yabbi.setAttribute("position", position);

  yabbi.setAttribute("scale", {
    x: 0.3,
    y: 0.3,
    z: 0.3,
  });
  yabbi.setAttribute("rotation", {
    x: 180,
    y: 0,
    z: 180,
  });

  yabbi.classList.add("crab");
  return yabbi;
};
