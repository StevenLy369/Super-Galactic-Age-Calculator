export class Age {
  constructor(age, lifeExpect, mercuryOld, venusOld,marsOld,jupiterOld, mercuryExpect,venusExpect,marsExpect, jupiterExpect){
    this.age = age,
    this.mercuryOld = mercuryOld,
    this.mercuryExpect = mercuryExpect,
    this.venusOld = venusOld,
    this.venusExpect = venusExpect,
    this.marsOld = marsOld,
    this.marsExpect = marsExpect,
    this.jupiterOld = jupiterOld,
    this.jupiterExpect = jupiterExpect,
    this.lifeExpect = lifeExpect,
    this.mecury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  
  calculateExpect(){
    if (this.age > 0){
      this.mercuryOld = parseFloat((this.age * this.mecury).toFixed(2));
      this.mercuryExpect = parseFloat((this.lifeExpect * this.mecury).toFixed(2));
      this.venusOld = parseFloat((this.age * this.venus).toFixed(2));
      this.venusExpect = parseFloat((this.lifeExpect * this.venus).toFixed(2));
      this.marsOld = parseFloat((this.age * this.mars).toFixed(2));
      this.marsExpect = parseFloat((this.lifeExpect * this.mars).toFixed(2));
      this.jupiterOld = parseFloat((this.age * this.jupiter).toFixed(2));
      this.jupiterExpect = parseFloat((this.lifeExpect * this.jupiter).toFixed(2));
  
    }else{
      return false;
    }
      



  }




}
