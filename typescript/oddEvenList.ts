import { ListNode } from './types/listNode'

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next || !head.next.next) {
    //List with 0, 1 or 2 is already correct or can't be sorted
    return head;
  }

  let odd: ListNode = head; // Start at the first node (odd)
  let even: ListNode | null = head.next; //Start at the second node (even)

  const evenHead: ListNode | null = head.next // Take the head of EvenNodeList

  while (even && even.next) {

    // link the actual odd to the next odd
    odd.next = even.next
    odd = odd.next!; // odd.next is guarantee to be a ListNode because of the loop condition


    // link the actual even to the next even
    even.next = odd.next;
    even = even.next
  }

  // Conect the final of odd list to the start of even list
  odd.next = evenHead;

  return head;
}
