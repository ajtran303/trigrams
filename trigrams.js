const trigrams = [
  {name : "Heaven", binary : "xxxxxxxxx"},
  {name : "Thunder", binary : "xoxxoxxxx"},
  {name : "Water", binary : "xoxxxxxox"},
  {name : "Mountain", binary : "xxxxoxxox"},
  {name : "Earth", binary : "xoxxoxxox"},
  {name : "Wind", binary : "xxxxxxxox"},
  {name : "Fire", binary : "xxxxoxxxx"},
  {name : "Lake", binary : "xoxxxxxxx"}
];

const randomTrigram = trigrams[Math.floor(Math.random()*trigrams.length)];

document.getElementById("name").innerHTML = randomTrigram.name;

const binaryArray = randomTrigram.binary.split("");

const container = document.getElementById("container");

for (let n=0; n < binaryArray.length; n++){
  let lines = container.appendChild(document.createElement("div"));
  lines.classList.add(binaryArray[n]);
};
