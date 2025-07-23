class Card {
	constructor(type, subtype) {
		this.type = type;
		this.subtype = subtype;
	}

	getType() {
		return this.type;
	}
	getSubtype() {
		return this.subtype;
	}
}

class BeeCard extends Card {
	constructor(name = "none", gifted = false, level = 1, bond = 0, beequip = ["none", {}], mutation = "none", radioactive = 0) {
		super("bee", "none");
		this.name = name;
		this.gifted = gifted;
		this.level = level;
		this.bond = bond;
		this.beequip = beequip;
		this.mutation = mutation;
		this.radioactive = radioactive;
	}

	getName() {
		return this.name;
	}

	setGifted(value) {
		this.gifted = value;
	}
	getGifted() {
		return this.gifted;
	}

	setLevel(value) {
		this.level = value;
	}
	addLevel(value) {
		this.level += value;
	}
	getLevel() {
		return this.level;
	}

	setBond(value) {
		this.bond = value;
		this.addBond(0);
	}
	addBond(value) {
		this.bond += value;
		this.updateLevel();
	}
	getBond() {
		return this.bond;
	}

	setBeequip(name, stats) {
		this.beequip = [name, stats];
	}
	getBeequip() {
		return this.beequip;
	}
	clearBeequip() {
		this.beequip = ["none", {}];
	}

	setMutation(name, stats) {
		this.mutation = [name, stats];
	}
	getMutation() {
		return this.mutation;
	}
	clearMutation() {
		this.mutation = "none";
	}

	setRadioactive(value) {
		this.radioactive = value;
	}
	getRadioactive() {
		return this.radioactive;
	}

	getRarity() {
		return beeTypeStats[this.getName()].rarity;
	}

	getColor() {
		return (beeTypeStats[this.getName()].color == "Colorless" ? "" : beeTypeStats[this.getName()].color);
	}

	updateLevel() {
		let i = 0;
		while (this.getBond() >= bondLevels[i]) {
			i++;
		}
		this.setLevel(i + 1);
	}

	toString() {
		return "bee\n" + this.name + "\n" + this.gifted + "\n" + this.level + "\n" + this.bond + "\n" + this.beequip + "\n" + this.mutation;
	}
}

class ConsumableCard extends Card {
	constructor(id, count = 1, subtype) {
		super("consumable", subtype);
		this.id = id;
		this.count = count;
		this.limit = itemStats[id][1];
		this.max = itemStats[id][2];
		if (subtype == "consumable" || subtype == "drive") {
			this.cooldown = itemStats[id][3];
			this.duration = itemStats[id][4];
			if (this.duration != "N/A") {
				this.name = itemStats[id][5];
				this.desc = itemStats[id][6];
				this.buff = itemStats[id][7];
				this.buff_desc = itemStats[id][8];
			}
		}
		if (subtype == "wax") {
			this.name = changeText(id, "regular");
			this.upgrade = itemStats[id][3];
			this.fail = itemStats[id][4];
			this.destroy = itemStats[id][5];
			this.rerolls = itemStats[id][6];
			this.clear = itemStats[id][7];
			this.desc = itemStats[id][8];
		}
		this.addCount(0);
	}

	getID() {
		return this.id;
	}

	setCount(value) {
		this.count = value;
	}
	addCount(value) {
		this.count += value;
		if (this.limit && this.max < this.count) {
			this.count = this.max;
		}
	}
	getCount() {
		return this.count;
	}

	getLimit() {
		return this.limit;
	}

	getMax() {
		return this.max;
	}

	getCooldown() {
		return this.cooldown;
	}

	getDuration() {
		return this.duration;
	}

	getName() {
		return this.name;
	}

	getDesc() {
		return this.desc;
	}

	getBuff() {
		return this.buff;
	}

	getBuffDesc() {
		return this.buff_desc;
	}

	useItem() {
		if (this.subtype == "wax") {

		} else {
			if (this.subtype == "drive"/* && not in robo challenge*/) return;
			
		}
	}
}

class TreatCard extends Card {
	constructor(id = "none", count = 1) {
		super("treat");
		this.id = id;
		this.count = count;
		this.name = changeText(id, "regular");
		this.bond = itemStats[id][1];
		this.gifted_chance = itemStats[id][2];
		this.req_fav = itemStats[id][3];
		this.mult = itemStats[id][4];
		this.mut = itemStats[id][5];
		this.radio = itemStats[id][6];
		this.mut_wo = itemStats[id][7];
		this.desc = itemStats[id][8];
	}

	getID() {
		return this.id;
	}

	setCount(value) {
		this.count = value;
	}
	addCount(value) {
		this.count += value;
	}
	getCount() {
		return this.count;
	}

