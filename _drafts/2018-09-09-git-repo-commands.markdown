---
layout: post
title: "Git Repo Commands"
date: "2018-09-09 14:21:30 -0700"
tags: [GitHub]
---

`ls` - used to list files and directories

`mkdir` - used to create a new directory

`mv` stands for move / to move the file

`cd` - used to change directories

`rm` - used to remove files

`rmdir` - used to remove a directory

`echo` - used to print messages. Just like `console.log` in JavaScript

`$` - in front of a word indicates that it is a Shell variable

`..` dot dot - used to go back a Directory

`;` semicolon - allowed you to write two commands on the same line

`pwd` (print working directory) - used to print whatever the directory the Shell is currently looking at

`.` dot - represents the current directory

`~` - represents my home directory. No matter which directory you are `cd` into, the `~` will show you the home directory

`-l` (dash small l) - added to `ls` to print out the longer more detailed listing of files

`*` - added to list of all the files whose name match that specific pattern. Let say you want to list all the PDF documents in your documents directory... you will enter `ls -l Documents/*.pdf` If you wanted to list all the files whose names start with the a specific word, such as `candy`. You will enter `ls -l candy*`.

`curl` (as in see URL or See a webpage) - used to download a file from the web

`curl -L 'http://google.com'` - with this dash big L `-L` option, means follow redirects and then we will see the source code to the actual google.com homepage.

`-o` dash little o - `curl -o google.html -L 'http://google.com'`  with dash little o `-o` option, followed by the file name we want to save it under, the Shell will create a file with the name and download the source codes into that file.

`cat` - used to read files and output the file contents

`less` - used to show us smaller amount of the file at once

`B` - used to go back

`/` - used to search within the file

`q` - used to quick

`grep` - used to search a text file for lines with particular contents... `grep` `the word you want to search` `the file name`. This will read through the file can prints out the line contain that specific word you want to search.

`grep` `-c` `the word you want to search` grep with dash little c to do a quick count of the word

`wc` - used when we want to know how many times that specific word we want to search appeared in the file or webpage. With dash little l option `-l`, it will tell the `wc` to count the lines.

`LOGNAME` is an environment variable that contains the username of the account you're logged in as

`Path` variable is an important variable that will tell your system where your program files are

Use the `git init` command to create a new, empty repository in the current directory.

The `git clone` command is used to create an identical copy of an existing repository. `$ git clone <path-to-repository-to-clone>`

The `git status` command will display the current status of the repository. `$ git status`

The `git log` command is used to display all of the commits of a repository. `$ git log`

to scroll down, press

  - `j` or `???` to move down one line at a time

  - `d` to move by half the page screen

  - `f` to move by a whole page screen

to scroll up, press

  - `k` or `???` to move _up_ one line at a time

  - `u` to move by half the page screen

  - `b` to move by a whole page screen

press `q` to quit out of the log (returns to the regular command prompt)

`git log --oneline` command with just the short SHA and the commit message

`git log --stat` command which lists the files that are changed as well as the number of added/removed lines

`git log -p` - The `git log` command has a flag that can be used to display the actual changes made to a file. The flag is `--patch` which can be shortened to just `-p`

???? - the file that is being displayed

???? - the hash of the first version of the file and the hash of the second version of the file

??? - the old version and current version of the file

???? - the lines where the file is added and how many lines there are

??? - the actual changes made in the commit

`git log -p --stat` - used to show both with the stats info above the patch info

`git log -w` - used to ignore whitespace changes

`git show` - used to show a specific commit. It can be combined with most of the other flags
