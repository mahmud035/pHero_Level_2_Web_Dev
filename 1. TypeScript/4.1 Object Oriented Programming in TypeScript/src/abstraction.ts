// interface

// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle: IVehicle = {
//   name: 'Car',
//   model: '2000',
// };

//* Abstraction with "interface"
interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  startEngine(): void {
    console.log(`I am starting engine`);
  }

  stopEngine(): void {
    console.log(`I am stopping engine`);
  }

  move(): void {
    console.log(`I am moving engine`);
  }

  test() {
    console.log(`I am for testing purpose`);
  }
}

const vehicle1 = new Vehicle('Car', 'Toyota', 2000);

//* Abstraction with "abstract class"
abstract class Vehicle2 {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;
}

class Car extends Vehicle2 {
  startEngine(): void {
    console.log(`I am starting Engine`);
  }

  stopEngine(): void {
    console.log(`I am stopping engine`);
  }
}
