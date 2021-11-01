function main () {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const numbersCount = parseInt(readLine().trim(), 10);

  let numbers = [];

  for (let i = 0; i < numbersCount; i++) {
    const numbersItem = parseInt(readLine().trim(), 10);
    numbers.push(numbersItem);
  }

  const res = countDuplicates(numbers);

  ws.write(res + '\n');

  ws.end();
}

function countDuplicates (numbers) {
  console.log(numbers)
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const c = numbers[i]
    if (map.has(c)) {
      map.set(c, map.get(c) + 1)
    } else {
      map.set(c, 1)
    }
  }
  const res = [];
  [...map].map((item) => {
    if (item[1] > 1) {
      res.push(item[0])
    }
  })

  console.log(res)
}


countDuplicates([8,
  1,
  3,
  1,
  4,
  5,
  6,
  3,
  2])