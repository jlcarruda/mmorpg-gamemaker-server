require('dotenv').config()
const args = require('minimist')(process.argv.slice(2))
const maps = require('./src/game/maps')
const package = require('./package.json')

const env = args.env || "local"

const config = {
  game: {
    starting_zone: "rm_starting_town",
    maps,
    movement_max_desync: process.env.MOVEMENT_DESYNC_PACKET_THRESHOLD,
    tile_size: process.env.MOVEMENT_TILE_SIZE,
  },
  encryption: {
    jwt: {
      secret: process.env.JWT_SECRET,
      // expiresIn: process.env.JWT_EXPIRATION
    }
  },
  services: {
    gameworld: {
      host: process.env.GAMEWORLD_SERVER_HOST,
      port: process.env.GAMEWORLD_SERVER_PORT,
    },
    rest: {
      host: process.env.REST_SERVER_HOST,
      port: process.env.REST_SERVER_PORT,  
    }
  },
  database: {
    uri: process.env.DATABASE_URI
  }
}

module.exports = config
