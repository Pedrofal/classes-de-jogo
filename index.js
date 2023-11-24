

class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    
    attack() {
      let attackType = '';
  
      if (this.type === 'mage') {
        attackType = 'used magic';
      } else if (this.type === 'warrior') {
        attackType = 'used a sword';
      } else if (this.type === 'monk') {
        attackType = 'used martial arts';
      } else if (this.type === 'ninja') {
        attackType = 'used a shuriken';
      } else {
        attackType = 'used an undefined attack';
      }
  
      console.log(`The ${this.type} attacked and ${attackType}`);
    }
  }
  
  
  const myHero = new Hero('Hero A', 30, 'mage');
  myHero.attack(); 
  
  const anotherHero = new Hero('Hero B', 25, 'warrior');
  anotherHero.attack(); 
  