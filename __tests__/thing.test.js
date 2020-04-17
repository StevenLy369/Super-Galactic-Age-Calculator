/* eslint-disable no-undef */
import { Age } from '../src/age';









describe('Age', () => {
  let year;

  beforeEach(() => {
    year = new Age();
    year.age = -5;

  });

  test('age should return false', () => {
    year.mercuryAge();
    expect(year.mercuryAge()).toEqual(false);
  })

  // test('age should be 2.4', () => {
  //   year.mercuryAge();
    
  //   expect(year.age).toEqual(2.4);



  // });




  

});
