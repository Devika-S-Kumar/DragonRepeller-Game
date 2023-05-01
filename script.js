
/*variables can be declared as var,let,const*/

let xp = 0;
let health = 100;
let gold = 50;
let cw = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
let dg = 0;

/*adding reference to html page*/

const b1 = document.querySelector("#button1");
const b2 = document.querySelector("#button2");
const b3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const ms = document.querySelector("#monsterStats");
const mn = document.querySelector("#monsterName");
const mh = document.querySelector("#monsterHealth");


//assigning value to gofight


const monsters = [
  {
    name: "Slime",
    level: 2,
    health: 250

  },
  {
    name: "Fanged Beast",
    level: 8,
    health: 180
  },

  {
    name: "Dragon",
    level: 10,
    health: 300
  }

];





//assigning value to update
const locations = [
  {
    name: "Town Sq",
    "button name": ["Go to Store", "Go to cave", "Fight dragon"],
    "button function": [goStore, goCave, fightDragon],
    text: "You are in Town Sq.. 🧚"
  },

  {
    name: "Store",
    "button name": ["Buy 10 Health(10 Gold)", "Buy Weapons", "Go to Town Sq"],
    "button function": [buyHealth, buyWeapon, goTown],
    text: "YOU ARE IN THE STORE...🧞‍♂️"
  },
  {
    name: "Cave",
    "button name": ["Fight slime", "Fight fanged beast", "Go to Town Sq"],
    "button function": [fightSlime, fightBeast, goTown],
    text: "If You enter the cave,you will see some monsters..👹"
  },

  {
    name: "fight",
    "button name": ["Attack", "Dodge", "Run"],
    "button function": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },

  {
    name: "kill monster",
    "button name": ["Go to town square", "Go to town square", "Go to town square"],
    "button function": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },

  {
    name: "lose",
    "button name": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button function": [restart, restart, restart],
    text: "You die. ☠️"
  },
  {
    name: "win",
    "button name": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button function": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! 🎉"
  },

  {
		name: "easter egg",
		"button name": ["2", "8", "Go to town square?"],
		"button function": [pickTwo, pickE, goTown],
		text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
	}


];


const weapons = [
  {
    name: "stick",
    power: 30
  },
  {
    name: "dagger",
    power: 60
  },
  {
    name: "claw hammer",
    power: 80
  },
  {
    name: "sword",
    power: 100
  }
];



//initialize buttons


b1.onclick = goStore;
b2.onclick = goCave;
b3.onclick = fightDragon;




function update(locations) {
  ms.style.display = "none";
  b1.innerText = locations["button name"][0];
  b2.innerText = locations["button name"][1];
  b3.innerText = locations["button name"][2];
  text.innerText = locations.text;

  b1.onclick = locations["button function"][0];
  b2.onclick = locations["button function"][1];
  b3.onclick = locations["button function"][2];
}


function goTown() {

    
  document.body.style.backgroundImage = "url('https://awoiaf.westeros.org/images/thumb/d/d4/Aegon_on_Balerion.jpg/1200px-Aegon_on_Balerion.jpg')";
  health = 100;
  healthText.innerText = health;
  update(locations[0]);

}

function goStore() {
  update(locations[1]);

}


function buyHealth() {

  if (gold >= 10) {
    gold -= 10
    health += 10
    goldText.innerText = gold;
    healthText.innerText = health;
  }
  else {
    text.innerText = "You do not have enough gold to buy health 😥";
  }

}

function buyWeapon() {
  if (cw < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      cw++;
      goldText.innerText = gold;

      let nw = weapons[cw].name;
      text.innerText = "You now have a " + nw + "💫\n";
      inventory.push(nw);
      text.innerText += "In your inventory you have: " + inventory;
    }
    else {
      text.innerText = "You do not have enough gold to buy weapon 😥"
    }
  }
  else {
    text.innerText = "You already have the most powerful weapon!";
    b2.innerText = "Sell weapon(15 gold)";
    b2.onClick = sellWeapon;
  }

}

function goCave() {
  update(locations[2])


}



