class graph {
  constructor() {
    this.adjacencylist = {};
  }
  addvertex(vertix) {
    if (!this.adjacencylist[vertix]) {
      this.adjacencylist[vertix] = [];
      return true;
    }
    return false;
  }
  addedge(vertex1, vertex2) {
    if (this.adjacencylist[vertex1] && this.adjacencylist[vertex2]) {
      this.adjacencylist[vertex1].push(vertex2);
      this.adjacencylist[vertex2].push(vertex1);
      return true;
    }
    return false;
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencylist[vertex1] && this.adjacencylist[vertex2]) {
      this.adjacencylist[vertex1] = this.adjacencylist[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencylist[vertex2] = this.adjacencylist[vertex2].filter(
        v => v !== vertex1
      );
      return true;
    }
    return false;
  }
  removeVertex(vertex) {
    if (!this.adjacencylist[vertex]) return undefined;
    while (this.adjacencylist[vertex].length) {
      let temp = this.adjacencylist[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencylist(vertex);
    return this;
  }
  printgraph() {
    if (Object.keys(this.adjacencylist).length !== 0) {
      console.log('{');
      for (const [key, value] of Object.entries(this.adjacencylist)) {
        console.log('', `${key} : ${value}`);
      }
      console.log('}');
    } else {
      console.log('{}');
    }
  }
}
let mygraph = new graph();
