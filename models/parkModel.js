const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Feature'],
    },
    properties: {
        _id: String,
        addr_housenumber: String,
        addr_street: String,
        leisure: String,
        name: String,
        name_fr: String,
        _tainted: Boolean,
    },
    geometry: {
        type: {
            type: String,
            enum: ['Polygon'],
            required: true,
        },
        coordinates: {
            type: [[[Number]]],
            required: true,
        },
    },
    id: String,
});

// If you want to use GeoJSON spatial queries, create a 2dsphere index on geometry:
featureSchema.index({ geometry: '2dsphere' });

const Park = mongoose.model('Park', featureSchema);

module.exports = Park;