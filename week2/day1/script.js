function sum(array) {
  return array.reduce((prev, cur) => prev + cur, 0);
}

function avarage(array) {
  return sum(array) / array.length;
}

function removeValue(array, value) {
  return array.filter(el => el !== value);
}

function flatten(arrayOfArrays) {
  return arrayOfArrays.reduce(
    (prev, cur) => (Array.isArray(cur) ? prev.concat(cur) : prev.concat([cur])),
    []
  );
}

function insertValue(array, index, value) {
  if (index >= 0 && index < array.length) {
    return [...array.slice(0, index), value, ...array.slice(index)];
  }
  array = [...array];
  array[index] = value;
  return array;
}

function isSorted(array) {
  array = [...array];
  return array.toString() === array.sort().toString();
}

function crossProduct(vect1, vect2) {
  return vect1.reduce((prev, cur, curIndex) => prev + cur * vect2[curIndex], 0);
}

function sameMembers(array1, array2) {
  const s1 = array1.sort([...array1]);
  const s2 = array2.sort([...array2]);

  if (s1.length !== s2.length) return false;
  return s1.every((el, index) => el === s2[index]);
}

const books = [
  {
    author: "Samuel R. Delany",
    title: "Stars in my pockets like grains of sand",
    read: 2001
  },
  {
    author: "J.K Rowling",
    title: "Harry Potter and the philosoper's stone",
    read: 1998
  },
  {
    author: "J.G. Ballard",
    title: "Stars in my pockets like grains of sand",
    read: 2001
  },
  {
    author: "Samuel R. Delany",
    title: "Dhalgren",
    read: 2001
  },
  {
    author: "Philip K. Dick",
    title: "Do androids dream of Electric Sheep",
    read: 1998
  },
  {
    author: "Margaret Atwood",
    title: "The handmaiden's tale",
    read: 1997
  }
];

books.reduce((acc, cur) => {
  acc.hasOwnProperty(cur.read)
    ? Array.from(acc[cur.read].add(cur.title)).sort()
    : (acc[cur.read] = new Set([cur.author]));
  return acc;
}, {});
