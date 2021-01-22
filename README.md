# Issue Refs Parser

GitHub Action to parse linked references from a string such as a issue or pull request body.

This action simply uses [issue-parser](https://www.npmjs.com/package/issue-parser) to parse.

## Inputs

### `body`

**Required**. Raw input string to be parsed. It is intended to be a string such as a issue body, a pull request body or a its comment.

### `self_slug`

Optional. Slug string of the repository where the action runs. The format is `"owner/repo"`.
It teaches the action which reference or URL is to the same repository.

## Outputs

Each output is a comma-separated string.

### `refs`

Referenced issue numbers in the same repository. Excludes actions such as "Fix" or "Duplicate of".

Output example: `1,2,3`

### `external_refs`

Referenced issue refs in different repositories. Excludes actions such as "Fix" or "Duplicate of".

Output example: `octocat/Hello-World#1,octocat/Hello-World#2`

## Example Usage

```yaml
on:
  issue_comment:
    types: [created, edited]

jobs:
  parse-comment:
    runs-on: ubuntu-latest
    name: Parse Comment
    steps:
      - name: Issue Refs Parser Action
        uses: FujiHaruka/issue-refs-parser-action@v1.0
        id: action
        with:
          body: ${{ github.event.comment.body }}
          self_slug: octocat/Hello-World
      - name: Get The Outputs
        run: |
          echo "refs: ${{ steps.action.outputs.refs }}"
          echo "external_refs: ${{ steps.action.outputs.external_refs }}"
```
