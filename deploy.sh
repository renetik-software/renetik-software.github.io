#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
#git push -f https://github.com/renetik-software/renetik-software.github.io master
git push -f https://renetik-software:V4c3x2Z1@github.com/renetik-software/renetik-software.github.io master

#git push -f git@github.com:renetik-software/renetik-software.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f https://github.com/rene-dohan/renetik-software-portfolio.git master:gh-pages

cd -
