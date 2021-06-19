---
id: 3
title: Can you come up with an idea of an application that uses only buttons and pop-ups?
# image field is not mandatory
# you can skip it to keep the size of blog cards small
# image: https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80
createdAt: "2020-03-28 5:00:00"
tags:
  - buttons
  - pop-ups
  - app development
  - medium
category: app development
author:
  name: ayush
  twitter: akshawz
  image: /images/black-shirt-n-glasses.jpg
---

<span style="font-family: Verdana, sans-serif;">
<b><span style="font-family:Papyrus; font-size:4em">Y</span></b>ou can imagine a lot of games using just these functionalities. 😉

<!--more-->

![The can’t-get-enough-of-it Tic-Tac-Toe](/images/tic-tac-toe.png)

<b><span style="font-family:Papyrus; font-size:4em">F</span></b>or instance, you can design a tic-tac-toe game displaying 9 gray buttons laid out in a 3x3 grid. The first player clicks a button. You change the color of that button to red and you set a variable to remember that choice. The second player clicks a different button. You turn that button to green and again you remember that decision. The first player picks yet another button and you resume the same action as before until either a player managed to align 3 buttons in a row, a column or diagonally ore each button have been clicked. Then you display a pop-up to announce which player won or an even-game. Well, obviously you’ve been accustomed to using the cross-n-circle combination, got the point right?

*We also have the good ‘ol famous **Minesweeper**.*

![The classic of the 1960s, MINESWEEPER!](/images/minesweeper.jpeg)

*Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden “mines” or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. The game originates from the 1960s and has been written for many computing platforms in use today. It has many variations and offshoots.*

>Head [here](https://en.wikipedia.org/wiki/Minesweeper_(video_game)) to know more.

So, if we dive into the basics of the *BlackBox* behind the working of this classic we get that it uses the buttons on-screen which are represented as unvisited blocks and the visited blocks will represent a number, if being devoid of mines, with aforementioned clues. *The principle behind the same is just keeping track of the buttons being pressed on which the clues further depend.* And once if a press coincides with a mine then you’re way-off, and all the other hidden mines have then been displayed, the fact being its **game-over**.

Coming to think of it, this super addictive fun-piece was just the ***imaginative usage*** *of only buttons and pop-ups!* Just their application being slightly far fetched.

Undertaking this discussion I just had an idea of a childish app!

Suppose we have a grid that only displays simple buttons much like the ones in the Minesweeper, but hidden from the naked eye will be the fact that behind some of these buttons are trees, and some have nothing to hide. Now, suppose a person presses a button and that button has nothing to hide, there’s no score, but what happens when someone hits a tree? Well, on hitting a tree-hiding-button, it sets a fire! This fire will burn all the trees which are relational with the tree hit on, row-wise, column-wise and diagonal-wise. The total number of trees burnt to the number of trees total on the board will be the defining score with a game over on achieving the same. On achieving a game over, it might look like this:

<img src="/images/fire-and-trees.png" alt="A sample view for our first considered scenario" style="height: 350px" />

If looked closely, then you’ll notice that that board is of 10x10 dimension, and had 41 total trees before any button was pressed. Now, suppose we press any button, whose location is represented by the flames, our score lands on 11/41. Now there were two more possible scenarios for the same, the first one being the best case where if we pressed any button which comprises of the 29 trees linked together in accordance to the rules, giving a score of 29/41 or if you’ve pressed the button in the second last position in the last row containing the last tree, then alas, you’ll land with a 1/41.

This game can be made more fun with a wholesome class of animations and whatsoever, but the kids will probably get *addicted*. Come to think of it, this game primarily consists of only slightly imaginative use of buttons and display effects, hence the fact is that *even the simplest feature can also result in a certain combination giving us a series of wonderment.* Might as well get started on it!

</span>

<span style="font-family:'Brush Script MT', cursive; font-size:2em">Shower some love 💓 <a href="https://medium.com/@ayushshawz/can-you-come-up-with-an-idea-of-an-application-that-uses-only-buttons-and-pop-ups-7e16618ea78d">here</a>!</span>