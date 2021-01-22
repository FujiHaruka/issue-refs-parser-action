# Issue Refs Parser

GitHub Action to parse linked references from a string such as a issue or pull request body.

This action simply uses [issue-parser](https://www.npmjs.com/package/issue-parser) to parse.

## Inputs

### `body`

**Required**. Raw input string to be parsed. It is intended to be a string such as a issue body, a pull request body or a its comment.

### `selfSlug`

Optional. Slug string of the repository where the action runs. The format is `"owner/repo"`.
It teaches the action which reference or URL is to the same repository.

## Outputs

Each output is a comma-separated string.

### `refs`

Referenced issue numbers in the same repository.

### `external_refs`

Referenced issue refs in different repositories.

### `actions`

Referenced issue numbers with actions in the same repository.

### `external_actions`

Referenced issue refs with actions in different repositories.

### `mentions`

Mentioned users.

## Example Usage

TODO:
