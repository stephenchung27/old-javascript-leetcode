/*
Topological Sort
Dependency set - a bunch of vertices that are dependent on other vertices
Only on directed acyclical graphs

Trick is to number last to first
*/

class TopologicalSort {
  constructor(graph) {
    this.graph = graph;
    this.sortedArray = new Array(graph.vertices.length);
    this.visited = {};
  }

  execute() {
    // sortedArray.compact is the array without null values;
    const n = this.graph.vertices.length - 1;
    const compactSortedArray = sortedArray.filter(node => node != null);
    
    while (sortedArray.length !== compactSortedArray.length) {
      const currentVertex = null;

      for (let vertex of this.graph.vertices) {
        if (this.visited[vertex.objectId] === null) {
          currentVertex = vertex;
          break;
        }
      };

      n = this.dfsHelper(currentVertex, n)
    }
  }

  dfsHelper(startVertex, n) {
    this.visited[startVertex.objectId] = true;

    for(let edge of startVertex.edges) {
      if (this.visited[edge.endVertex.objectId] === null) {
        n = dfsHelper(edge.endVertex, n);
      }
    };

    this.sortedArray[n] = startVertex;

    return n - 1;
  }


}