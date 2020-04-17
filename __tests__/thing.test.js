/* eslint-disable no-undef */
import { Age } from '../src/age';


describe('Age', () => {
  let year;

  beforeEach(() => {
    year = new Age();
    year.age = 10;
    year.lifeExpect = 70;

  });

  // test('age should return false, if age is less than 0' , () => {
  //   year.mercuryAge();
  //   expect(year.mercuryAge()).toEqual(false);
  // });

  test('age on mercury should be 2.4', () => {
    year.calculateExpect();
    
    expect(year.mercuryOld).toEqual(2.4);

  });

  test('life expectancy on mercury should be around 16.8',  () => {
    year.calculateExpect();
    expect(year.mercuryExpect).toBeCloseTo(16.8);

  });

  test('age on venus should be 6.2', () => {
    year.calculateExpect();
    expect(year.venusOld).toEqual(6.2);
  });

  test('life expectancy on venus should be around 43.4' ,() => {
    year.calculateExpect();
    expect(year.venusExpect).toBeCloseTo(43.4);
  });


  test('age on mars should be 18.8' , () => {
    year.calculateExpect();
    expect(year.marsOld).toBeCloseTo(18.8);
  });

  test('life expectancy on mars should be around 131.6' ,() => {
    year.calculateExpect();
    expect(year.marsExpect).toBeCloseTo(131.6);
  });


  test('age on jupiter should be around 118.6' , () => {
    year.calculateExpect();
    expect(year.jupiterOld).toBeCloseTo(118.6);

  });

  
  test('life expectancy on jupiter should be around 830.2' ,() => {
    year.calculateExpect();
    expect(year.jupiterExpect).toBeCloseTo(830.2);
  });


});
