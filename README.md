# launchpad-macro-receiver
[![Coverage Status](https://coveralls.io/repos/github/Duncan-Alexander-Coutts/launchpad-commander/badge.svg?branch=master)](https://coveralls.io/github/Duncan-Alexander-Coutts/launchpad-commander?branch=master)
[![Build Status](https://travis-ci.org/Duncan-Alexander-Coutts/launchpad-commander.svg?branch=master)](https://travis-ci.org/Duncan-Alexander-Coutts/launchpad-commander)

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

Leveraging an [existing node midi library](https://github.com/justinlatimer/node-midi) I have designed an implemented a solution which allows the user to associate a command with each button fo the launchpad.

## Components

This project consists of two sub-projects which work together to produce the solution.

### launchpad-server

This socket.io node app sets up a midi connection to the launchpad hardware and responds to and controls all interactions with the hardware. 

It loads a configuration JSON file (launchpad-server/src/config/config.json) set up by the user. This configuration is a
2-dimensional array of objects that maps directly to the 8x8 matrix of buttons. Each object within the array describes which
command should be run when the button it refers to is pressed.

The app initially reads this config and determines which buttons should be lit up and appear active to the user.

When a button is pressed the corresponding command is loaded from the config and emitted as a socket.io message to
any listening clients. It is intended that there is 1 launchpad-server instance to server many process-launcher instances.

Furthermore, in addition to the command that is expressed in each configuration item, the 'target' property of each item determines which instance of process-launcher will be targeted to launch the given command. 

### process-launcher

The purpose of this node app is to connect via socket.io to an instance of the launchpad server. It is intended that the user installs process-launcher as a global npm package so that it can be run easily from any terminal window.

The process launcher can be run like so once installed globally from any terminal window.

`MacBook-Pro:~ duncancoutts$ launcher 'client'`

The 'client' parameter in the above example corresponds to the 'target' property in the launchpad-server configuration. Therefore, 
the process-launcher instance started from the above command will run the command of a button pressed on the launchpad hardware where that button's configuration has a target property of 'client'. 

As long as the process-launcher instance is alive it will continue to react and run the command that has been emitted to it. This is perfect for re-running commands when needed.