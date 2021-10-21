// tree: 一种分层数据的抽象模型。
// 前端工作中常见的树包括：DOM树、级联选择、树形.....
// JS中没有树，但是可以用Object和Array构建树。
// 树的常用操作：深度/广度优先遍历先中后序遍历。

const tree = {
  value: "a",
  children: [{
    value: "b",
    children: [{
      value: "d",
      children: []
    }, {
      value: "e",
      children: []
    }]
  }, {
    value: "c",
    children: [{
      value: "f",
      children: []
    },
    {
      value: "g",
      children: []
    }]
  }]
}


// 深度优先遍历（dfs）:尽可能深地搜索树的分支
// 算法：
// 访问根节点。
// 对根节点的children挨个进行深度优先遍历。
function dfs (root) {
  console.log(root.value) // 访问节点
  root.children.forEach(dfs);// 递归遍历子节点
}

dfs(tree);

// 广度优先遍历：先访问离根节点最近的子节点
// 算法：
// 新建一个队列，把根节点入队。
// 把队头出队并访问。
// 把队头的children挨个入队。
// 重复第二、三步，直到队列为空。

function bfs (root) {
  const list = [];
  list.push(root);
  while (list.length) {
    const tar = list.shift();
    console.log(t.value)
    tar.children.forEach(child => {
      list.push(child)
    });
  }
}
bfs(tree)


// 二叉树（binarytree）
// 树中每个节点最多只能有两个子节点。
// 在JS中通常用Object来模拟二叉树。
const binaryTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    },
  }
};

// 先序遍历算法口诀
// 访问根节点。
// 对根节点的左子树进行先序遍历。
// 对根节点的右子树进行先序遍历。

function preorder (root) {
  if (!root) {
    return;
  }
  console.log(root.value)//访问根节点
  preorder(root.left)
  preorder(root.right)
}
preorder(binaryTree)

// 中序遍历算法口诀
// 对根节点的左子树进行中序遍历。
// 访问根节点。
// 对根节点的右子树进行中序遍历。

function inorder (root) {
  if (!root) {
    return;
  }
  inorder(root.left);
  console.log(root.value);
  inorder(root.right)
}

inorder(binaryTree)

// 后序遍历算法口诀
// 对根节点的左子树进行后序遍历。
// 对根节点的右子树进行后序遍历。
// 访问根节点。

function postorder (root) {
  if (!root) {
    return;
  }
  postorder(root.left);
  postorder(root.right);
  console.log(root.value)
}