#minitestwrap

I like using Node's `assert` library but I often wish it had just a little bit more to it, so I wrote this tiny wrapper around it. See the below example for usage.

```javascript
var minitestwrap = require("./minitestwrap");

var assert = require("assert");

minitestwrap.beforeEach(function() {
  console.log("before each");
});
minitestwrap.beforeAll(function() {
  console.log("before all");
});
minitestwrap.afterEach(function() {
  console.log("after each");
});
minitestwrap.afterAll(function() {
  console.log("after all");
});

minitestwrap.addTest("check 2+2", function() {
  assert.equal(2+2, 4);
});

minitestwrap.addTest("Check true is true", function() {
  assert.equal(true, true);
});

minitestwrap.run();
```

If you'd like a proper example, I use the library in my [NodeFetch](https://github.com/jackfranklin/nodefetch) project.
