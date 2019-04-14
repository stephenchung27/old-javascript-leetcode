const dijkstras = (graph, source) => {
  const distance = {};

  for (let node in graph) {
    distance[node] = Infinity;
  }

  distance[source] = 0;

  const unvisited = new Set(Object.keys(graph));
  const previous = {};

  while (unvisited.size > 0) {
    const currentNode = minDistanceNode(unvisited, distance);
    unvisited.delete(currentNode);

    for (let neighbor in graph[currentNode]) {
      const distanceFromCurrentToNeighbor = graph[currentNode][neighbor];
      const totalNeighborDistance = distance[currentNode] + distanceFromCurrentToNeighbor;

      if (distance[neighbor] > totalNeighborDistance) {
        distance[neighbor] = totalNeighborDistance;
        previous[neighbor] = currentNode;
      }
    }
  }

  return { distance, previous };
}

const minDistanceNode = (nodes, distance) => {
  return Array.from(nodes).reduce((minNode, node) => (
    distance[node] < distance[minNode] ? node : minNode
  ));
}

let graph = {
  'a': { 'c': 1, 'b': 7 },
  'b': { 'a': 7, 'd': 12, 'e': 13 },
  'c': { 'a': 1, 'd': 20, 'f': 4 },
  'd': { 'b': 12, 'c': 20, 'e': 5 },
  'e': { 'b': 13, 'd': 5, 'f': 9 },
  'f': { 'c': 4, 'e': 9 }
};

let { distance, previous } = dijkstras(graph, 'a');

console.log(distance);
console.log(previous);