## How OOP Pillars Reduce Complexity in Large-Scale TypeScript Projects

**Introduction**
As applications grow, managing logic becomes harder—files get bigger, responsibilities blur, and bugs become difficult to track. This is where Object-Oriented Programming (OOP) helps us.

The four pillars of OOP—Encapsulation, Abstraction, Inheritance, and Polymorphism—are not just theoretical concepts. In real TypeScript projects, they help structure code, isolate complexity, and improve maintainability.

In this blog, we will break down how each pillar works and how it directly reduces complexity in large-scale systems.


> Encapsulation — Controlling Access of the Data

Encapsulation means bundling data and methods together and restricting direct access to internal details.
Example:
```ts
class BankAccount {
    public readonly id : number;
    public name: string;
    private balance : number;

    constructor ( id: number, name: string, balance : number) {
        this.id = id
        this.name = name
        this.balance = balance
    }

    addbalance (taka: number) {
        this.balance += taka;
        return this.balance
    }
}


const masadBank = new BankAccount(123, "masad", 10000);

console.log(masadBank.addbalance(20000));
```

Why it reduces complexity:
- Prevents accidental data modification
- Creates a clear API for interaction
- Keeps internal logic isolated

> Abstraction — Hiding Unnecessary Details

Abstraction focuses on exposing only what is necessary while hiding implementation details.

We can get the idea of the abstraction by two method 
1. Interface
2. Abstract class

Example:
```ts
//InterFace
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements MediaPlayer {
  play() {
    console.log("Play");
  }
  pause() {
    console.log("Pause");
  }
  stop() {
    console.log("Stop");
  }
}

const masadPlayer = new MusicPlayer();
masadPlayer.play();


//Abstruct Class
abstract class MediaPlayer1 {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class Music extends MediaPlayer1 {
    play() {
        console.log("Playyyyyy")
    }

    pause() {
        console.log("Pauseeee")
    }

    stop() {
        console.log("Stoppppp")
    }
}

const masudPlay = new Music();

masudPlay.play()
```

Why it reduces complexity:
- Developers focus only on "what" not "how"
- Reduces cognitive load
- Makes systems easier to extend

> Inheritance — Reusing Logic

Inheritance allows one class to reuse properties and methods of another.
Example:

```ts
class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  sleepTime(numOfHour: number) {
    console.log(`${this.name} ${numOfHour} ghonta ghumay`);
  }
}

//Puta person class take inherit kore felse tai kono super daoa lage nai automatic niye nise
class Student extends Person {}

const student1 = new Student("masad", 22, "Chittagong");

student1.sleepTime(7);

```

Why it reduces complexity:
- Eliminates duplicate code
- Centralizes shared logic
- Makes updates easier

> Polymorphism — One Interface, Multiple Behaviors

Polymorphism allows different classes to implement the same method in different ways.
Example:

```ts
class Shape {
    getArea () : number {
        return 0;
    }
}

class Circle extends Shape { 
    radius : number;

    constructor(radius : number) {
        super()
        this.radius = radius
    }
    getArea() : number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape{
    height : number;
    width : number;


    constructor(height : number , width: number) {
        super()
        this.height = height
        this.width = width
    }

    getArea () : number {
        return this.height * this.width;
    }
}

const getArea = (params : Shape) => {
    console.log(params.getArea());
}

const shape = new Shape();
const circle = new Circle(10);
const rectangle = new Rectangle(5 , 4);

getArea(shape);
getArea(circle);
getArea(rectangle);
```

Why it reduces complexity:
- Makes code flexible and extensible
- Reduces conditional logic (no need for if/else chains)
- Encourages consistent interfaces


Conclusion

The four pillars of OOP are not just theory—they are practical tools for managing complexity.

- Encapsulation → protects data
- Abstraction → simplifies usage
- Inheritance → reuses logic
- Polymorphism → adds flexibility