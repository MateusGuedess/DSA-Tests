export class ListNode {
  val: number; // O valor que o nó guarda
  next: ListNode | null


  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

