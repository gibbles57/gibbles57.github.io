var game = {
	menu: "none",
	baseStats: {
		"bond_from_treats": "100%"
	},
	hand: [],
	cardList: [],
	round: 0
}

const template = document.getElementById("card_template");

window.addEventListener('resize', function(event) {
	particlesJS('particles-js', particlesData);
	setCardSize();
}, true);

function init() {

}

function setCardSize() {
	const c = document.getElementById("card_holder").children;
	for (let i of c) {
		//i.style.height = window.innerHeight / 4 + "px";
		i.style.height = "120px";
		//i.style.width = window.innerHeight / 6 + "px";
		i.style.width = "80px";
		i.style.borderRadius = window.innerHeight / 50 + "px";
		if (game.cardList[parseInt(i.dataset.cardID)].getType() != "consumable" && game.cardList[parseInt(i.dataset.cardID)].getType() != "treat") {
			while (i.children[3].children[1].getBoundingClientRect().width > i.getBoundingClientRect().width * 0.9) {
				i.children[3].children[1].style.fontSize = parseInt(i.children[3].children[1].style.fontSize) - 1 + "px";
			}
			while (i.children[3].children[4].getBoundingClientRect().width > i.getBoundingClientRect().width * 0.9) {
				i.children[3].children[4].style.fontSize = parseInt(i.children[3].children[4].style.fontSize) - 1 + "px";
			}
		}
		i.style.border = "3px solid " + cardColors[game.cardList[i.dataset.cardID].getType()];
		i.style.padding = "3px";
	}
	updateCardHolder();
}

function genCard(type, subtype, name, count) {
	if (game.hand.length > 23) return;
	//24 cards max
	if (type == "bee") {
		const b = new BeeCard(name);
		game.cardList.push(b);
	} else if (type == "consumable" || type == "treat") {
		for (let i = 0; i < game.cardList.length; i++) {
			if (game.cardList[i].getSubtype() != subtype) continue;
			if (game.cardList[i].getID() == name) {
				game.cardList[i].addCount(count);
				return;
			}
		}
		if (count < 0) return;
		let b;
		if (type == "consumable") {
			b = new ConsumableCard(name, count, subtype);
		} else if (type == "treat") {
			b = new TreatCard(name, count);
		}
		game.cardList.push(b);
	}
}

function genHand(num) {
	const c = document.getElementsByClassName("card");
	while (c[1]) {
		c[1].remove();
	}
	if (num > 23) num = 23;
	let temp = [];
	for (let i = 0; i < game.cardList.length; i++) {
		temp.push(i);
	}
	let hand = [];
	for (let i = 0; i < num; i++) {
		if (temp.length == 0) break;
		let index = Math.floor(Math.random() * temp.length);
		hand.push(temp[index]);
		temp.splice(index, 1);
	}
	for (let i = 0; i < hand.length; i++) {
		const a = template.cloneNode(true);
		a.removeAttribute("id");
		a.onmouseenter = function() {
			a.dataset.bottom = a.style.bottom;
			a.style.bottom = parseInt(a.style.height) * 0.25 + 3 + "px";
			a.dataset.rotate = a.style.rotate;
			a.style.rotate = "0deg";
			a.style.scale = "1.5";
		}
		a.onmouseleave = function() {
			a.style.bottom = a.dataset.bottom;
			a.style.rotate = a.dataset.rotate;
			a.style.scale = "1.0";
			updateCardHolder();
		}
		a.dataset.cardID = i;
		styleCard(a);
		setTimeout(function() {
			a.style.transition = "all 0.3s ease";
		}, 20);
		document.getElementById("card_holder").append(a);
	}
	setCardSize();
}

function updateCardHolder() {
	const c = document.getElementById("card_holder").children;
	let p = window.innerWidth;
	let r = 50;
	for (let i of c) {
		i.style.margin = "0px " + (0 - c.length) + "px";
		i.style.bottom = "0px";
	}
	for (let i of c) {
		let x = (i.getBoundingClientRect().x + i.getBoundingClientRect().width / 2) - window.innerWidth / 2;
		i.style.bottom = r * r * Math.cos(x / (r * r)) - (r * r) + "px";
		i.style.rotate = (-1 * (Math.acos(x / (r * r)) * 180 / Math.PI + 270)) + 360 + "deg";
	}
	changeCards();
}

