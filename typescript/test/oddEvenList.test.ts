import { ListNode } from '../Types/listNode'
import { oddEvenList } from '../oddEvenList'
import { listNodeToArray } from "../helpers/listNodeToArray"






// --- Test ----
describe('oddEvenList', () => {
  test('should return null for one empty list', () => {
    expect(listNodeToArray(oddEvenList(null))).toEqual([]);
  })
})
