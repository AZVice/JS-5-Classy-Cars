class Vehicle{
    constructor(model){
        this.model = model
    }
    drive(){
        return this.model + " " + "drives"
    }
}

class Truck extends Vehicle{
    constructor(model, towinCapacity){
        super(model)
        this.towinCapacity = towinCapacity
    }
    drive(){
        return this.model + "drives"
    }

}

let testvehicle = new Vehicle("chicken")
let truckTest = new Truck("superChicken", 9000)


class Sedan extends Vehicle{
    constructor( model, blackUpCamera){
        super(model)
        this.blackUpCamera = blackUpCamera
    }
}
let sedanTest = new Sedan("little chiken", true)



class Suv  extends Vehicle{
    constructor(model, offroadPackage){
        super(model)
        this.offroadPackage = offroadPackage
    }
}

let SUVTest = new Suv("Mid Chicken", true)

class EVsedan extends Sedan{
    constructor(model, blackUpCamera){
        super(model, blackUpCamera)
        
    }
    recharge(){
        return `${this.model} recharges`
    }
}

let EVTest = new EVsedan("Superchicken", true)