# launchpad-macro-receiver
Launch macros from pressing buttons on Launchpad

![lit launchpad buttons](/readme-assets/lit-buttons.jpg)

### Purpose

During development there a many commands that I use over and over. e.g.
* running/re-starting client application node server
* running/re-starting server application
* loading one of many data sets
* fetching new changes from git
* running unit and end-to-end tests

the list goes on...

I often have multiple terminal windows open to execute these commands like below...
### Problem - Breaking my workflow

In order to run these commands I normally have to switch my focus away from 
my IDE, find the correct terminal window, quit the current process and re-type another command to run.

In addition to breaking my concentration away from my IDE I also often type commands incorrectly, wasting time.

### Solution

I wanted to have a way of running commands by a touch of a button but still targeting a specific terminal window. I thought about using a keyboard with macro buttons, however, I couldn't find anything I liked or would be portable with my laptop setup.

I am also a musician and have a Novation Launchpad (link). It has an 8x8 matrix of buttons with LEDs that can light up with different colours.

Leveraging a node midi library I have designed an implemented a solution which allows the user to associate a command with each button fo the launchpad.

## Components

### launchpad-server

TODO: Insert description and instructions for this component

### process-launcher

TODO: Insert description and instructions for this component