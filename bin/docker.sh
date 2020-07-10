#!/bin/bash

DIRECTORY=$(dirname $(realpath $0 ))

docker run -it --rm \
  --name easy-pwa-js \
  -v "$DIRECTORY/..":/home/node/app \
  -w /home/node/app \
  -p 8080:8080 \
  -u $(id -u ${USER}):$(id -g ${USER}) \
  node:14 \
  bash
