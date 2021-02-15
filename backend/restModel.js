// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var restaurantSchema = mongoose.Schema({
    restaurant: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Restaurant = module.exports = mongoose.model('Restaurant', restaurantSchema);
module.exports.get = function (callback, limit) {
    Restaurant.find(callback).limit(limit);
}