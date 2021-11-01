// heap:堆是一种特殊的完全二叉树
// 所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点。

// JS中通常用数组表示堆。
// 左侧子节点的位置是2*index +1
// 右侧子节点的位置是2*index +2.
// 父节点位置是（index-1）/2.

// 能高效、快速地找出最大值和最小值，时间复杂度：O（1）
// 找出第K个最大（小）元素。


// 实现最小堆
class Heap {
  constructor() {
    this.heap = [];
  }

  push (item) {
    this.heap.push(item)
    this.up(this.heap.length - 1)
  }

  exchange (parentIndex, currentIndex) {
    const heap = this.heap
    if (heap[parentIndex] > heap[currentIndex]) {
      const temp = heap[parentIndex]
      heap[parentIndex] = heap[currentIndex]
      heap[currentIndex] = temp
    }
  }
  isExchange (parentIndex, currentIndex) {
    const heap = this.heap
    if (heap[parentIndex] > heap[currentIndex]) {
      return true
    } else {
      return false
    }
  }

  up (index) {
    if (index === 0) {
      return;
    }
    let parentIndex = Math.floor((index - 1) / 2)
    if (this.isExchange(parentIndex, index)) {
      this.exchange(parentIndex, index)
      this.up(parentIndex)
    }
  }

  down (parentIndex) {
    if (parentIndex >= this.heap.length - 1) {
      return
    }
    let leftChild = Math.floor(parentIndex * 2 + 1)
    let rightChild = Math.floor(parentIndex * 2 + 2)
    if (this.isExchange(parentIndex, leftChild)) {
      this.exchange(parentIndex, leftChild)
      this.down(leftChild)
    }
    if (this.isExchange(parentIndex, rightChild)) {
      this.exchange(parentIndex, rightChild)
      this.down(rightChild)
    }
  }

  shift () {
    const heap = this.heap;
    heap[0] = heap.pop()
    this.down(0)
  }
}

const h = new Heap();
h.push(3);
h.push(5);
h.push(1);
h.push(2);
h.push(6);

h.shift();

