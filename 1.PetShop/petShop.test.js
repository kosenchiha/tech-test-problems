const findPetsForSale = require("./petShop");

test("test", () => {
  const allPets = [
    { name: "Tom", species: "cat", sold: false },
    { name: "Gromit", species: "dog", sold: true },
    { name: "Daffy", species: "duck", sold: false },
    { name: "Harry", species: "cat", sold: false },
    { name: "Monica", species: "duck", sold: true }
  ];
  const petsForSale = findPetsForSale(allPets);
  expect(petsForSale).toEqual(["cat", "duck", "cat"]);
});
