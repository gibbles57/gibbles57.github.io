const fieldStats = {
  'Sunflower': { 'zone': 0, 'color': 'White', 'size': { 'x': 33, 'y': 20, 'r': 0 }, 'counts': { '1': { 'White': 62, 'Red': 15, 'Blue': 12.9 }, '2': { 'White': 6.3, 'Red': 1.7, 'Blue': 2.1 }, '3': { 'White': 0, 'Red': 0, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Dandelion': { 'zone': 0, 'color': 'White', 'size': { 'x': 36, 'y': 18, 'r': 0 }, 'counts': { '1': { 'White': 74.1, 'Red': 4.8, 'Blue': 8.2 }, '2': { 'White': 10.6, 'Red': 0.8, 'Blue': 1.5 }, '3': { 'White': 0, 'Red': 0, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Mushroom': { 'zone': 0, 'color': 'Red', 'size': { 'x': 32, 'y': 23, 'r': 0 }, 'counts': { '1': { 'White': 28.7, 'Red': 61.5, 'Blue': 0 }, '2': { 'White': 2.9, 'Red': 6.9, 'Blue': 0 }, '3': { 'White': 0, 'Red': 0, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Blue Flower': { 'zone': 0, 'color': 'Blue', 'size': { 'x': 43, 'y': 17, 'r': 0 }, 'counts': { '1': { 'White': 24.9, 'Red': 0, 'Blue': 66.2 }, '2': { 'White': 2.6, 'Red': 0, 'Blue': 6.3 }, '3': { 'White': 0, 'Red': 0, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Clover': { 'zone': 0, 'color': 'Mixed', 'size': { 'x': 29, 'y': 26, 'r': 0 }, 'counts': { '1': { 'White': 16, 'Red': 18, 'Blue': 17 }, '2': { 'White': 16, 'Red': 16, 'Blue': 17 }, '3': { 'White': 0, 'Red': 0, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Strawberry': { 'zone': 5, 'color': 'Red', 'size': { 'x': 26, 'y': 22, 'r': 0 }, 'counts': { '1': { 'White': 7, 'Red': 14, 'Blue': 0 }, '2': { 'White': 23, 'Red': 52, 'Blue': 0 }, '3': { 'White': 1, 'Red': 3, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Spider': { 'zone': 5, 'color': 'White', 'size': { 'x': 28, 'y': 26, 'r': 0 }, 'counts': { '1': { 'White': 10, 'Red': 0, 'Blue': 0 }, '2': { 'White': 80, 'Red': 0, 'Blue': 0 }, '3': { 'White': 10, 'Red': 0, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Bamboo': { 'zone': 5, 'color': 'Blue', 'size': { 'x': 39, 'y': 18, 'r': 0 }, 'counts': { '1': { 'White': 5, 'Red': 0, 'Blue': 15 }, '2': { 'White': 18.7, 'Red': 0, 'Blue': 56.3 }, '3': { 'White': 1.2, 'Red': 0, 'Blue': 3.8 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Pineapple': { 'zone': 10, 'color': 'White', 'size': { 'x': 33, 'y': 23, 'r': 0 }, 'counts': { '1': { 'White': 17, 'Red': 1, 'Blue': 1 }, '2': { 'White': 45, 'Red': 3, 'Blue': 2 }, '3': { 'White': 27, 'Red': 2, 'Blue': 2 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Stump': { 'zone': 10, 'color': 'Blue', 'size': { 'x': 0, 'y': 0, 'r': 26 }, 'counts': { '1': { 'White': 0, 'Red': 0, 'Blue': 0 }, '2': { 'White': 0, 'Red': 0, 'Blue': 0 }, '3': { 'White': 19, 'Red': 6, 'Blue': 75 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Cactus': { 'zone': 15, 'color': 'Mixed', 'size': { 'x': 33, 'y': 18, 'r': 0 }, 'counts': { '1': { 'White': 0, 'Red': 0, 'Blue': 0 }, '2': { 'White': 4, 'Red': 18, 'Blue': 22 }, '3': { 'White': 3, 'Red': 25, 'Blue': 28 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Pumpkin': { 'zone': 15, 'color': 'Mixed', 'size': { 'x': 33, 'y': 17, 'r': 0 }, 'counts': { '1': { 'White': 0, 'Red': 0, 'Blue': 0 }, '2': { 'White': 14, 'Red': 5, 'Blue': 5 }, '3': { 'White': 43, 'Red': 16, 'Blue': 17 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Pine Tree': { 'zone': 15, 'color': 'Blue', 'size': { 'x': 31, 'y': 23, 'r': 0 }, 'counts': { '1': { 'White': 1.1, 'Red': 0, 'Blue': 4.7 }, '2': { 'White': 8.5, 'Red': 0, 'Blue': 39.5 }, '3': { 'White': 6.4, 'Red': 0, 'Blue': 39.5 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Rose': { 'zone': 15, 'color': 'Red', 'size': { 'x': 31, 'y': 20, 'r': 0 }, 'counts': { '1': { 'White': 2, 'Red': 4, 'Blue': 0 }, '2': { 'White': 8, 'Red': 36, 'Blue': 0 }, '3': { 'White': 8, 'Red': 42, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Mountain Top': { 'zone': 25, 'color': 'Mixed', 'size': { 'x': 28, 'y': 24, 'r': 0 }, 'counts': { '1': { 'White': 0, 'Red': 0, 'Blue': 0 }, '2': { 'White': 0, 'Red': 0, 'Blue': 0 }, '3': { 'White': 0, 'Red': 50, 'Blue': 50 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Pepper': { 'zone': 35, 'color': 'Red', 'size': { 'x': 27, 'y': 21, 'r': 0 }, 'counts': { '1': { 'White': 0, 'Red': 0, 'Blue': 0 }, '2': { 'White': 0, 'Red': 0, 'Blue': 0 }, '3': { 'White': 8, 'Red': 92, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Coconut': { 'zone': 35, 'color': 'White', 'size': { 'x': 30, 'y': 21, 'r': 0 }, 'counts': { '1': { 'White': 0, 'Red': 0, 'Blue': 0 }, '2': { 'White': 0, 'Red': 0, 'Blue': 0 }, '3': { 'White': 89.4, 'Red': 6, 'Blue': 4.6 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } },
  'Ant Challenge': { 'zone': 20, 'color': 'Mixed', 'size': { 'x': 32, 'y': 12, 'r': 0 }, 'counts': { '1': { 'White': 20, 'Red': 35.6, 'Blue': 44.5 }, '2': { 'White': 0, 'Red': 0, 'Blue': 0 }, '3': { 'White': 0, 'Red': 0, 'Blue': 0 }, '4': {'White': 0, 'Red': 0, 'Blue': 0}, '5': {'White': 0, 'Red': 0, 'Blue': 0} } }};
const fieldNames = ['Sunflower', 'Dandelion', 'Mushroom', 'Blue Flower', 'Clover', 'Strawberry', 'Spider', 'Bamboo', 'Pineapple', 'Stump', 'Cactus', 'Pumpkin', 'Pine Tree', 'Rose', 'Mountain Top', 'Pepper', 'Coconut', 'Ant Challenge'];
const beeTypeStats = {
  'Basic': { 'rarity': 'Common', 'color': 'Colorless', 'energy': 20, 'speed': 14, 'attack': 1, 'gather': 10, 'gather_speed': 4, 'convert': 80, 'convert_speed': 4, 'gifted_bonus': 'x1.2 Pollen', 'tokens': ['#Inspire'], 'passives': [], 'likes': ['Sunflower', 'Clover', 'Mountain Top'], 'dislikes': ['Spider'], 'favorite': 'sunflower_seed' },
  'Bomber': { 'rarity': 'Rare', 'color': 'Colorless', 'energy': 20, 'speed': 15.4, 'attack': 2, 'gather': 10, 'gather_speed': 4, 'convert': 120, 'convert_speed': 4, 'gifted_bonus': 'x1.1 Bomb Pollen', 'tokens': ['Buzz Bomb', '#Inspire'], 'passives': [], 'likes': ['Dandelion', 'Cactus'], 'dislikes': ['Pumpkin'], 'favorite': 'sunflower_seed' },
  'Brave': { 'rarity': 'Rare', 'color': 'Colorless', 'energy': 30, 'speed': 16.8, 'attack': 5, 'gather': 10, 'gather_speed': 4, 'convert': 200, 'convert_speed': 4, 'gifted_bonus': '+1 Bee Attack', 'tokens': ['#Inspire'], 'passives': [], 'likes': ['Spider', 'Clover'], 'dislikes': ['Dandelion'], 'favorite': 'pineapple' },
  'Bumble': { 'rarity': 'Rare', 'color': 'Blue', 'energy': 50, 'speed': 10.5, 'attack': 1, 'gather': 18, 'gather_speed': 4, 'convert': 80, 'convert_speed': 4, 'gifted_bonus': 'x1.1 Capacity', 'tokens': ['Blue Bomb', '#Inspire'], 'passives': [], 'likes': ['Blue Flower', 'Pine Tree', 'Stump'], 'dislikes': ['Mushroom'], 'favorite': 'blueberry' },
  'Cool': { 'rarity': 'Rare', 'color': 'Blue', 'energy': 20, 'speed': 14, 'attack': 2, 'gather': 10, 'gather_speed': 3, 'convert': 120, 'convert_speed': 4, 'gifted_bonus': 'x1.1 Blue Boost', 'tokens': ['Blue Boost', '#Inspire'], 'passives': [], 'likes': ['Bamboo', 'Pine'], 'dislikes': ['Strawberry'], 'favorite': 'blueberry' },
  'Hasty': { 'rarity': 'Rare', 'color': 'Colorless', 'energy': 20, 'speed': 19.6, 'attack': 1, 'gather': 10, 'gather_speed': 3, 'convert': 80, 'convert_speed': 3, 'gifted_bonus': '+15% Player Movespeed', 'tokens': ['Haste', '#Inspire'], 'passives': [], 'likes': ['Sunflower', 'Cactus'], 'dislikes': ['Pumpkin', 'Stump'], 'favorite': 'pineapple' },
  'Looker': { 'rarity': 'Rare', 'color': 'Colorless', 'energy': 20, 'speed': 14, 'attack': 1, 'gather': 13, 'gather_speed': 4, 'convert': 160, 'convert_speed': 4, 'gifted_bonus': '+25% Critical Power', 'tokens': ['Focus', '#Inspire'], 'passives': [], 'likes': ['Clover', 'Mountain Top'], 'dislikes': ['Sunflower'], 'favorite': 'sunflower_seed' },
  'Rad': { 'rarity': 'Rare', 'color': 'Red', 'energy': 20, 'speed': 14, 'attack': 1, 'gather': 13, 'gather_speed': 4, 'convert': 80, 'convert_speed': 3, 'gifted_bonus': 'x1.1 Red Pollen', 'tokens': ['Red Boost', '#Inspire'], 'passives': [], 'likes': ['Rose', 'Mushroom'], 'dislikes': ['Pine Tree'], 'favorite': 'strawberry' },
  'Rascal': { 'rarity': 'Rare', 'color': 'Red', 'energy': 20, 'speed': 16.1, 'attack': 3, 'gather': 10, 'gather_speed': 4, 'convert': 80, 'convert_speed': 4, 'gifted_bonus': 'x1.25 Red Bomb Pollen', 'tokens': ['Red Bomb', '#Inspire'], 'passives': [], 'likes': ['Rose', 'Mushroom'], 'dislikes': ['Pine Tree'], 'favorite': 'strawberry' },
  'Stubborn': { 'rarity': 'Rare', 'color': 'Colorless', 'energy': 20, 'speed': 11.9, 'attack': 2, 'gather': 10, 'gather_speed': 4, 'convert': 80, 'convert_speed': 3, 'gifted_bonus': '+15% Ability Token Lifespan', 'tokens': ['Pollen Mark', '#Inspire'], 'passives': [], 'likes': ['Dandelion', 'Pineapple'], 'dislikes': ['Rose'], 'favorite': 'strawberry' },
  'Bubble': { 'rarity': 'Epic', 'color': 'Blue', 'energy': 20, 'speed': 16.1, 'attack': 3, 'gather': 10, 'gather_speed': 4, 'convert': 160, 'convert_speed': 4, 'gifted_bonus': '1.25 Bubble Pollen', 'tokens': ['Blue Bomb', '#Inspire'], 'passives': ['Gathering Bubbles'], 'likes': ['Blue Flower', 'Pine Tree'], 'dislikes': ['Strawberry'], 'favorite': 'blueberry' },
  'Bucko': { 'rarity': 'Epic', 'color': 'Blue', 'energy': 30, 'speed': 15.4, 'attack': 5, 'gather': 17, 'gather_speed': 4, 'convert': 80, 'convert_speed': 3, 'gifted_bonus': '+20% Blue Field Capacity', 'tokens': ['Blue Boost', '#Inspire'], 'passives': [], 'likes': ['Pine Tree', 'Bamboo', 'Blue Flower'], 'dislikes': ['Rose', 'Strawberry'], 'favorite': 'blueberry' },
  'Commander': { 'rarity': 'Epic', 'color': 'Colorless', 'energy': 20, 'speed': 14, 'attack': 4, 'gather': 15, 'gather_speed': 4, 'convert': 80, 'convert_speed': 4, 'gifted_bonus': '+3% Critical Chance', 'tokens': ['Buzz Bomb', 'Focus', '#Inspire'], 'passives': [], 'likes': ['Cactus', 'Spider'], 'dislikes': ['Dandelion'], 'favorite': 'sunflower_seed' },
  'Demo': { 'rarity': 'Epic', 'color': 'Colorless', 'energy': 20, 'speed': 16.8, 'attack': 3, 'gather': 10, 'gather_speed': 4, 'convert': 200, 'convert_speed': 4, 'gifted_bonus': 'x1.25 Buzz Bomb Pollen', 'tokens': ['Buzz Bomb+', '#Inspire'], 'passives': [], 'likes': ['Cactus', 'Dandelion'], 'dislikes': ['Rose'], 'favorite': 'sunflower_seed' },
  'Exhausted': { 'rarity': 'Epic', 'color': 'Colorless', 'energy': Infinity, 'speed': 10.5, 'attack': 1, 'gather': 10, 'gather_speed': 4.6, 'convert': 240, 'convert_speed': 4, 'gifted_bonus': '20% White Field Capacity', 'tokens': ['Buzz Bomb', 'Token Link', '#Inspire'], 'passives': [], 'likes': ['Sunflower', 'Dandelion', 'Stump'], 'dislikes': ['Cactus'], 'favorite': 'pineapple' },
  'Fire': { 'rarity': 'Epic', 'color': 'Red', 'energy': 25, 'speed': 11.2, 'attack': 4, 'gather': 10, 'gather_speed': 4, 'convert': 80, 'convert_speed': 4, 'gifted_bonus': 'x1.25 Flame Pollen', 'tokens': ['Red Bomb+', '#inspire'], 'passives': ['Gathering Flames'], 'likes': ['Mushroom', 'Strawberry'], 'dislikes': ['Pine Tree'], 'favorite': 'pineapple' },
  'Frosty': { 'rarity': 'Epic', 'color': 'Blue', 'energy': 25, 'speed': 11.2, 'attack': 1, 'gather': 10, 'gather_speed': 4, 'convert': 80, 'convert_speed': 4, 'gifted_bonus': 'x1.25 Blue Bomb Pollen', 'tokens': ['Blue Bomb+', 'Blue Boost', '#Inspire'], 'passives': [], 'likes': ['Blue Flower', 'Mountain Top'], 'dislikes': ['Mushroom'], 'favorite': 'blueberry' },
  'Honey': { 'rarity': 'Epic', 'color': 'Colorless', 'energy': 20, 'speed': 14, 'attack': 1, 'gather': 10, 'gather_speed': 4, 'convert': 360, 'convert_speed': 2, 'gifted_bonus': '1.5x Honey From Tokens', 'tokens': ['Honey Gift', 'Honey Mark', '#Inspire'], 'passives': [], 'likes': ['Mountain Top', 'Pumpkin'], 'dislikes': ['Spider'], 'favorite': 'pineapple' },
  'Rage': { 'rarity': 'Epic', 'color': 'Red', 'energy': 20, 'speed': 15.4, 'attack': 4, 'gather': 10, 'gather_speed': 4, 'convert': 80, 'convert_speed': 4, 'gifted_bonus': '+10% Bee Attack', 'tokens': ['Token Link', 'Rage', '#Inspire'], 'passives': [], 'likes': ['Rose', 'Spider'], 'dislikes': ['Blue Flower'], 'favorite': 'strawberry' },
  'Riley': { 'rarity': 'Epic', 'color': 'Red', 'energy': 25, 'speed': 15.4, 'attack': 5, 'gather': 10, 'gather_speed': 2, 'convert': 140, 'convert_speed': 4, 'gifted_bonus': '+20% Red Field Capacity', 'tokens': ['Red Boost', '#Inspire'], 'passives': [], 'likes': ['Rose', 'Strawberry', 'Mushroom'], 'dislikes': ['Pine Tree', 'Bamboo'], 'favorite': 'strawberry' },
  'Shocked': { 'rarity': 'Epic', 'color': 'Colorless', 'energy': 20, 'speed': 19.6, 'attack': 2, 'gather': 10, 'gather_speed': 4, 'convert': 80, 'convert_speed': 2, 'gifted_bonus': 'x1.1 White Pollen', 'tokens': ['Haste', 'Token Link', '#Inspire'], 'passives': ['-50% Sleep Time'], 'likes': ['Spider', 'Pineapple'], 'dislikes': ['Mushroom'], 'favorite': 'pineapple' },
  'Baby': { 'rarity': 'Legendary', 'color': 'Colorless', 'energy': 15, 'speed': 10.5, 'attack': 0, 'gather': 10, 'gather_speed': 5, 'convert': 80, 'convert_speed': 5, 'gifted_bonus': '+25% Loot Luck', 'tokens': ['Baby Love', '#Inspire'], 'passives': [], 'likes': ['Dandelion', 'Sunflower', 'Mushroom', 'Blue Flower'], 'dislikes': ['Spider', 'Cactus', 'Pine Tree', 'Rose', 'Stump'], 'favorite': 'strawberry' },
  'Carpenter': { 'rarity': 'Legendary', 'color': 'Colorless', 'energy': 25, 'speed': 11.2, 'attack': 4, 'gather': 10, 'gather_speed': 3, 'convert': 120, 'convert_speed': 4, 'gifted_bonus': '+25% Tool Pollen', 'tokens': ['Pollen Mark', 'Honey Mark+', '#Inspire'], 'passives': [], 'likes': ['Pine Tree', 'Bamboo'], 'dislikes': ['Mountain Top'], 'favorite': 'sunflower_seed' },
  'Demon': { 'rarity': 'Legendary', 'color': 'Red', 'energy': 20, 'speed': 10.5, 'attack': 8, 'gather': 35, 'gather_speed': 4, 'convert': 60, 'convert_speed': 4, 'gifted_bonus': '+20% Instant Bomb Conversion', 'tokens': ['Red Bomb', 'Red Bomb+', '#Inspire'], 'passives': ['Gathering Flames+'], 'likes': ['Spider', 'Mushroom'], 'dislikes': ['Mountain Top'], 'favorite': 'pineapple' },
  'Diamond': { 'rarity': 'Legendary', 'color': 'Blue', 'energy': 20, 'speed': 14, 'attack': 1, 'gather': 10, 'gather_speed': 4, 'convert': 1000, 'convert_speed': 4, 'gifted_bonus': 'x1.2 Convert Rate', 'tokens': ['Honey Gift', 'Blue Boost', '#Inspire'], 'passives': ['Shimmering Honey'], 'likes': ['Blue Flower', 'Pineapple'], 'dislikes': ['Rose'], 'favorite': 'blueberry' },
  'Lion': { 'rarity': 'Legendary', 'color': 'Colorless', 'energy': 60, 'speed': 19.6, 'attack': 9, 'gather': 20, 'gather_speed': 4, 'convert': 160, 'convert_speed': 2, 'gifted_bonus': '+5% Gifted Bee Pollen', 'tokens': ['Buzz Bomb+', '#Inspire'], 'passives': [], 'likes': ['Pineapple', 'Ant Challenge'], 'dislikes': ['Cactus'], 'favorite': 'pineapple' },
  'Music': { 'rarity': 'Legendary', 'color': 'Colorless', 'energy': 20, 'speed': 16.1, 'attack': 1, 'gather': 16, 'gather_speed': 4, 'convert': 240, 'convert_speed': 4, 'gifted_bonus': '+25% Polle From Bee Gathering', 'tokens': ['Focus', 'Token Link', 'Melody', '#Inspire'], 'passives': [], 'likes': ['Clover', 'Dandelion'], 'dislikes': ['Cactus'], 'favorite': 'blueberry' },
  'Ninja': { 'rarity': 'Legendary', 'color': 'Blue', 'energy': 20, 'speed': 21, 'attack': 4, 'gather': 10, 'gather_speed': 2, 'convert': 80, 'convert_speed': 3, 'gifted_bonus': '+5% Bee Movespeed', 'tokens': ['Blue Bomb+', 'Haste', '#Inspire'], 'passives': [], 'likes': ['Bamboo', 'Blue Flower'], 'dislikes': ['Mushroom'], 'favorite': 'sunflower_seed' },
  'Shy': { 'rarity': 'Legendary', 'color': 'Red', 'energy': 40, 'speed': 18.2, 'attack': 2, 'gather': 10, 'gather_speed': 2, 'convert': 320, 'convert_speed': 4, 'gifted_bonus': '+5% Bee Ability Pollen', 'tokens': ['Red Bomb', 'Red Boost', '#Inspire'], 'passives': ['Nectar Lover'], 'likes': ['Strawberry', 'Pumpkin'], 'dislikes': ['Pine Tree'], 'favorite': 'strawberry' },
  'Buoyant': { 'rarity': 'Mythic', 'color': 'Blue', 'energy': 60, 'speed': 14, 'attack': 3, 'gather': 15, 'gather_speed': 5, 'convert': 150, 'convert_speed': 3, 'gifted_bonus': 'x1.2 Capacity', 'tokens': ['Blue Bomb+', 'Inflate Balloon', '#Suprise Party', '#Inspire'], 'passives': ['Balloon Enthusiast'], 'likes': ['Coconut', 'Mountain Top', 'Bamboo', 'Blue Flower'], 'dislikes': [], 'favorite': 'blueberry' },
  'Fuzzy': { 'rarity': 'Mythic', 'color': 'Colorless', 'energy': 50, 'speed': 11.9, 'attack': 3, 'gather': 100, 'gather_speed': 6, 'convert': 40, 'convert_speed': 6, 'gifted_bonus': 'x1.1 Bomb Power', 'tokens': ['Buzz Bomb+', 'Fuzz Bombs', '#Pollen Haze', '#Inspire'], 'passives': ['Fuzzy Coat'], 'likes': ['Pine Tree', 'Dandelion'], 'dislikes': ['Pepper'], 'favorite': 'pineapple' },
  'Precise': { 'rarity': 'Mythic', 'color': 'Red', 'energy': 40, 'speed': 11.2, 'attack': 8, 'gather': 20, 'gather_speed': 4, 'convert': 130, 'convert_speed': 4, 'gifted_bonus': '+3% Super-Crit Chance', 'tokens': ['Target Practice', '#Inspire'], 'passives': ['+5% Critical Chance', '+3% Super-Crit Chance', 'Sniper'], 'likes': ['Rose', 'Mountain Top'], 'dislikes': ['Pine Tree', 'Bamboo'], 'favorite': 'sunflower_seed' },
  'Spicy': { 'rarity': 'Mythic', 'color': 'Red', 'energy': 20, 'speed': 14, 'attack': 5, 'gather': 14, 'gather_speed': 4, 'convert': 200, 'convert_speed': 2, 'gifted_bonus': '+25% Flame Duration', 'tokens': ['Rage', 'Inferno', '#Flame Fuel', '#Inspire'], 'passives': ['Steam Engine'], 'likes': ['Pepper'], 'dislikes': ['Stump'], 'favorite': 'strawberry' },
  'Tadpole': { 'rarity': 'Mythic', 'color': 'Blue', 'energy': 10, 'speed': 11.2, 'attack': 0.5, 'gather': 10, 'gather_speed': 6, 'convert': 120, 'convert_speed': 4, 'gifted_bonus': '+25% Bubble Duration', 'tokens': ['Blue Boost', '#Baby Love', 'Summon Frog', '#Inspire'], 'passives': ['Gathering Bubbles+'], 'likes': ['Pine Tree', 'Stump'], 'dislikes': ['Cactus'], 'favorite': 'blueberry' },
  'Vector': { 'rarity': 'Mythic', 'color': 'Colorless', 'energy': 45.6, 'speed': 16.24, 'attack': 5, 'gather': 18, 'gather_speed': 4, 'convert': 144, 'convert_speed': 2.72, 'gifted_bonus': '+15% Mark Duration', 'tokens': ['Pollen Mark+', 'Triangluate', '#Mark Surge', '#Inspire'], 'passives': [], 'likes': ['Coconut', 'Spider'], 'dislikes': ['Pineapple'], 'favorite': 'sunflower_seed' },
  'Bear': { 'rarity': 'Event', 'color': 'Colorless', 'energy': 35, 'speed': 14, 'attack': 5, 'gather': 15, 'gather_speed': 2, 'convert': 200, 'convert_speed': 2, 'gifted_bonus': '+10% Pollen', 'tokens': ['Bear Morph', '#Inspire'], 'passives': [], 'likes': ['Pine Tree', 'Pumpkin',], 'dislikes': ['Blue Flower'] },
  'Cobalt': { 'rarity': 'Event', 'color': 'Blue', 'energy': 35, 'speed': 18.2, 'attack': 6, 'gather': 10, 'gather_speed': 4, 'convert': 120, 'convert_speed': 3, 'gifted_bonus': '+15% Instant Blue Conversion', 'tokens': ['Blue Pulse', 'Blue Bomb Sync', '#Inspire'], 'passives': [], 'likes': ['Pine Tree', 'Clover'], 'dislikes': ['Pineapple'] },
  'Crimson': { 'rarity': 'Event', 'color': 'Red', 'energy': 35, 'speed': 18.2, 'attack': 6, 'gather': 10, 'gather_speed': 4, 'convert': 120, 'convert_speed': 3, 'gifted_bonus': '+15% Instant Red Conversion', 'tokens': ['Red Pulse', 'Red Bomb Sync', '#Inspire'], 'passives': [], 'likes': ['Rose', 'Clover'], 'dislikes': ['Pineapple'] },
  'Digital': { 'rarity': 'Event', 'color': 'Colorless', 'energy': 20, 'speed': 11.9, 'attack': 1, 'gather': 10, 'gather_speed': 4, 'convert': 80, 'convert_speed': 4, 'gifted_bonus': '+1% Ability Duplication Chance', 'tokens': ['Glitch', 'Mind Hack', '#Map Corruption', '#Inspire'], 'passives': ['Drive Expansion'], 'likes': ['Coconut', 'Mountain Top', 'Dandelion'], 'dislikes': ['Pine Tree'] },
  'Festive': { 'rarity': 'Event', 'color': 'Red', 'energy': 20, 'speed': 16.1, 'attack': 1, 'gather': 40, 'gather_speed': 4, 'convert': 150, 'convert_speed': 1, 'gifted_bonus': 'x1.25 Convert Rate At Hive', 'tokens': ['Honey Mark', 'Red Bomb+', 'Festive Gift', '#Inspire'], 'passives': [], 'likes': ['Pine Tree', 'Mountain Top', 'Mushroom'], 'dislikes': ['Blue Flower'] },
  'Gummy': { 'rarity': 'Event', 'color': 'Colorless', 'energy': 50, 'speed': 14, 'attack': 3, 'gather': 10, 'gather_speed': 4, 'convert': 700, 'convert_speed': 4, 'gifted_bonus': '+5% Honey Per Pollen', 'tokens': ['Glob', 'Gumdrop Barrage', '#Inspire'], 'passives': [], 'likes': ['Mountain Top', 'Pineapple', 'Stump'], 'dislikes': ['Pumpkin'] },
  'Photon': { 'rarity': 'Event', 'color': 'Colorless', 'energy': Infinity, 'speed': 21, 'attack': 3, 'gather': 20, 'gather_speed': 2, 'convert': 240, 'convert_speed': 2, 'gifted_bonus': '+5% Instant Conversion', 'tokens': ['Haste', 'Beamstorm', '#Inspire'], 'passives': [], 'likes': ['Pumpkin', 'Pineapple'], 'dislikes': ['Clover'] },
  'Puppy': { 'rarity': 'Event', 'color': 'Colorless', 'energy': 40, 'speed': 16.1, 'attack': 2, 'gather': 25, 'gather_speed': 4, 'convert': 280, 'convert_speed': 4, 'gifted_bonus': '+20% Bond From Treats', 'tokens': ['Puppy Love', 'Fetch', '#Inspire'], 'passives': [], 'likes': ['Pumpkin', 'Clover'], 'dislikes': ['Rose'] },
  'Tabby': { 'rarity': 'Event', 'color': 'Colorless', 'energy': 28, 'speed': 16.1, 'attack': 4, 'gather': 10, 'gather_speed': 4, 'convert': 160, 'convert_speed': 3, 'gifted_bonus': '+50% Critical Power', 'tokens': ['Scratch', 'Tabby Love', '#Inspire'], 'passives': [], 'likes': ['Spider', 'Clover'], 'dislikes': ['Cactus'] },
  'Vicious': { 'rarity': 'Event', 'color': 'Blue', 'energy': 50, 'speed': 17.5, 'attack': 8, 'gather': 10, 'gather_speed': 4, 'convert': 80, 'convert_speed': 4, 'gifted_bonus': '-15% Monster Respawn Time', 'tokens': ['Blue Bomb+', 'Impale', '#Inspire'], 'passives': [], 'likes': ['Rose', 'Cactus'], 'dislikes': ['Dandelion'] },
  'Windy': { 'rarity': 'Event', 'color': 'Colorless', 'energy': 20, 'speed': 19.6, 'attack': 3, 'gather': 10, 'gather_speed': 3, 'convert': 180, 'convert_speed': 2, 'gifted_bonus': '+15% Instant White Conversion, x2 Boosts From Clouds', 'tokens': ['White Boost', 'Rain Cloud', 'Tornado', '#Inspire'], 'passives': [], 'likes': ['Coconut', 'Dandelion'], 'dislikes': ['Strawberry', 'Bamboo'] }};
const menuNames = ["items", "quests", "bees", "badges", "settings", "shop"];
const itemStats = {
	//type
	//consumables: limit, max, cooldown in secs, duration, name, desc, buff name, buff desc
	"beequip_case": ["case"],
	"cog": ["misc"],
	"ticket": ["misc"],
	"sprinkler": ["consumable", true, 1, 1, Infinity, "Sprinkler Builder", "Use while standing in flowers to place a Sprinkler.", "Sprinkler", "Increases flower grow speed"],
	"gumdrops": ["consumable", false, 0, 2, 5, "Gumdrops", "Use while standing in a field to cover flowers in goo.", "Gumdrops", "Goo grants bonus honey"],
	"coconut": ["consumable", true, 500, 10, "N/A", "Coconut", "Drops a huge Coconut into the field, converting Pollen into Honey Tokens."],
	"stinger": ["consumable", false, 0, 1, 30, "Stinger", "Grants your beest x1.5 attack for 30 seconds.", "Stinger", "x1.5 attack"],
	"snowflake": ["consumable", false, 0, 3, 9, "Snowflake", "Sends a cool, soothing breeze.", "Cool Breeze", "+*% Convert Rate At Hive#+*% Pollen From Tools#+*% Bee Gather Pollen#+*% Honey Per Pollen#+*% Loot Luck#x1.25 Capacity"],
	"micro_converter": ["consumable", true, 15, 5, "N/A", "Micro-Converter", "Instantly convers all Pollen in your bag to Honey."],
	"honeysuckle": ["toggleable", false, 0, 30, "N/A", "Honeysuckle", "Makes bees instantly convert some Pollen into Honey when your bag becomes full."],
	"field_dice": ["dice", false, 0, 1, 900, "Field Dice", "Boosts a random field, granting +100% pollen for 15 minutes.", "* Field Boost", "+100% * Field Pollen"],
	"smooth_dice": ["dice", false, 0, 2, 900, "Smooth Dice", "Boosts 2 random fields with +200% pollen for 15 minutes.", "x2 * Field Boost", "+200% * Field Pollen"],
	"loaded_dice": ["dice", true, 25, 3, 900, "Loaded Dice", "Boosts 3 random fields with +300% pollen for 15 minutes. A bit biased towards the field you're in...",  "x3 * Field Boost", "+300% * Field Pollen"],
	"jelly_beans": ["consumable", true, 100, 30, 60, "Jelly Beans", "Scatters various buff-granting beans on nearby flowers. Works best when shared.", "* Jelly Bean", "*"],
	"red_extract": ["consumable", false, 0, 1, 600, "Red Extract", "Grants x1.25 Red Pollen for 10 minutes.", "Red Extract", "x1.25 Red Pollen"],
	"blue_extract": ["consumable", false, 0, 1, 600, "Blue Extract", "Grants x1.25 Blue Pollen for 10 minutes.", "Blue Extract", "x1.25 Blue Pollen"],
	"glitter": ["consumable", false, 0, 1, 900, "Glitter", "Boosts the field you're standing in, granting +100% pollen for 15 minutes.", "* Field Boost", "+100% * Field Pollen"],
	"glue": ["consumable", false, 0, 1, 600, "Glue", "Grants x1.25 Pollen From Bee Gathering and Tools for 10 minutes.", "Glue", "x1.25 Bee Gather Pollen and Tools"],
	"oil": ["consumable", false, 0, 1, 600, "Oil", "Grants x1.2 Bee and Player Movespeed for 10 minutes.", "Oil", "x1.2 Bee and Player Movespeed"],
	"enzymes": ["consumable", false, 0, 1, 600, "Enzymes", "Grants +10% Instant Conversion and x1.25 Convert Rate for 10 minutes", "Enzymes", "+10% Instant Conversion#x1.25 Conversion Rate"],
	"tropical_drink": ["consumable", false, 0, 1, 600, "Tropical Drink", "Grants x1.25 White Pollen, +10% Instant Conversion, and +5% Critical Chance for 10 minutes.", "Tropical Drink", "x1.25 White Pollen#+5% Critical Chance"],
	"purple_potion": ["consumable", false, 0, 2, 900, "Purple Potion", "Grants x1.25 capacity and the improved boosts of Red and Blue Extracts and Glue for 15 minutes.", "Purple Potion", "x1.25 Capacity#x1.25 Convert Rate At Hive#x1.5 Red Pollen#x1.5 Blue Pollen#x1.3 Bee Gather Pollen#x1.3 Pollen From Tools"],
	"super_smoothie": ["consumable", false, 0, 3, 1200, "Super Smoothie", "Grants the improved boosts of many consumable items combined for 20 minutes!", "Super Smoothie", "x1.5 Capacity#x1.6 Red Pollen#x1.6 Blue Pollen#x1.6 White Pollen#x1.4 Bee Gather Pollen#x1.4 Pollen From Tools#x2 Convert Rate#x1.5 Convert Rate At Hive#+12% Instant Conversion#+7% Critical Chance#x1.25 Bee Movespeed#x1.25 Player Movespeed"],
	"marshmallow_bee": ["consumable", true, 25, 1, 1800, "Marshmallow Bee", "+50% White Pollen, +50% Capacity, and +250% Convert Rate for 30 minutes.", "Marshmallow Bee", "+50% White Pollen#+50% Capacity#+250% Conversion Rate"],
	"magic_bean": ["consumable", false, 0, 3, "N/A", "Magic Bean", "Plants a random Sprout in the field you're standing in."],
	"festive_bean": ["consumable", false, 0, 3, "N/A", "Festive Bean", "Plants a Festive Sprout in the field you're standing in."],
	"cloud_vial": ["consumable", true, 10, 2, 180, "Cloud Vial", "Summons a Cloud in the field you're standing in. Lasts for 3 minuts.", "Cloud Boost", "+25% Pollen#+10% Unique Instant Conversion"],
	"night_bell": ["consumable", false, 0, 1, "N/A", "Night Bell", "Summons nighttime. A Moon Sprout and Vicious Bee are guaranteed to appear."],
	"box-o-frogs": ["consumable", false, 0, 1, 180, "Box-O-Frogs", "Summons 3 Frogs that last for 3 minutes.", "Box-O-Frogs", "+3 Bubbles Per Second"],
	"translator": ["npcs"],
	"present": ["npcs"],
	"spirit_petal": ["misc"],
	"ant_pass": ["misc"],
	"robo_pass": ["misc"],
	//treats: bond, gifted chance, req favorite, favorite mult, mutation chance w/ radio, radio chance, mut chance w/o radio, desc
	"treat": ["treat", 10, [0, 0, 0, 0, 0, 0], false, 0, 0, 0, 0, "Increases your bond with a bee by 10."],
	"atomic_treat": ["treat", 1000, [0, 0, 0, 0, 0, 0], false, 0, 1, 0, 1, "Always causes a random Mutation in a bee!"],
	"star_treat": ["treat", 1000, [1, 1, 1, 1, 1, 1], false, 0, 0, 0, 0, "Turns a bee into a Gifted bee!"],
	"sunflower_seed": ["treat", 25, [0.000083, 0.000125, 0.0001, 0.000083, 0.0000417, 0], true, 2, 0.00004, 0, 0, "Increases your bond with a bee by 25."],
	"strawberry": ["treat", 25, [0, 0.000125, 0.0001, 0.000083, 0.0000417, 0], true, 2, 0.00004, 0, 0, "Increases your bond with a bee by 25."],
	"pineapple": ["treat", 25, [0, 0.000125, 0.0001, 0.000083, 0.0000417, 0], true, 2, 0.00004, 0, 0, "Increases your bond with a bee by 25."],
	"blueberry": ["treat", 25, [0, 0.000125, 0.0001, 0.000083, 0.0000417, 0], true, 2, 0.00004, 0, 0, "Increases your bond with a bee by 25."],
	"bitterberry": ["treat", 100, [0, 0, 0, 0, 0, 0], false, 0, 0.01, 0, 0.001, "Increases bond with a bee by 100. Small chance to cause Mutations."],
	"neonberry": ["treat", 500, [0, 0, 0, 0, 0, 0], false, 0, 0, 1, 0, "Increases bond with a bee by 500 and makes it Radioactive for a while."],
	"moon_charm": ["treat", 250, [0, 0, 0, 0, 0, 0], false, 0, 0.0004, 0, 0, "Increases your bond with a bee by 250."],
	"gingerbread_bear": ["treat", 250, [0.01, 0.01, 0.01, 0.01, 0.01, 0.01], false, 0, 0, 0, 0, "Grants 250 bond and has a 1% chance to turn a bee gifted."],
	"aged_gingerbread_bear": ["treat", 500, [0.011, 0.011, 0.011, 0.011, 0.011, 0.011], false, 0, 0, 0, 0, "Grants 500 bond and has a 1.1% chance to turn a bee gifted."],
	//drives: consumables, buff name, buff desc, digital buff
	"white_drive": ["drive", true, 5, 300, 300, "White Drive", "Boosts White pollen, capacity, and attack for a round of Robo Bear's Challenge.", "White Drive", "x1.25 White Pollen#x1.25 White Field Capacity#+1 White Bee Attack", "+0.25 Gather Amount"],
	"red_drive": ["drive", true, 5, 300, 300, "Red Drive", "Boosts Red pollen, capacity, and attack for a round of Robo Bear's Challenge.", "Red Drive", "x1.25 Red Pollen#x1.25 Red Pollen Capacity#+1 Red Bee Attack", "+0.03 Attack"],
	"blue_drive": ["drive", true, 5,300, 300,  "Blue Drive", "Boosts Blue pollen, capacity, and attack for a round of Robo Bear's Challenge.", "Blue Drive", "x1.25 Blue Pollen#x1.25 Blue Field Capacity#+1 Blue Bee Attack", "+2 Convert Amount"],
	"glitched_drive": ["drive", true, 5, 300, 300, "Glitched Drive", "Boosts pollen, capacity, and attack for around of Robo Bear's Challenge.", "Glitched Drive", "x1.25 Pollen#x1.25 Capacity#+1 Bee Attack", "+0.05% Ability Rate"],
	"comforting_vial": ["consumable", true, 10, 1, 14400, "Comforting Vial", "Grants 4 hours of Comforting Nectar.", "Comforting Nectar", "x* Honey Per Pollen#x* Blue Pollen#x* Convert Rate at Hive#x* Colorless Convert Rate"],
	"invigorating_vial": ["consumable", true, 10, 1, 14400, "Invigorating Vial", "Grants 4 hours of Invigorating Nectar.", "Invigorating Nectar", "x* Honey Per Pollen#x* Red Pollen#x* Convert Rate#x* Bee Attack"],
	"motivating_vial": ["consumable", true, 10, 1, 14400, "Motivating Vial", "Grants 4 hours of Motivating Nectar.", "Motivating Nectar", "x* Honey Per Pollen#x* Blue Pollen#x* Convert Rate#+*% Bee Ability Rate"],
	"refreshing_vial": ["consumable", true, 10, 1, 14400, "Refreshing Vial", "Grants 4 hours of Refreshing Nectar.", "Refreshing Nectar", "x* Honey Per Pollen#x* Blue Convert Rate#x* Red Pollen#+*% Unique Instant Conversion"],
	"satisfying_vial": ["consumable", true, 10, 1, 14400, "Satisfying Vial", "Grants 4 hours of Satisfying Nectar.", "Satisfying Nectar", "x* Honey Per Pollen#x* Honey at Hive#x* Red Convert Rate#x* White Pollen"],
	"nectar_shower_vial": ["consumable", true, 10, 1, "N/A", "Nectar Shower Vial", "Grants 4 hours of all Nectar types!"],
	"pink_balloon": ["consumable", true, 25, 300, 180, "Pink Balloon", "Floats on the field for 3 minutes, storing and doubling pollen you collect beneath it.", "Balloon Aura", "x0.004 Pollen#+0.4% Honey From Tokens"],
	"red_balloon": ["consumable", true, 25, 300, 180, "Red Balloon", "Floats over the field for 3 minutes. Stores up to 5x your capacity and works best with Red flowers.", "Balloon Aura", "x0.004 Pollen#+0.4% Honey From Tokens"],
	"white_balloon": ["consumable", true, 25, 420, 300, "White Balloon", "Floats over the field for 5 minutes. Stores up to 10x your capacity and works best with White flowers.", "Balloon Aura", "x0.004 Pollen#+0.4% Honey From Tokens"],
	"black_balloon": ["consumable", true, 25, 900, 300, "Black Balloon", "Floats over the field for 5 minutes. Stores up to 25x your capacity and increases pollen inside x4.", "Balloon Aura", "x0.004 Pollen#+0.4% Honey From Tokens"],
	//waxes: limit, max, upgrade value, fail chance, destroy, rerolls, clear, desc
	"soft_wax": ["wax", false, 0, 1, 0, 0, 0, false, "Has a 100% chance to slightly improve a bee's Beequip."],
	"hard_wax": ["wax", false, 0, 2, 0.4, 0, 0, false, "Has a 60% chance to improve a bee's Beequip."],
	"caustic_wax": ["wax", false, 0, 4, 0.75, 1, 0, false, "Has a 25% chance to greatly improve a Beequip - but a 75% chance to DESTROY is!"],
	"debug_wax": ["wax", false, 0, 4, 0, 0, 0, false, "100% chance to greatly improve a Beequip."],
	"swirled_wax": ["wax", false, 0, 0, 0, 0, 1, false, "Used to redetermine the stats of a bee's Beequip."],
	"turpentine": ["wax", true, 25, 0, 0, 0, 0, true, "A strong solvent that can remove all Waxes from a bee's Beequip."],
	"paper_planter": ["planter"],
	"ticket_planter": ["planter"],
	"festive_planter": ["planter"],
	"plastic_planter": ["planter"],
	"candy_planter": ["planter"],
	"tacky_planter": ["planter"],
	"pesticide_planter": ["planter"],
	"blue_clay_planter": ["planter"],
	"red_clay_planter": ["planter"],
	"heat-treated_planter": ["planter"],
	"hydroponic_planter": ["planter"],
	"petal_planter": ["planter"],
	"the_planter_of_plenty": ["planter"],
	//eggs: hatch type, chances, gifted chance
	//jelly: hatch type, chances, gifted chance, mutation chance
	"basic_egg": ["egg", false, [0.87, 0.1, 0.025, 0.005, 0], 0.004],
	"silver_egg": ["egg", false, [0, 0.649, 0.3, 0.05, 0.001], 0.004],
	"gold_egg": ["egg", false, [0, 0, 0.79, 0.2, 0.01], 0.004],
	"diamond_egg": ["egg", false, [0, 0, 0, 0.95, 0.05], 0.004],
	"mythic_egg": ["egg", false, [0, 0, 0, 0, 1], 0.004],
	"gifted_silver_egg": ["egg", false, [0, 0.649, 0.3, 0.05, 0.001], 1],
	"gifted_gold_egg": ["egg", false, [0, 0, 0.79, 0.2, 0.01], 1],
	"gifted_diamond_egg": ["egg", false, [0, 0, 0, 0.95, 0.05], 1],
	"gifted_mythic_egg": ["egg", false, [0, 0, 0, 0, 1], 1],
	"star_egg": ["egg", undefined],
	"royal_jelly": ["jelly", false, [0, 0.69996, 0.27, 0.03, 0.00004], 0.004, 0.001],
	"star_jelly": ["jelly", false, [0, 0.69996, 0.27, 0.03, 0.00004], 1, 0.001],
	"bumble_bee_egg": ["egg", true, 0, 0.004],
	"rascal_bee_egg": ["egg", true, 0, 0.004],
	"baby_bee_egg": ["egg", true, 0, 0.004],
	"commander_bee_egg": ["egg", true, 0, 0.004],
	"bear_bee_egg": ["egg", true, 0, 0],
	"cobalt_bee_egg": ["egg", true, 0, 0],
	"crimson_bee_egg": ["egg", true, 0, 0],
	"digital_bee_egg": ["egg", true, 0, 0],
	"festive_bee_egg": ["egg", true, 0, 0],
	"gummy_bee_egg": ["egg", true, 0, 0],
	"photon_bee_egg": ["egg", true, 0, 0],
	"puppy_bee_egg": ["egg", true, 0, 0],
	"tabby_bee_egg": ["egg", true, 0, 0],
	"vicious_bee_egg": ["egg", true, 0, 0],
	"windy_bee_egg": ["egg", true, 0, 0],
	"bear_bee_jelly": ["jelly", true, 0, 0],
	"cobalt_bee_jelly": ["jelly", true, 0, 0],
	"crimson_bee_jelly": ["jelly", true, 0, 0],
	"digital_bee_jelly": ["jelly", true, 0, 0],
	"festive_bee_jelly": ["jelly", true, 0, 0],
	"gummy_bee_jelly": ["jelly", true, 0, 0],
	"photon_bee_jelly": ["jelly", true, 0, 0],
	"puppy_bee_jelly": ["jelly", true, 0, 0],
	"tabby_bee_jelly": ["jelly", true, 0, 0],
	"vicious_bee_jelly": ["jelly", true, 0, 0],
	"windy_bee_jelly": ["jelly", true, 0, 0]};
const rarityColors = {
	"Common": "#B7751F",
	"Rare": "#E4E4E4",
	"Epic": "#FFCC33",
	"Legendary": "#00FFFF",
	"Mythic": "#CC99FF",
	"Event": "#99FF99",
	"gifted": "#FFFF66",
	"ungifted": "#BD9B32"};
const mutationChances = [
	//range: levels 0-10, 11-20, 20+
	//range: min, max 0-10, max 11-20, max 20+
	{name: "+%Attack", chance: 0.179, range: [5, 12.5, 20, 25]},
	{name: "+Attack", chance: 0.0387, range: [1, 1, 2, 3]},
	{name: "+%Convert Amount", chance: 0.179, range: [10, 20, 30, 40]},
	{name: "+Convert Amount", chance: 0.0855, range: [20, 50, 80, 110]},
	{name: "+%Gather Amount", chance: 0.179, range: [10, 20, 30, 40]},
	{name: "+Gather Amount", chance: 0.0855, range: [2, 6, 10, 14]},
	{name: "+%Energy", chance: 0.179, range: [10, 25, 40, 55]},
	{name: "+%Bee Ability Rate", chance: 0.0187, range: [1, 3, 5, 7]},
	{name: "+%Critical Chance", chance: 0.0187, range: [1, 2, 3, 4]},
	{name: "+Movespeed", chance: 0.0187, range: [2, 4, 6, 8]},
	{name: "+%Instant Conversion", chance: 0.0457, range: [8, 14, 20, 26]}];
const bondLevels = [
	10,
	50,
	250,
	1000,
	5000,
	20000,
	80000,
	350000,
	800000,
	2000000,
	4000000,
	8000000,
	15000000,
	30000000,
	150000000,
	600000000,
	2500000000,
	10000000000,
	25000000000,
	500000000000,
	5000000000000,
	100000000000000,
	5000000000000000,
	100000000000000000];
const cardColors = {
	"bee": "#fddf84",
	"consumable": "#5bc1e6",
	"treat": "#A27417",
	"misc": "#f0f0f0",
	"npcs": "#f0f0f0"};
const particlesData = {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#a47620"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#a47620",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "bottom-left",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}