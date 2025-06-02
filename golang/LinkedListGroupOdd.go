package main

import (
	"fmt"
	"strings"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func (n *ListNode) String() string {
	if n == nil {
		return "[]" // Representação para uma lista vazia (ou um ponteiro nil)
	}

	var sb strings.Builder // Usar strings.Builder é eficiente para construir strings em loops
	sb.WriteString("[")

	current := n
	for current != nil {
		sb.WriteString(fmt.Sprint(current.Val)) // Converte o Val (int) para string
		if current.Next != nil {
			sb.WriteString(" -> ")
		}
		current = current.Next
	}
	sb.WriteString("]")
	return sb.String()
}

func main() {
	fmt.Println("Exemplo de Uso - Odd Even Linked List:")

	fmt.Println("\nCaso 1:")
	node := &ListNode{
		Val: 1,
		Next: &ListNode{
			Val: 2,
			Next: &ListNode{
				Val: 3,
				Next: &ListNode{
					Val: 4,
					Next: &ListNode{
						Val:  5,
						Next: nil,
					},
				},
			},
		},
	}

	fmt.Println("Lista Original:", node) // Chama headDaLista.String() automaticamente

	reorderedHead := oddEvenList(node)

	fmt.Println("Lista Reordenada:", reorderedHead)
}

func oddEvenList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	odd := head
	even := head.Next
	evenHead := head.Next

	for even != nil && even.Next != nil {
		odd.Next = even.Next
		odd = odd.Next

		even.Next = odd.Next
		even = even.Next
	}

	odd.Next = evenHead

	return head
}
