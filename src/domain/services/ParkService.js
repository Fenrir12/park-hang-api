class ParkService {
  static async getNearbyPins({ longitude, latitude, radius, pinRepository }) {
    return await pinRepository.findNearby(longitude, latitude, radius)
  }

  static async getParksByIdList({ parksIds, limit, parkRepository }) {
    const limitedIds = parksIds.slice(0, limit ?? 30)
    const parks = await parkRepository.findByIds(limitedIds)
    const parkMap = new Map(parks.map((park) => [park.id, park]))
    return limitedIds.map((id) => parkMap.get(id)).filter(Boolean)
  }
}

module.exports = { ParkService }
