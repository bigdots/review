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

  getParentIndex (index) {
    return Math.floor((index - 1) / 2)
  }

  getLeftIndex (index) {
    return 2 * index + 1
  }

  getRightIndex (index) {
    return 2 * index + 2
  }
  shiftUp (index) {
    if (index === 0) {
      return;  // 堆顶直接返回
    }
    let parentIndex = this.getParentIndex(index);

    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }
  }
  insert (value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1) //上移操作
  }

  pop () {
    this.heap[0] = this.heap.pop(); // 将数组的最后一位元素删除并返回给堆顶
    this.shiftDown(0)
  }

  swap (index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  shiftDown (index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(index, leftIndex)
      this.shiftDown(leftIndex)
    }

    if (this.heap[index] > this.heap[rightIndex]) {
      this.swap(index, rightIndex)
      this.shiftDown(rightIndex)
    }
  }

  // 获取堆顶
  peek () {
    return this.heap[0]
  }
  // 获取堆的大小
  size () {
    return this.heap.length;
  }
}

const h = new Heap();
h.insert(3)
h.insert(2)
h.insert(1)
h.insert(5)
h.insert(6)
h.insert(4)
h.pop();

// 计算第K个最大元素
