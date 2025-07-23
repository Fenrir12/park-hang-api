const ParkModel = require('../models/parkModel'); // adjust path if needed


/**
 * Find parks near a point within a radius (meters)
 * @param {Number} longitude
 * @param {Number} latitude
 * @param {Number} radiusMeters
 */
exports.getNearbyParks = async (req, res) => {
    try {
        const { lng, lat, radius } = req.query;

        console.log("Nearby parks query", lng, lat, radius);
        if (!lng || !lat || !radius) {
            return res.status(400).json({ message: 'Please provide lng, lat, and radius query parameters' });
        }

        const longitude = parseFloat(lng);
        const latitude = parseFloat(lat);
        const radiusMeters = parseFloat(radius);

        // MongoDB expects radius in radians
        const radiusInRadians = radiusMeters / 6378137;

        const parks = await ParkModel.find({
            geometry: {
                $geoWithin: {
                    $centerSphere: [[longitude, latitude], radiusInRadians],
                },
            },
        });

        res.json(parks);
    } catch (error) {
        console.error('Error fetching nearby parks:', error);
        res.status(500).json({ message: 'Server error' });
    }
};