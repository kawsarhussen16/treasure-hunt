import { localStorageMap } from "../data"
/*
let minRowValue = 30
let maxRowValue = 90
let minColValue = 30
let maxColValue = 90*/

let minRowValue = 45
let maxRowValue = 75
let maxColValue = 75

let numRows = maxRowValue - minRowValue

export function addRoomToMap(gameMap, room) {
  let index = currentRoomCoordsToIndex(room.coordinates)
  gameMap[index] = room
  return gameMap
}

export function currentRoomCoordsToIndex(coords) {
  let { x, y } = convertCoordStringToNums(coords);
  return convertXYtoArrayIndex(x, y)
}

export function convertCoordStringToNums(coords) {
  let s = coords.split(',');
  let x = parseInt(s[0].slice(1));
  let y = parseInt(s[1].slice(0, s[1].length - 1));
  return { x, y }
}

export function convertXYtoArrayIndex(x, y) {
  //map[0] = (30,90)
  //map[3599] = (90,30)
  let currentRow = -(y - maxColValue)
  let currentCol = x - minRowValue
  let index = currentRow * numRows + currentCol
  return index
}


export function convertIndextoXY(index) {
  let x = index % numRows + minRowValue
  let y = -Math.floor(index / numRows) + maxColValue
  return { x, y }
}

export function getAdjacentRooms(gameMap, index) {

  let nesw = [];

  let { x, y } = convertIndextoXY(index);

  //North
  if (y < maxColValue - 1) {
    nesw.push(gameMap[convertXYtoArrayIndex(x, y + 1)]);
  } else {
    nesw.push(null);
  }

  //East
  if (x < maxRowValue - 1) {
    nesw.push(gameMap[convertXYtoArrayIndex(x + 1, y)]);
  } else {
    nesw.push(null);
  }

  //South
  if (y > 0) {
    nesw.push(gameMap[convertXYtoArrayIndex(x, y - 1)]);
  } else {
    nesw.push(null);
  }

  //West
  if (x > 0) {
    nesw.push(gameMap[convertXYtoArrayIndex(x - 1, y)]);
  } else {
    nesw.push(null);
  }

  return nesw
}

export function validAdjacentRooms(gameMap, index) {
  let coords = convertIndextoXY(index);
  let currX = coords.x
  let currY = coords.y
  let exits = gameMap[index].exits
  let movementOptions = {}

  for (let i = 0; i < exits.length; i++) {
    var x = currX
    var y = currY
    if (exits[i] === "n") {
      y = currY + 1
    } else if (exits[i] === "s") {
      y = currY - 1
    } else if (exits[i] === "e") {
      x = currX + 1
    } else if (exits[i] === "w") {
      x = currX - 1
    }
    movementOptions[convertXYtoArrayIndex(x, y)] = exits[i]
  }
  return movementOptions
}

//needs currentRoom.exits
export function getRoomWalls(room) {
  let directions = ['n', 's', 'e', 'w']
  let walls = []
  for (let d = 0; d < 4; d++) {
    if (room.exits.indexOf(directions[d]) === -1) {
      //console.log('adding border wall')
      //console.log('directions[d]: ' + directions[d])
      walls.push(directions[d])
    }
  }
  return walls
}

export function getRoomDisplayState(gameMap, index, nesw) {
  let room = gameMap[index]
  if (room !== null) {
    let { x, y } = convertIndextoXY(index)
    if (x === 59 && y === 60) {
      //console.log('shop identified')
      return 'green'
    }
    if (x === 68 && y === 47) {
      //console.log('name change identified')
      return 'blue'
    }
    return 'white' //x
  } else {
    //north
    if (nesw[0] != null) {
      if (nesw[0].exits.indexOf('s') !== -1) {
        return 'grey' //?
      }
    }
    //east
    if (nesw[1] != null) {
      if (nesw[1].exits.indexOf('w') !== -1) {
        return 'grey'
      }
    }
    //south
    if (nesw[2] != null) {
      if (nesw[2].exits.indexOf('n') !== -1) {
        return 'grey'
      }
    }
    //west
    if (nesw[3] != null) {
      if (nesw[3].exits.indexOf('e') !== -1) {
        return 'grey'
      }
    }
  }
  return 'black' //' '
}

export function initTestMap() {
  let gameMap = []
  for (let x = 0; x < 930; x++) {
    gameMap[x] = null;
  }

  let coords = '', index = -1, exits = [], room = {}, roomExits = {}, roomToAdd = {}, x = 0, y = 0
  // console.log('localStorageMap')
  // console.log(localStorageMap)
  for (var roomKey in localStorageMap) {
    room = localStorageMap[roomKey]
    coords = room[0]
    x = coords["x"]
    y = coords["y"]
    index = convertXYtoArrayIndex(x, y)
    roomExits = room[1]
    exits = []
    for (var exitKey in roomExits) {
      exits.push(exitKey)
    }
    roomToAdd = {
      coordinates: "(" + x + "," + y + ")",
      exits: exits
    }
    addRoomToMap(gameMap, roomToAdd)
  }
  return gameMap;
}

export function initTestCurrentRoom() {
  return {
    "room_id": 0,
    "title": "Room 0",
    "description": "You are standing in an empty room.",
    "coordinates": "(60,60)",
    "players": [],
    "items": ["small treasure"],
    "exits": ["n", "s", "e", "w"],
    "cooldown": 60.0,
    "errors": [],
    "messages": []
  }
}

export function initTestCurrentPlayer() {
  return {
    "name": "Testy",
    "networth": 168232,
    "emcumbrance": 1,
    "strength": 10,
    "speed": 10,
    "inventory": ["flower"]
  }
}