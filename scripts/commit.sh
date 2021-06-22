#!/bin/bash

if git diff --exit-code --quiet db/data.json
then
    echo "no changes..."
else
    git add db/data.json
    git commit -m "update data"
    git add README.md
    git commit -m "update readme"
    git push origin main
fi