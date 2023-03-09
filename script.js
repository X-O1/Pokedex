const pokeDisplayContainer = document.querySelector(".poke-display");
const scanDisplayContainer = document.querySelector(".scan-display");
const pokeDisplay = document.querySelector(".poke-display img");
const scanDisplay = document.querySelector(".scan-display img");
const statDisplay = document.getElementById("stat-display img");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const height = document.querySelector(".height .value");
const weight = document.querySelector(".weight .value");
const pokemonName = document.querySelector(".pokemonName .value");
const category = document.querySelector(".category .value");
const abilities = document.querySelector(".abilities .value");
const statValue = document.querySelector(".stat-value p");

const allPokemon = [];

class pokemon {
  constructor(pokemonName, height, weight, category, abilities) {
    this._pokemonName = pokemonName;
    this._height = height;
    this._weight = weight;
    this._category = category;
    this._abilities = abilities;
  }
  get pokemonName() {
    return `Name: ${this._pokemonName}`;
  }
  get height() {
    return `Height: ${this._height}`;
  }
  get weight() {
    return `Weight: ${this._weight}`;
  }
  get category() {
    return `Category: ${this._category}`;
  }
  get abilities() {
    return `Abilities: ${this._abilities}`;
  }
}

const createPokemon = (pokemonName, height, weight, category, abilities) => {
  const newPokemon = new pokemon(
    pokemonName,
    height,
    weight,
    category,
    abilities
  );
  allPokemon.push(newPokemon);
};
createPokemon("bulbasaur", '4"2', "132lbs", "seed", "beam");
createPokemon("ivysor", '45"2', "4132lbs", "life", "restore");
createPokemon("venesaur", '466"2', "5132lbs", "grass", "solarbeam");
createPokemon("charmander", '466"2', "5132lbs", "grass", "solarbeam");

let counter = 0;

pokeDisplay.src = "/images/pokeball.png";

