import { ListNode } from "../types/listNode"

export function listNodeToArray(head: ListNode | null): number[] {
  const arr: number[] = [];
  let current = head;

  while (current) {
    arr.push(current.val)
    current = current.next
  }


  return arr;
}

