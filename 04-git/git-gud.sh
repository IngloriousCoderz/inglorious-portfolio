#!/bin/bash
mkdir git-gud
cd git-gud
git init

echo "Hello world!" > file.txt
git add .
git commit -m "Initial commit"

echo "Look ma, no hands!" >> file.txt
git add .
git commit -m "Add some more text"

git checkout -b new-feature

echo "She sells sea shells on the sea shore" >> file.txt
git add .
git commit -m "Add a tonge twister"

git switch master

echo "The shells that she sells are sea shells, I'm sure" >> file.txt
git add .
git commit -m "Add another tongue twister"
