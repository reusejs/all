#!/bin/bash
cd libs/$1
npm version patch
cd ../..
npm nx build $1
cp libs/$1/README.md dist/libs/$1/README.md
cd dist/libs/$1
npm publish --access public
cd ../../..