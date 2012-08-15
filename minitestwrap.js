
var green = '\033[32m';
var reset = '\033[0m';
var red   = '\033[31m';

var minitestwrap = {
  methods: {
    bE: function() {},
    aE: function() {},
    bA: function() {},
    aA: function() {}
  },
  beforeEach: function(cb) {this.methods.bE = cb},
  afterEach: function(cb) {this.methods.aE = cb},
  beforeAll: function(cb) {this.methods.bA = cb},
  afterAll: function(cb) {this.methods.aA = cb},
  tests: {},
  addTest: function(name, test) {
    this.tests[name] = test;
  },
  run: function() {
    this.methods.bA();
    for(test in this.tests) {
      this.methods.bE();
      process.stdout.write("-> " + test);
      process.stdout.write(red);
      this.tests[test]();
      process.stdout.write(reset);
      process.stdout.write(green + " Successful ");
      console.log(reset);
      this.methods.aE();
    }
    this.methods.aA();
  }
};


module.exports = minitestwrap;
