export class Age {
  constructor(age, mercuryOld, venusOld,marsOld,jupiterOld){
    this.age = age,
    this.mercuryOld = mercuryOld,
    this.venusOld = venusOld,
    this.marsOld = marsOld,
    this.jupiterOld = jupiterOld,
    this.mecury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }





  mercuryAge(){
    if (this.age > 0){
      this.mercuryOld = this.age * this.mecury;
    }else{
      return false;
    }
    
  }

  venusAge(){
    if(this.age > 0) {
      this.venusOld = this.age * this.venus;
    }else {
      return false;
    }
  }

  marsAge(){
    if(this.age > 0) {
      this.marsOld = this.age * this.mars;
    }else {
      return false;
    }
  }

  jupiterAge(){
    if(this.age > 0){
      this.jupiterOld = this.age * this.jupiter;
    }else{
      return false;
    }
  }
     




}
