/* interfaces */
interface Person {
  name: string
  age: number
}

const sayPerson = ({ name, age }: Person) => {
  console.log(name, age)
}

sayPerson({ name: 'Reuben', age: 24 })

/* enums */
/* numeric enum */
enum Crud {
  Create,
  Retrieve,
  Update,
  Delete
}

console.log(Crud.Create)

/* string enum */
enum Atom {
  Hydrogen = 'HYDROGEN',
  Helium = 'HELIUM'
}

const sayAtom = (atom: Atom) => {
  console.log(atom)
}

sayAtom(Atom.Hydrogen)

/* classes */
enum VehicleType {
  Electric = 'ELECTRIC',
  Combustion = 'COMBUSTION'
}
class Car {
  constructor(type: VehicleTYpe) {
    this.type = type
  }
  start() {
    switch (this.type) {
      case VehicleType.Electric:
        console.log('*silence*')
        break
      case VehicleType.Combustion:
        console.log('vroom')
        break
      default:
        break
    }
  }
}

const tesla = new Car(VehicleType.Electric)
tesla.start()

class ElectricCar extends Car {
  private _fuelEconomy: string = 'great'

  constructor() {
    this.type = VehicleType.Electric
  }

  get fuelEconomy() {
    console.log(this._fuelEconomy)
  }
}

const modelS = new ElectricCar()
modelS.start()
console.log(modelS.fuelEconomy)
