
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {

  const pipe = new OrderByPipe();

  it('transforms unordered array to ordered asc by id', () => {

    let unorderedArray = [{id: 1},{id: 4},{id: 3},{id: 2}];

    let expected = pipe.transform(unorderedArray, 'id', false);

    expect(expected[0].id).toBe(1);
    expect(expected[1].id).toBe(2);
    expect(expected[2].id).toBe(3);
    expect(expected[3].id).toBe(4);
  });

  it('transforms unordered array to ordered desc by id', () => {

    let unorderedArray = [{id: 1},{id: 4},{id: 3},{id: 2}];

    let expected = pipe.transform(unorderedArray, 'id');

    expect(expected[0].id).toBe(4);
    expect(expected[1].id).toBe(3);
    expect(expected[2].id).toBe(2);
    expect(expected[3].id).toBe(1);
  });
});
