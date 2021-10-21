// 图是网络结构的抽象模型，是一组由边连接的节点。
// 图可以表示任何二元关系，比如道路、航班....;一条边只能链接两个节点
// JS中没有图，但是可以用Object和Array构建图。
// 图的表示法：邻接矩阵、邻接表、关联矩阵.....

// 邻接表表示法
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
};

// 深度优先遍历算法
// 访问根节点。
// 对根节点的没访问过的相邻节点挨个进行深度优先遍历。

function dfs (node, graph) {
  const visited = new Set();
  a(node);
  function a (node) {
    console.log(node);// 访问起始节点
    visited.add(node);
    graph[node].forEach(item => {
      if (!visited.has(item)) {
        a(item)
      }
    });
  }
}

// dfs(2, graph)


// 广度优先遍历

// 新建一个队列，把根节点入队。
// 把队头出队并访问。
// 把队头的没访问过的相邻节点入队。
// 重复第二、三步，直到队列为空。
function bfs (node, graph) {
  const queue = [node];
  const visited = new Set();
  visited.add(node)
  while (queue.length) {
    const firstNode = queue.shift();
    console.log(firstNode) // 访问队头
    graph[firstNode].forEach(nextNode => {
      if (!visited.has(nextNode)) {
        queue.push(nextNode);
        visited.add(nextNode);
      }
    });
  }
}

bfs(2, graph)