	getName() {
		return this.name;
	}

	getDesc() {
		return this.desc;
	}

	getBond() {
		return this.bond;
	}

	getGifted() {
		return this.gifted_chance;
	}

	getReqFav() {
		return this.req_fav;
	}

	getMult() {
		return this.mult;
	}

	getMut() {
		return this.mut;
	}

	getRadio() {
		return this.radio;
	}

	getMutWO() {
		return this.mut_wo;
	}

	useTreat(c, i, ug, um, ul) {
		console.log(game.cardList);
		if (game.cardList[i].getType() != "bee") return;
		if (c > this.count) c = this.count;
		let g = game.cardList[i].gifted ? 0 : (this.req_fav ? (beeTypeStats[game.cardList[i].getName()].favorite == this.id ? 1 : 0) : 1);
		let m = game.cardList[i].radioactive ? (this.mut > 0 ? 1 : 0) : (this.mut_wo > 0 ? 1 : 0);
		let r = game.cardList[i].radioactive ? 0 : (this.radio > 0 ? 1 : 0);
		let rolls = [0, 0, 0];
		let lv = 0;
		let remaining = 0;
		for (let j = 0; j < c; j++) {
			this.addCount(-1);
			game.cardList[i].addBond(this.bond * (beeTypeStats[game.cardList[i].name].favorite == this.id ? this.mult : 1));
			if (g) {
				if (Math.random() < this.gifted_chance[Object.keys(rarityColors).indexOf(game.cardList[i].getRarity())]) {
					game.cardList[i].setGifted(true);
					rolls[0] = 1;
					if (ug) break;
				}
			}
			if (m) {
				if ((game.cardList[i].getRadioactive() && Math.random() < this.mut) || (!game.cardList[i].getRadioactive() && Math.random() < this.mut_wo)) {
					let mut = genMutation(game.cardList[i].getLevel());
					rolls[1] = 1;
					if (um) break;
				}
			}
			if (r) {
				if (Math.random() < this.radio) {
					game.cardList[i].setRadioactive(true);
					rolls[2] = 1;
				}
			}
			if (game.cardList[i].getBond() >= bondLevels[game.cardList[i].getLevel()]) {
				game.cardList[i].updateLevel();
				if (ul) break;
			}
			if ((rolls[0] || this.gifted_chance[Object.keys(rarityColors).indexOf(beeTypeStats[game.cardList[i].getName()].rarity)] === 0) && (rolls[1] || (game.cardList[i].getRadioactive() && this.mut === 0) || (this.mut_wo === 0 && !game.cardList[i].getRadioactive())) && (rolls[2] || this.radio === 0)) {
				lv = 1;
				remaining = c - j - 1;
				break;
			}
		}
		if (lv == 1) {
			if (ul) {
				let cal = calcTreatsBond(this.id, i, game.cardList[i].getBond(), bondLevels[game.cardList[i].getLevel()]);
				if (cal == "None") {
					game.cardList[i].addBond(remaining * this.bond * (beeTypeStats[game.cardList[i].getName()].favorite == this.id ? this.mult : 1));
					this.addCount(-1 * remaining);
				} else {
					game.cardList[i].addBond(cal * this.bond * (beeTypeStats[game.cardList[i].getName()].favorite == this.id ? this.mult : 1));
					this.addCount(-1 * cal);
				}
			} else {
				game.cardList[i].addBond(remaining * this.bond * (beeTypeStats[game.cardList[i].getName()].favorite == this.id ? this.mult : 1));
				this.addCount(-1 * remaining);
			}
		}
		changeCards();
	}

	genMutation(level) {
		let mutation = "";
		let c = 0;
		let lvl = level < 11 ? 1 : (level < 21 ? 2 : 3);
		let num = Math.random();
		for (let i = 0; i < mutationChances.length; i++) {
			c += mutationChances[i].chance;
			if (num < c) {
				let t = Math.floor(Math.random() * (mutationChances[i].range[lvl] - mutationChances[i].range[0] + 1) + mutationChances[i].range[0]);
				if (mutationChances[i].name[1] == "%") {
					mutation = mutationChances[i].name.slice(0, 1) + t + mutationChances[i].name.slice(1, 2) + " " + mutationChances[i].name.slice(2);
				} else {
					mutation = mutationChances[i].name.slice(0, 1) + t + " " + mutationChances[i].name.slice(1);
				}
				return mutation;
			}
		}
	}

	calcTreatsBond(i, start, finish) {
		let total = this.count * this.bond * (beeTypeStats[game.cardList[i].getName()].favorite == this.id ? this.mult : 1);
		if (start + total < finish) return "None";
		let count = finish - start;
		let final = count / total * this.count;
		return Math.ceil(pf(final));
	}
}