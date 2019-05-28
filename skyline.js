var getSkyline = function (buildings) {
  const max = buildings.reduce((max, b) => Math.max(max, b[1]), 0); // Get max array length

  const skyline = merge(buildings.map(b => convert(b, max)), max); // Convert buildings then merge

  return getEnds(skyline, max);
}

var getEnds = function (skyline, max) {
  const endPoints = [];
  let currentHeight = 0;

  for (let i = 0; i < max; i++) {
    if (currentHeight !== skyline[i]) {
      endPoints.push([i, skyline[i]]);
      currentHeight = skyline[i];
    }
  }

  endPoints.push([max, 0]);

  return endPoints;
}

var merge = function (buildings, max) {
  if (buildings.length === 0) return new Array(max).fill(0);
  if (buildings.length === 1) return buildings[0];

  const mid = Math.floor(buildings.length / 2);

  const left = merge(buildings.slice(0, mid), max);
  const right = merge(buildings.slice(mid), max);

  return _merge(left, right, max);
}

var _merge = function (b1, b2, max) {
  const m = new Array(max);

  for (let i = 0; i < max; i++) {
    m[i] = Math.max(b1[i], b2[i]);
  }

  return m;
}

var convert = function (b, max) {
  const m = new Array(max).fill(0);

  for (let i = b[0]; i < b[1]; i++) m[i] = b[2];

  return m;
}