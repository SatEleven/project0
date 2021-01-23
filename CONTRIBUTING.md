# Contributing

## Git

General commands:

* `git status`: check current branch, what is to be added (i.e. staged) and/or
  committed.
* `git log`: check history.
* `git branch -a`: see all branches, local and remote.

To better see branches with `git log`:

```_
git log --all --decorate --oneline --graph
```

To make it quicker to type, make a global alias:

```_
git config --global alias.adog "log --all --decorate --oneline --graph"
```

Now `git adog` works.

### Initial setup

Clone repo to a local folder, here called `project0` (owners should not need
to fork).

```_
git clone https://github.com/SatEleven/project0.git project0
cd project0
```

### Making changes (as owners)

Make a new branch if it's a significant change, for example adding a
navbar. If not, then maybe committing directly on `main` is fine.

Try to keep the code on `main` functional.

#### On `main`

On `main`, edit local files then `add` and `commit -m "descriptive message"`,
then `git push`, equivalently `git push origin main`.

#### On a branch

Make a branch then move to it:

```_
git checkout -b add_navbar
```

This is the same as:

```_
git branch add_navbar
git checkout add_navbar
```

On this branch, edit local files, doing `add` and
`commit -m "descriptive message"` often, and finally:

```_
git push -u origin add_navbar 
```

`-u` is short for `--set-upstream`. This creates a new branch on Github.

Now create a pull request, where people can comment and review the changes.
Others can [checkout the remote branch](https://www.git-tower.com/learn/git/faq/checkout-remote-branch/) by making a local branch that tracks that remote branch, and `push` their edits before the pull request is merged.

Any owner can merge changes to the `main` branch and close the pull request.
After merging, it's good to delete:

* The remote branch on Github
* The local reference tracking the remote branch on Github with
  `git remote prune origin`.
* The local branch with `git branch -d add_navbar`.

### Synchronising changes from others

Do `git fetch` often,
[it is safe](https://www.git-tower.com/learn/git/faq/difference-between-git-fetch-git-pull/)
and it makes sure the local repo is up to date with what's on Github.

`git pull` actually merges changes from the remote repo,
[apparently](https://stackoverflow.com/questions/292357/what-is-the-difference-between-git-pull-and-git-fetch)
it is a `fetch` followed by `merge`.
