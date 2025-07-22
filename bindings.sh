#!/bin/bash

BINDINGS_FILE=".dev.vars"

if [ -f "$BINDINGS_FILE" ]; then
  echo "--compatibility-flags nodejs_compat --vars $(cat $BINDINGS_FILE | tr '\n' ' ')"
else
  echo "--compatibility-flags nodejs_compat"
fi