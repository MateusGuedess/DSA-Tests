import { oddEvenList } from '../oddEvenList'
import { listNodeToArray } from "../helpers/listNodeToArray"
import { arrayToListNode } from '../helpers/arrayToListNode';

// --- Test ----
describe('oddEvenList', () => {
  test('deve retornar null para uma lista vazia', () => {
    expect(listNodeToArray(oddEvenList(null))).toEqual([]);
  });

  test('deve retornar a mesma lista para um único nó', () => {
    const head = arrayToListNode([1]);
    expect(listNodeToArray(oddEvenList(head))).toEqual([1]);
  });

  test('deve retornar a mesma lista para dois nós', () => {
    const head = arrayToListNode([1, 2]);
    expect(listNodeToArray(oddEvenList(head))).toEqual([1, 2]);
  });

  test('deve reordenar uma lista de três nós', () => {
    const head = arrayToListNode([1, 2, 3]);
    expect(listNodeToArray(oddEvenList(head))).toEqual([1, 3, 2]);
  });

  test('deve reordenar uma lista de quatro nós', () => {
    const head = arrayToListNode([1, 2, 3, 4]);
    expect(listNodeToArray(oddEvenList(head))).toEqual([1, 3, 2, 4]);
  });

  test('Exemplo 1 do problema: [1, 2, 3, 4, 5]', () => {
    const head = arrayToListNode([1, 2, 3, 4, 5]);
    expect(listNodeToArray(oddEvenList(head))).toEqual([1, 3, 5, 2, 4]);
  });

  test('Exemplo 2 do problema: [2, 1, 3, 5, 6, 4, 7]', () => {
    const head = arrayToListNode([2, 1, 3, 5, 6, 4, 7]);
    expect(listNodeToArray(oddEvenList(head))).toEqual([2, 3, 6, 7, 1, 5, 4]);
  });
});