const dPad = () => {
  switch (counter) {
    case 0:
      pokeDisplay.src = "/images/pokeball.png";
      break;
    case 1:
      pokeDisplay.src = "/images/pokemon/001.png";
      pokemonName.innerHTML = allPokemon[0].pokemonName;
      height.innerHTML = allPokemon[0].height;
      weight.innerHTML = allPokemon[0].weight;
      category.innerHTML = allPokemon[0].category;
      abilities.innerHTML = allPokemon[0].abilities;
      break;
    case 2:
      pokeDisplay.src = "/images/pokemon/002.png";
      pokemonName.innerHTML = allPokemon[1].pokemonName;
      height.innerHTML = allPokemon[1].height;
      weight.innerHTML = allPokemon[1].weight;
      category.innerHTML = allPokemon[1].category;
      abilities.innerHTML = allPokemon[1].abilities;
      break;
    case 3:
      pokeDisplay.src = "/images/pokemon/003.png";
      pokemonName.innerHTML = allPokemon[2].pokemonName;
      height.innerHTML = allPokemon[2].height;
      weight.innerHTML = allPokemon[2].weight;
      category.innerHTML = allPokemon[2].category;
      abilities.innerHTML = allPokemon[2].abilities;
      break;
    case 4:
      pokeDisplay.src = "/images/pokemon/004.png";
      pokemonName.innerHTML = allPokemon[3].pokemonName;
      height.innerHTML = allPokemon[3].height;
      weight.innerHTML = allPokemon[3].weight;
      category.innerHTML = allPokemon[3].category;
      abilities.innerHTML = allPokemon[3].abilities;
      break;
    case 5:
      pokeDisplay.src = "/images/pokemon/005.png";
      break;
    case 6:
      pokeDisplay.src = "/images/pokemon/006.png";
      break;
    case 7:
      pokeDisplay.src = "/images/pokemon/007.png";
      break;
    case 8:
      pokeDisplay.src = "/images/pokemon/008.png";
      break;
    case 9:
      pokeDisplay.src = "/images/pokemon/009.png";
      break;
    case 10:
      pokeDisplay.src = "/images/pokemon/010.png";
      break;
    case 11:
      pokeDisplay.src = "/images/pokemon/011.png";
      break;
    case 12:
      pokeDisplay.src = "/images/pokemon/012.png";
      break;
    case 13:
      pokeDisplay.src = "/images/pokemon/013.png";
      break;
    case 14:
      pokeDisplay.src = "/images/pokemon/014.png";
      break;
    case 15:
      pokeDisplay.src = "/images/pokemon/015.png";
      break;
    case 16:
      pokeDisplay.src = "/images/pokemon/016.png";
      break;
    case 17:
      pokeDisplay.src = "/images/pokemon/017.png";
      break;
    case 18:
      pokeDisplay.src = "/images/pokemon/018.png";
      break;
    case 19:
      pokeDisplay.src = "/images/pokemon/019.png";
      break;
    case 20:
      pokeDisplay.src = "/images/pokemon/020.png";
      break;
    case 21:
      pokeDisplay.src = "/images/pokemon/021.png";
      break;
    case 22:
      pokeDisplay.src = "/images/pokemon/022.png";
      break;
    case 23:
      pokeDisplay.src = "/images/pokemon/023.png";
      break;
    case 24:
      pokeDisplay.src = "/images/pokemon/024.png";
      break;
    case 25:
      pokeDisplay.src = "/images/pokemon/025.png";
      break;
    case 26:
      pokeDisplay.src = "/images/pokemon/026.png";
      break;
    case 27:
      pokeDisplay.src = "/images/pokemon/027.png";
      break;
    case 28:
      pokeDisplay.src = "/images/pokemon/028.png";
      break;
    case 29:
      pokeDisplay.src = "/images/pokemon/029.png";
      break;
    case 30:
      pokeDisplay.src = "/images/pokemon/030.png";
      break;
    case 31:
      pokeDisplay.src = "/images/pokemon/031.png";
      break;
    case 32:
      pokeDisplay.src = "/images/pokemon/032.png";
      break;
    case 33:
      pokeDisplay.src = "/images/pokemon/033.png";
      break;
    case 34:
      pokeDisplay.src = "/images/pokemon/034.png";
      break;
    case 35:
      pokeDisplay.src = "/images/pokemon/035.png";
      break;
    case 36:
      pokeDisplay.src = "/images/pokemon/036.png";
      break;
    case 37:
      pokeDisplay.src = "/images/pokemon/037.png";
      break;
    case 38:
      pokeDisplay.src = "/images/pokemon/038.png";
      break;
    case 39:
      pokeDisplay.src = "/images/pokemon/039.png";
      break;
    case 40:
      pokeDisplay.src = "/images/pokemon/040.png";
      break;
    case 41:
      pokeDisplay.src = "/images/pokemon/041.png";
      break;
    case 42:
      pokeDisplay.src = "/images/pokemon/042.png";
      break;
    case 43:
      pokeDisplay.src = "/images/pokemon/043.png";
      break;
    case 44:
      pokeDisplay.src = "/images/pokemon/044.png";
      break;
    case 45:
      pokeDisplay.src = "/images/pokemon/045.png";
      break;
    case 46:
      pokeDisplay.src = "/images/pokemon/046.png";
      break;
    case 47:
      pokeDisplay.src = "/images/pokemon/047.png";
      break;
    case 48:
      pokeDisplay.src = "/images/pokemon/048.png";
      break;
    case 49:
      pokeDisplay.src = "/images/pokemon/049.png";
      break;
    case 50:
      pokeDisplay.src = "/images/pokemon/050.png";
      break;
    case 51:
      pokeDisplay.src = "/images/pokemon/051.png";
      break;
    case 52:
      pokeDisplay.src = "/images/pokemon/052.png";
      break;
    case 53:
      pokeDisplay.src = "/images/pokemon/053.png";
      break;
    case 54:
      pokeDisplay.src = "/images/pokemon/054.png";
      break;
    case 55:
      pokeDisplay.src = "/images/pokemon/055.png";
      break;
    case 56:
      pokeDisplay.src = "/images/pokemon/056.png";
      break;
    case 57:
      pokeDisplay.src = "/images/pokemon/057.png";
      break;
    case 58:
      pokeDisplay.src = "/images/pokemon/058.png";
      break;
    case 59:
      pokeDisplay.src = "/images/pokemon/059.png";
      break;
    case 60:
      pokeDisplay.src = "/images/pokemon/060.png";
      break;
    case 61:
      pokeDisplay.src = "/images/pokemon/061.png";
      break;
    case 62:
      pokeDisplay.src = "/images/pokemon/062.png";
      break;
    case 63:
      pokeDisplay.src = "/images/pokemon/063.png";
      break;
    case 64:
      pokeDisplay.src = "/images/pokemon/064.png";
      break;
    case 65:
      pokeDisplay.src = "/images/pokemon/065.png";
      break;
    case 66:
      pokeDisplay.src = "/images/pokemon/066.png";
      break;
    case 67:
      pokeDisplay.src = "/images/pokemon/067.png";
      break;
    case 68:
      pokeDisplay.src = "/images/pokemon/068.png";
      break;
    case 69:
      pokeDisplay.src = "/images/pokemon/069.png";
      break;
    case 70:
      pokeDisplay.src = "/images/pokemon/070.png";
      break;
    case 71:
      pokeDisplay.src = "/images/pokemon/071.png";
      break;
    case 72:
      pokeDisplay.src = "/images/pokemon/072.png";
      break;
    case 73:
      pokeDisplay.src = "/images/pokemon/073.png";
      break;
    case 74:
      pokeDisplay.src = "/images/pokemon/074.png";
      break;
    case 75:
      pokeDisplay.src = "/images/pokemon/075.png";
      break;
    case 76:
      pokeDisplay.src = "/images/pokemon/076.png";
      break;
    case 77:
      pokeDisplay.src = "/images/pokemon/077.png";
      break;
    case 78:
      pokeDisplay.src = "/images/pokemon/078.png";
      break;
    case 79:
      pokeDisplay.src = "/images/pokemon/079.png";
      break;
    case 80:
      pokeDisplay.src = "/images/pokemon/080.png";
      break;
    case 81:
      pokeDisplay.src = "/images/pokemon/081.png";
      break;
    case 82:
      pokeDisplay.src = "/images/pokemon/082.png";
      break;
    case 83:
      pokeDisplay.src = "/images/pokemon/083.png";
      break;
    case 84:
      pokeDisplay.src = "/images/pokemon/084.png";
      break;
    case 85:
      pokeDisplay.src = "/images/pokemon/085.png";
      break;
    case 86:
      pokeDisplay.src = "/images/pokemon/086.png";
      break;
    case 87:
      pokeDisplay.src = "/images/pokemon/087.png";
      break;
    case 88:
      pokeDisplay.src = "/images/pokemon/088.png";
      break;
    case 89:
      pokeDisplay.src = "/images/pokemon/089.png";
      break;
    case 90:
      pokeDisplay.src = "/images/pokemon/090.png";
      break;
    case 91:
      pokeDisplay.src = "/images/pokemon/091.png";
      break;
    case 92:
      pokeDisplay.src = "/images/pokemon/092.png";
      break;
    case 93:
      pokeDisplay.src = "/images/pokemon/093.png";
      break;
    case 94:
      pokeDisplay.src = "/images/pokemon/094.png";
      break;
    case 95:
      pokeDisplay.src = "/images/pokemon/095.png";
      break;
    case 96:
      pokeDisplay.src = "/images/pokemon/096.png";
      break;
    case 97:
      pokeDisplay.src = "/images/pokemon/097.png";
      break;
    case 98:
      pokeDisplay.src = "/images/pokemon/098.png";
      break;
    case 99:
      pokeDisplay.src = "/images/pokemon/099.png";
      break;
    case 100:
      pokeDisplay.src = "/images/pokemon/100.png";
      break;
    case 101:
      pokeDisplay.src = "/images/pokemon/101.png";
      break;
    case 102:
      pokeDisplay.src = "/images/pokemon/102.png";
      break;
    case 103:
      pokeDisplay.src = "/images/pokemon/103.png";
      break;
    case 104:
      pokeDisplay.src = "/images/pokemon/104.png";
      break;
    case 105:
      pokeDisplay.src = "/images/pokemon/105.png";
      break;
    case 106:
      pokeDisplay.src = "/images/pokemon/106.png";
      break;
    case 107:
      pokeDisplay.src = "/images/pokemon/107.png";
      break;
    case 108:
      pokeDisplay.src = "/images/pokemon/108.png";
      break;
    case 109:
      pokeDisplay.src = "/images/pokemon/109.png";
      break;
    case 110:
      pokeDisplay.src = "/images/pokemon/110.png";
      break;
    case 111:
      pokeDisplay.src = "/images/pokemon/111.png";
      break;
    case 112:
      pokeDisplay.src = "/images/pokemon/112.png";
      break;
    case 113:
      pokeDisplay.src = "/images/pokemon/113.png";
      break;
    case 114:
      pokeDisplay.src = "/images/pokemon/114.png";
      break;
    case 115:
      pokeDisplay.src = "/images/pokemon/115.png";
      break;
    case 116:
      pokeDisplay.src = "/images/pokemon/116.png";
      break;
    case 117:
      pokeDisplay.src = "/images/pokemon/117.png";
      break;
    case 118:
      pokeDisplay.src = "/images/pokemon/118.png";
      break;
    case 119:
      pokeDisplay.src = "/images/pokemon/119.png";
      break;
    case 120:
      pokeDisplay.src = "/images/pokemon/120.png";
      break;
    case 121:
      pokeDisplay.src = "/images/pokemon/121.png";
      break;
    case 122:
      pokeDisplay.src = "/images/pokemon/122.png";
      break;
    case 123:
      pokeDisplay.src = "/images/pokemon/123.png";
      break;
    case 124:
      pokeDisplay.src = "/images/pokemon/124.png";
      break;
    case 125:
      pokeDisplay.src = "/images/pokemon/125.png";
      break;
    case 126:
      pokeDisplay.src = "/images/pokemon/126.png";
      break;
    case 127:
      pokeDisplay.src = "/images/pokemon/127.png";
      break;
    case 128:
      pokeDisplay.src = "/images/pokemon/128.png";
      break;
    case 129:
      pokeDisplay.src = "/images/pokemon/129.png";
      break;
    case 130:
      pokeDisplay.src = "/images/pokemon/130.png";
      break;
    case 131:
      pokeDisplay.src = "/images/pokemon/131.png";
      break;
    case 132:
      pokeDisplay.src = "/images/pokemon/132.png";
      break;
    case 133:
      pokeDisplay.src = "/images/pokemon/133.png";
      break;
    case 134:
      pokeDisplay.src = "/images/pokemon/134.png";
      break;
    case 135:
      pokeDisplay.src = "/images/pokemon/135.png";
      break;
    case 136:
      pokeDisplay.src = "/images/pokemon/136.png";
      break;
    case 137:
      pokeDisplay.src = "/images/pokemon/137.png";
      break;
    case 138:
      pokeDisplay.src = "/images/pokemon/138.png";
      break;
    case 139:
      pokeDisplay.src = "/images/pokemon/139.png";
      break;
    case 140:
      pokeDisplay.src = "/images/pokemon/140.png";
      break;
    case 141:
      pokeDisplay.src = "/images/pokemon/141.png";
      break;
    case 142:
      pokeDisplay.src = "/images/pokemon/142.png";
      break;
    case 143:
      pokeDisplay.src = "/images/pokemon/143.png";
      break;
    case 144:
      pokeDisplay.src = "/images/pokemon/144.png";
      break;
    case 145:
      pokeDisplay.src = "/images/pokemon/145.png";
      break;
    case 146:
      pokeDisplay.src = "/images/pokemon/146.png";
      break;
    case 147:
      pokeDisplay.src = "/images/pokemon/147.png";
      break;
    case 148:
      pokeDisplay.src = "/images/pokemon/148.png";
      break;
    case 149:
      pokeDisplay.src = "/images/pokemon/149.png";
      break;
    case 150:
      pokeDisplay.src = "/images/pokemon/150.png";
      break;
    case 151:
      pokeDisplay.src = "/images/pokemon/151.png";
      break;
  }
};

