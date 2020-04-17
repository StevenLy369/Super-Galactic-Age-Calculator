/* eslint-disable no-undef */
import { Age } from '../src/age';









describe('Age', () => {
  let year;

  beforeEach(() => {
    year = new Age();
    year.age = 10;

  });

  // test('age should return false, if age is less than 0' , () => {
  //   year.mercuryAge();
  //   expect(year.mercuryAge()).toEqual(false);
  // });

  test('age on mercury should be 2.4', () => {
    year.mercuryAge();
    
    expect(year.mercuryOld).toEqual(2.4);

  });


  test('age on venus should be 6.2', () => {
    year.venusAge();
    expect(year.venusOld).toEqual(6.2);
  });


  test('age on mars should be 18.8' , () => {
    year.marsAge();
    expect(year.marsOld).toBeCloseTo(18.8);
  });

  test('age on jupiter should be around 118.6' , () => {
    year.jupiterAge();
    expect(year.jupiterOld).toBeCloseTo(118.6);

  });




  

});
