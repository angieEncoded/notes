- Git branching and merging
```git checkout master```
```git branch new-branch```
```git checkout new-branch```
```git add –A```
```git commit –m "Some commit message"```
```git checkout master```
```git merge new-branch```



- change the default git init branch name to main
```git config --global init.defaultBranch main```

-  Initialize the git repo
```git init```

-  Add a file
```git add "filename"```

-  Add all files
```git add .```

-  Compare changes in files
```git diff "Filename"```

-  What the icons mean
```
# - New files in the repo
+ - New files have been staged
* - Files have been changed
```
-  Check your git configuration
```git config --list```
- (then use Q to quit)

-  Configure your username and email
```git config --global user.name angieEncoded```
```git config --global user.email angieEncoded@gmail.com```
```git config --global core.editor "code --wait" -  Will make git wait until the file being edited is closed```

-  Add much more information to a commit
```git commit -  this will open the editor we set up where we can have a longer commit message```

-  View the differences in a specific commit (SHA hash)
```git diff 1b5d2de```

-  Generate SSH key - open Git bash
```ssh-keygen -t rsa -b 4096 -C "your_email@example.com"```

-  Copy the key to the clipboard
```clip < ~/.ssh/id_rsa.pub```

- Add the key - click on user icon then click on settings

-  Push code to the repo
```git remote add origin git@github.com:angieEncoded/GitHubMasterClass.git```
```git push -u origin master```

-  Pulling from the repo
```git pull remote local```
```(git pull origin master)```

-  Set up tracking - this will watch the repo so you only have to type git pull to sync up
```git branch --set-upstream-to=origin/master```

- Check the status
```git fetch -  Run this first to see the status of the upstream repo```
```git status -  Now you will see the changes```

-  Clone a repo - make the directory then
```git clone http:- pathtoprojecttoclone``` 
-  This will already know about the remote and you don't need to set it up

-  Check out the commits in a repo
```git log```
-  The first commit in the list will be denoted by HEAD

-  check the differences between two commits
```git diff firstSHAIdentifier secondSHAIdentifier```

-  Show details about a specific commit (basicall git log + git diff combined)
```git show SHAIdentifier```

-  View commits before the HEAD commit (This will show 3 commits before)
```git show HEAD~3```

-  Also works with git diff
```git diff HEAD~1 HEAD~4```

-  Get more information about a file
```git annotate filename```

-  Commit without adding first
```git commit -a -m "message"```

-  Reverting changes - before you stage it
```git checkout -- /name/of/file```

-  After staged
```git reset HEAD /name/of/file```
```git checkout -- /name/of/file```

-  After pushed
```git checkout SHAHashNumberOfCommitToRevertTo```
```git push origin master```

-  Add multiple files
```git add .```

-  Can also unstage them all
```git reset HEAD .```

-  Can also revert all changes
```git checkout -- .```

-  Create a new branch
```git branch dev```

-  Look at the branches
```git branch```

-  Change to the new branch
```git checkout dev```

-  Create a feature branch and change to it with one command
```git checkout -b nameOfFeatureBranch```

-  Merge the feture into another branch

-  Keeping files from going up to master
   - create   .gitignore file
   - add paths to it
   - Ignore file
      - /credentials.py
   - Ignore folder
      - text/
   -  Ignore only some files in a folder
      - "/text/*txt"
-  Syncing branches
```git checkout --track origin/test```

-  Checking the branches on the terminal
```git log --graph```

-  Merging branches in the terminal
```git checkout destinationBranch```
```git merge branchToMerge branchToMergeInto```
```git merge source destination```
```git push origin master```
- Delete on github as well if needed```

-  Delete a branch
```git branch -d branchName```

-  Merge conflicts
   - When merges dont happen automatically
   - Git will add markers and ask us what to keep
-  Types of merges
   - Fast-forward merge
      - Jump over to the most recent merge
   - Recursive merge
      - Looks for shared commits - a commit both branches have in common
      - Then will start from there and merge 
-  Merge conflict
   - abort the merge
   ```git merge --abort```