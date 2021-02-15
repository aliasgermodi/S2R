// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Test API',
    });
});
// Import contact controller
var restController = require('./restController');
// Contact routes
router.route('/restaurant')
    .get(restController.index)
    .post(restController.new);
router.route('/restaurant/:restaurant_id')
    .get(restController.view)
// Export API routes
module.exports = router;