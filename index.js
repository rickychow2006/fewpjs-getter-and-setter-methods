// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return this.diameter =  this.radius * 2;
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    set circumference(newCir){
        this.radius = newCir / 2 / Math.PI;
    }

    get area(){
        return this.radius * this.radius * Math.PI;
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI);
    }
}