rightButton.addEventListener("click", () => {
  counter++;
  dPad();
  pokeDisplayContainer.style.display = "block";
  scanDisplayContainer.style.display = "none";
});
leftButton.addEventListener("click", () => {
  counter--;
  dPad();
  pokeDisplayContainer.style.display = "block";
  scanDisplayContainer.style.display = "none";
});

const scanButton = document.getElementById("scan-button");

const scanner = () => {
  switch (document.getElementById("search").value) {
    case "bulbasaur":
      scanDisplay.src = "/images/pokemon/001.png";
      pokemonName.innerHTML = allPokemon[0].pokemonName;
      height.innerHTML = allPokemon[0].height;
      weight.innerHTML = allPokemon[0].weight;
      category.innerHTML = allPokemon[0].category;
      abilities.innerHTML = allPokemon[0].abilities;
      counter = 1;
      break;
    case "ivysor":
      scanDisplay.src = "/images/pokemon/002.png";
      pokemonName.innerHTML = allPokemon[1].pokemonName;
      height.innerHTML = allPokemon[1].height;
      weight.innerHTML = allPokemon[1].weight;
      category.innerHTML = allPokemon[1].category;
      abilities.innerHTML = allPokemon[1].abilities;
      counter = 2;
      break;
    case "venasaur":
      scanDisplay.src = "/images/pokemon/003.png";
      pokemonName.innerHTML = allPokemon[2].pokemonName;
      height.innerHTML = allPokemon[2].height;
      weight.innerHTML = allPokemon[2].weight;
      category.innerHTML = allPokemon[2].category;
      abilities.innerHTML = allPokemon[2].abilities;
      counter = 3;
      break;
    default:
      scanDisplay.src = "/images/pokeball.png";
  }
};

scanButton.addEventListener("click", () => {
  pokeDisplayContainer.style.display = "none";
  scanDisplayContainer.style.display = "block";
  scanner();
});
