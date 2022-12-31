# Git and Github

1. git init
2. git add . || git add --all || git add 'filename' 'filename2' ...etc.
3. git commit -m 'ds'

alternatively we can use
`git commit -am "commit-message"`
to add and commit simultaneously, but it won't add newly created files.

4. `git diff` || `git diff 'filename'` to view difference between the working directory and the last commit.

5. to change the working directory code with the last commit
   `git checkout` to change all files `git checkout 'filename'` to change a specific file.

# github

6. goto [github.com/new](https://www.github.com/new) to create new repository.
7. `git add origin "the https://*.git link of your repo"` to link cloud/remote repo to your local git repo.
8. `git push origin main` to push the local repo to the cloud/remote repo on github.
