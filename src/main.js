"use strict";

const issueParser = require("issue-parser");
const { EnhancedArray } = require("./util");
const parse = issueParser("github");

const main = ({ body, slug }) => {
  const parsed = parse(body);
  const isSameRepository = (ref) => !ref.slug || ref.slug === slug;
  const toExternalRef = (ref) => `${ref.slug}#${ref.issue}`;
  const refs = EnhancedArray.from(parsed.refs);
  const outputs = [
    {
      key: "refs",
      value: refs
        .filter(isSameRepository)
        .map((ref) => ref.issue)
        .unique()
        .array(),
    },
    {
      key: "external_refs",
      value: refs
        .filter((ref) => !isSameRepository(ref))
        .map(toExternalRef)
        .unique()
        .array(),
    },
  ];
  return outputs;
};

module.exports = main;
