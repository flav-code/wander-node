import { Wander } from '../../src'
import 'dotenv/config'

async function main(): Promise<void> {
  const wander = new Wander({
    accessToken: process.env.WANDER_ACCESS_TOKEN,
  })

  const places = await wander.getEvents({
    eventCategoryNames: ['expo'],
    locationFilter: {
      circle: {
        centerLat: 48.866667,
        centerLng: 2.333333,
        maxDistanceInKm: 50,
      },
    },
  })

  for (const place of places) {
    console.log('\n')
    console.log(place.id)
    console.log(place.name)
    console.log(place.image)
  }
}

void main()
