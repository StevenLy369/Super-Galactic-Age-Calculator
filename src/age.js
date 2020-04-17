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

  //   mercuryAge(){
  //     if (this.age > 0){
  //       this.mercuryOld = this.age * this.mecury;
  //       this.mercuryExpect = this.lifeExpect * this.mecury;

  //     }else{
  //       return false;
  //     }
    
  //   }

  //   venusAge(){
  //     if(this.age > 0) {
  //       this.venusOld = this.age * this.venus;
  //       this.venusExpect = this.lifeExpect * this.venus;
  //     }else {
  //       return false;
  //     }
  //   }

  //   marsAge(){
  //     if(this.age > 0) {
  //       this.marsOld = this.age * this.mars;
  //       this.marsExpect = this.lifeExpect * this.mars;
  //     }else {
  //       return false;
  //     }
  //   }

  //   jupiterAge(){
  //     if(this.age > 0){
  //       this.jupiterOld = this.age * this.jupiter;
  //       this.jupiterExpect = this.lifeExpect * this.jupiter;
  //     }else{
  //       return false;
  //     }
  //   }
     

  calculateExpect(){
    if (this.age > 0){
      this.mercuryOld = this.age * this.mecury;
      this.mercuryExpect = this.lifeExpect * this.mecury;
      this.venusOld = this.age * this.venus;
      this.venusExpect = this.lifeExpect * this.venus;
      this.marsOld = this.age * this.mars;
      this.marsExpect = this.lifeExpect * this.mars;
      this.jupiterOld = this.age * this.jupiter;
      this.jupiterExpect = this.lifeExpect * this.jupiter;
  
    }else{
      return false;
    }
      



  }




}
