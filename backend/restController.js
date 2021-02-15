Restaurant = require('./restModel');
// Handle index actions
exports.index = function (req, res) {
    Restaurant.get(function (err, rest) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "restaurant retrieved successfully",
            data: rest
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var rest = new Restaurant();
    rest.restaurant = req.body.restaurant;
    rest.lat = req.body.lat;
    rest.long = req.body.long;
// save the contact and check for errors
    rest.save(function (err) {
        // if (err)
        //     res.json(err);
    res.json({
            message: 'New Restaurant created!',
            data: rest
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Restaurant.findById(req.params.restaurant_id, function (err, restaurant) {
        if (err)
            res.send(err);
        res.json({
            message: 'restaurant details loading..',
            data: restaurant
        });
    });
};
