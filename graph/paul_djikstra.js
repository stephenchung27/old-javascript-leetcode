/*
Dijkstra's Shortest Path

Used to find the shortest path between two vertices.
Dijkstra's considered to be a greedy algorithm. (Misnomer) More of an impulsive algorithm.

Fringe - a collection of nodes that contains its neighbors and distance to that node
*/

class FringeNode {
  constructor(vertex, distance, precedingVertex) {
    this.vertex = vertex;
    this.distance = distance;
    this.precedingVertex = precedingVertex;
  }
}

class Dijkstra {
  constructor(sourceVertex) {
    this.sourceVertex = sourceVertex;

    this.findPaths();
  }

  findPaths() {
    const paths = {};

    const fringe = [new FringeNode(this.sourceVertex, 0, this.sourceVertex)];

    while (fringe.length > 0) {
      // 1. Remove the closest node
      const closestFringeNode = fringe.reduce((min, node) => min.distance < node.distance ? min : node); // Node with minimum distance
      
      const currentFringeNode = closestFringeNode;
      fringe = fringe.filter(node => node === closestFringeNode);
      
      const currentVertex = currentFringeNode.vertex;
      
      paths[currentVertex.objectId] = currentFringeNode;

      currentVertex.edges.forEach(edge => {
        const newDistance = currentFringeNode.distance + edge.weight;
        const existingFringeNodeIndex = fringe.findIndex(fringeNode => {
          return fringeNode.vertex === edge.endVertex;
        });

        if (existingFringeNodeIndex !== null) {
          const node = new FringeNode(edge.endVertex, newDistance, currentVertex);
          fringe.push(node);
        } else {
          const node = fringe[existingFringeNodeIndex];
          if (newDistance < node.distance) {
            node.distance = newDistance;
            node.precedingVertex = currentVertex;
            fringe[existingFringeNodeIndex] = node;
          }
        }
      });
    }

    this.dijkstraPaths = paths;
  }

  shortestPathDistance(endVertex) {
    const path = this.calculatePath(endVertex);

    return path[path.length - 1].distance;
  }

  summary(endVertex) {
    const path = this.calculatePath(endVertex);

    path.map(fringeNode => `${fringeNode.vertex.data}`);
    path.join(' --> ');
  }

  calculatePath(endVertex) {
    const node = this.dijkstraPaths[endVertex.objectId];
    const pathList = [];

    while (node.precedingVertex !== node.vertex) {
      pathList.unshift(node);
      node = this.dijkstraPaths[node.precedingVertex.objectId];
    }

    pathList.unshift(node);

    return pathList;
  }
}