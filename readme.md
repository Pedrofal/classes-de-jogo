# Hero Adventure

This project introduces a JavaScript class `Hero` that represents a hero in an adventure, allowing them to perform attacks based on their specified type.

## Description

The `Hero` class has the following properties:

- `name`: Represents the hero's name.
- `age`: Represents the hero's age.
- `type`: Indicates the hero's type such as mage, warrior, monk, or ninja.

Additionally, it includes a method:

- `attack()`: Executes an attack based on the hero's type, displaying a corresponding attack message.

### Attack Types

- **Mage**: Uses magic.
- **Warrior**: Wields a sword.
- **Monk**: Utilizes martial arts.
- **Ninja**: Throws a shuriken.

## Usage

### Setup

1. Clone the repository.
2. Open the project in your preferred code editor.

### Example

```javascript
// Creating a hero instance
const myHero = new Hero('Hero A', 30, 'mage');

// Attacking as a mage
myHero.attack(); // Output: The mage attacked and used magic
