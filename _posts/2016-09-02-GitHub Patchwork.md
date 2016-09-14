---
layout: post
title:  "GitHub Patchwork!"
date:   2016-09-02 16:34:25
categories:
tags: featured
image: /assets/article_images/patchwork/Octocat.png
image2: /assets/article_images/patchwork/GHPatchwork-mobile1.png
fontcolor: "#333333"
readcolor: "#333333"
---

This week I attended GitHub Patchwork event in Tampa. I really enjoyed it. When I went to this I was already familiar with Git.
The beauty about Patchwork is that they assume that you have no working knowledge of Git. There are several 
[demos](https://github.github.com/on-demand/) that are available which walk you through everything from the start. I will include some
helpful links at the end of this post.

I focused on the Git command line tutorial just to get used to the commands.
I have used Git in the terminal before however I have to look up the commands each time I try to use them.
I thought I would share some of the things that I learned. One of the things that was always a bit unclear to me was the command
git push origin master. What confused me was the word origin. When I used git I primarily used it on my local machine so I never
really used the push command. I have recently started pushing my code up to GitHub. During the tutorial about using git on the command line,
it walked me through pushing code up to a remote host. Below is an introduction to some basic git commands.

# Set a new remote
To add a new remote, use the git remote add command on the terminal, in the directory your repository is stored at.
A remote is a location of where the remote repository is at. By setting the remote it makes pushing and pulling code to the remote
repository very easy.

The git remote add command takes two arguments:

* A remote name, for example, origin
* A remote URL, for example, https://github.com/user/repo.git

The example command would be:

```
git remote add origin https://github.com/user/repo.git 
```


By setting the remote you can know use the name of the remote in push and pull commands
For example:

```
git push origin master
```

This command pushes all changes up to the remote repository named origin on the master branch

# Verify new remote

To verify or check what the remote is you can type the following command:

```
git remote -v
```

Below is an example output


    origin  https://github.com/user/repo.git (fetch)
    origin  https://github.com/user/repo.git (push)



# Helpful Links

[Patchwork Curriculum](https://patchwork.github.io/curriculum/)<br>
[GitHub On Demand Training](https://github.github.com/on-demand/)<br>
[Informative Video Explaining Open Source](https://www.youtube.com/watch?v=Tyd0FO0tko8)


