#!/bin/bash
# Script to change commit message during rebase

# Check if we're in a rebase
if [ -f .git/rebase-merge/message ]; then
  # We're in the middle of a rebase, change the message
  echo "chore: add logo, error handling, SEO, and optimizations" > .git/rebase-merge/message
  exit 0
fi

# If we're editing a commit message
if [ -f "$1" ]; then
  # This is the commit message file
  echo "chore: add logo, error handling, SEO, and optimizations" > "$1"
  exit 0
fi

exit 0

