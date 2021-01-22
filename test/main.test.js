"use strict";

const { strict: assert } = require("assert");
const main = require("../src/main");

it("parses", () => {
  const outputs = main({
    body: `
#1
Fixes #2
octocat/Hello-World#3
octocat/Spoon-Knife#4
https://github.com/octocat/Hello-World/issues/5
https://github.com/octocat/Spoon-Knife/issues/6
`,
    slug: "octocat/Hello-World",
  });
  assert.deepEqual(outputs, [
    { key: "refs", value: ["1", "3", "5"] },
    {
      key: "external_refs",
      value: ["octocat/Spoon-Knife#4", "octocat/Spoon-Knife#6"],
    },
  ]);
});
