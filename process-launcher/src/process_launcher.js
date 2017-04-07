#!/usr/bin/env node
const io = require('socket.io-client');
const spawn = require('child_process').spawn;

const socket = io.connect('http://localhost:3000', { reconnect: true });

let child;

function start(identifier) {
  function runCommand(command, options) {

    console.log(command, options);
    child = spawn(command, options);

    child.stdout.on('data', (data) => {
      process.stdout.write(data);
    });

    child.stderr.on('data', (data) => {
      process.stdout.write(data);
    });

    child.on('close', () => {
      console.log("Process exited waiting for command...");
    });
  }

  socket.on(identifier, (data) => {
    console.log(child);
    if (child) {
      child.kill('SIGINT');
    }
    console.log(data);

    const slicedCommand = data.split(' ');
    const mainCommand = slicedCommand[0];
    const options = [slicedCommand.slice(1).join(' ')];

    runCommand(mainCommand, options);
  });

  console.log(`Wrapper started and listening for identifier ${identifier}...`);
}

start(process.argv[2]);