function sellWeapon() {

  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let cw = inventory.shift();
    //moves first element in inventory to cw

    text.innerText = "you sold a " + cw + "!";
    text.innerText += "In your Inventory you have" + inventory;
  }

  else {
    text.innerText = "Dont sell your only weapon..🧚"
  }

}



function fightSlime() {

  document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/d3/e5/ea/d3e5ea4a64885208113407688748f4c2.jpg')";
  fighting = 0;
  goFight();
}

function fightBeast() {
  document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/003e1649-1298-4774-a5fe-0cbc297194f1/deh5zu9-6023d9c4-442b-42f3-a14f-977e6b32c834.jpg/v1/fill/w_1920,h_2560,q_75,strp/training_dragons_by_somatonic_deh5zu9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2MCIsInBhdGgiOiJcL2ZcLzAwM2UxNjQ5LTEyOTgtNDc3NC1hNWZlLTBjYmMyOTcxOTRmMVwvZGVoNXp1OS02MDIzZDljNC00NDJiLTQyZjMtYTE0Zi05NzdlNmIzMmM4MzQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.O08CoQShcnpO5TuyDubkbTmIPTcHBojsXY4lCluFNFU')";
  fighting = 1;
  goFight();
}

function fightDragon() {
  document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11da7a2e-4f13-4001-87e9-2a47d7726b53/dc4tq8h-65b18908-4956-45bf-8361-d0de0c6bee16.jpg/v1/fill/w_1024,h_695,q_75,strp/dragon_fight_by_allagar_dc4tq8h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk1IiwicGF0aCI6IlwvZlwvMTFkYTdhMmUtNGYxMy00MDAxLTg3ZTktMmE0N2Q3NzI2YjUzXC9kYzR0cThoLTY1YjE4OTA4LTQ5NTYtNDViZi04MzYxLWQwZGUwYzZiZWUxNi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XSstxsJ_Q7P8gaGsaG0lYGi9bQFqGxV494YMWqujPeI')";

  fighting = 2;
  goFight();
}


function goFight() {


  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  ms.style.display = "block";
  mn.innerText = monsters[fighting].name;
  mh.innerText = monsterHealth;
}
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += "You attack it with your " + weapons[cw].name + ".";

  if (isHit()) {
    monsterHealth -= weapons[cw].power + Math.floor(Math.random() * xp) + 1;
  }
  else {
    text.innerText = " Its a miss..";
  }
  health -= getAv(monsters[fighting].level);

  healthText.innerText = health;
  mh.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  }
  else if (monsterHealth <= 0) {

    if (fighting == 2) {
      winGame();

    }
    else {
      defeatMonster();

    }
  }

  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += "Your " + inventory.pop() + "breaks 😥";
    cw--;
  }

}
function dodge() {

  if (dg < monsters[fighting].level / 2) {

    monsterHealth -= Math.floor(Math.random() * 20);
    healthText.innerText = health;
    mh.innerText = monsterHealth;
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
    dg++;

  }
  else {
    text.innerText = "you cant dodge anymore you have to attack....";
  }


}

function isHit() {
  return Math.random() > .3 || health < 20;

}

function getAv(level) {
  let hit = (level * 2) - (Math.floor(Math.random() * xp)) - (Math.floor(Math.random() * level));
  console.log(hit);
  return hit;


}

function lose() {
  update(locations[5]);

}

function winGame() {
  update(locations[6]);

}

function defeatMonster() {
  update(locations[4]);
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;


}

function restart() {

  health = 100;
  // gold = 50;
  cw = 0;
  fighting;
  monsterHealth;
  dg = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;

  goTown();

}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}
function pickE() {
  pick(8);
}

function pick(guess) {
  let no = [];

  while (no.length < 10) {
    no.push(Math.floor(Math.random() * 11));
  }

  text.innerText = "you picked " + guess + ". Here are the random numbers: \n";
  for (let i = 0; i < 10; i++) {
    text.innerText += no[i] + "\n";
  }


  if (no.indexOf(guess) !== -1) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  }
  else {


    text.innerText += "Oops! You loose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0)
      lose();

  }

}