function changeCards() {
	const c = document.getElementById("card_holder").children;
	for (let j = 0; j < c.length; j++) {
		styleCard(c[j]);
	}
}

function styleCard(a) {
		const b = game.cardList[parseInt(a.dataset.cardID)];
		const d = a.children;
		if (b.getType() == "bee") {
			d[0].innerHTML = (b.getGifted() ? "Gifted#" : "") + b.getName() + " Bee";
			d[0].style.color = rarityColors[b.getRarity()];
			d[1].src = "images/bee_models/" + changeText(b.getName(), "underscores") + ".png";
			d[2].style.color = rarityColors[b.getRarity()];
			d[2].innerHTML = b.getColor() + " " + b.getRarity();
			d[3].children[1].innerHTML = changeText(b.getBeequip()[0], "regular");
			d[3].children[4].innerHTML = changeText(b.getMutation(), "regular");
			d[4].innerHTML = "Level " + b.getLevel();
		} else if (b.getType() == "consumable" || b.getType() == "treat") {
			d[0].innerHTML = b.getName();
			d[1].src = "images/items/" + b.getID() + ".png";
			d[1].style.width = "50%";
			d[1].style.height = "43px";
			d[1].style.translate = "-50% 30%";
			d[3].innerHTML = b.getDesc();
			d[3].style.overflow = "visible";
			d[3].style.fontSize = "9px";
			while (d[3].scrollHeight > parseInt(a.style.height) * 0.36) {
				d[3].style.fontSize = parseInt(d[3].style.fontSize) - 1 + "px";
			}
			if (b.getType() == "consumable") {
				d[4].innerHTML = "" + b.getCount() + (b.getLimit() ? "/" + b.getMax() : "");
			} else {
				d[4].innerHTML = b.getCount();
			}
		}
		a.style.visibility = "visible";
}

function startRound() {
	game.round += 1;
}

function changeText(text, type) {
	let string;
	if (type == "underscores") {
		string = toUnderscores(text);
	} else if (type == "camelcase") {
		string = toCamelCase(text);
	} else if (type == "regular") {
		string = toRegular(text);
	}
	return string;
	function toUnderscores(text) {
		let string = "";
		for (let i = 0; i < text.length; i++) {
			if (text[i] == text[i].toUpperCase()) {
				if (text[i] == " ") continue;
				if (i !== 0) string = string + "_";
				string = string + text[i].toLowerCase();
			} else {
				string = string + text[i];
			}
		}
		return string;
	}

	function toCamelCase(text) {
		let string = text[0];
		if (text.includes("_")) {
			for (let i = 1; i < text.length; i++) {
				if (text[i - 1] == "_") {
					string = string + text[i].toUpperCase();
				} else if (text[i] == "_") {
					continue;
				} else {
					string = string + text[i];
				}
			}
		} else {
			string = text[0].toLowerCase();
			for (let i = 1; i < text.length; i++) {
				if (text[i] == " ") {
					continue;
				} else {
					string = string + text[i];
				}
			}
		}
		return string;
	}

	function toRegular(text) {
		let string = text[0].toUpperCase();
		if (text.includes("_")) {
			for (let i = 1; i < text.length; i++) {
				if (text[i] == "_") {
					string = string + " " + text[i + 1].toUpperCase();
					i += 1;
				} else {
					string = string + text[i];
				}
			}
		} else {
			for (let i = 1; i < text.length; i++) {
				if (text[i] == text[i].toUpperCase()) {
					string = string + " " + text[i];
				} else {
					string = string + text[i];
				}
			}
		}
		return string;
	}
}

function pf(n) {
	return Math.round(n * 1e5) / 1e5;
}

particlesJS('particles-js', particlesData);