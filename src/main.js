"use strict";

const issueParser = require("issue-parser");
const parse = issueParser("github");

const main = ({ body, slug }) => {
  const parsed = parse(body);
  const isSameRepository = (ref) => !ref.slug || ref.slug === slug;
  const outputs = [
    {
      key: "refs",
      value: parsed.refs.filter(isSameRepository).map((ref) => ref.issue),
    },
    {
      key: "external_refs",
      value: parsed.refs
        .filter((ref) => !isSameRepository(ref))
        .map((ref) => `${ref.slug}#${ref.issue}`),
    },
  ];
  return outputs;
};

module.exports = main;
