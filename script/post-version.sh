#!/bin/bash

npm run readme
npm run build
git checkout -- package-lock.json
git commit package.json README.md -m "Version $npm_package_version"

npm run tag
git push
git push --tags
npm publish
