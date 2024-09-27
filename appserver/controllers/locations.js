module.exports.homelist = function(req, res) {
    res.render('location-list', {
        title: 'touristplaces - find a place to work with wifi',
        pageHeader: {
            title: 'TOURIST PLACES',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? touristplaces helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let tourist help you find the place you're looking for.",
        locations: [{
            name: 'Charminar',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['street shopping', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'taj mahal',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['gifts', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'red fort',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
    }]
  });
  };
  module.exports.locationInfo = function(req, res){
      res.render('location-info', { title: 'LocationInfo' });
    };
  module.exports.locationInfo1 = function(req, res){
      res.render('locations-info2', { title: 'LocationInfo1' });
    };
  module.exports.locationInfo2 = function(req, res){
      res.render('locations-info3', { title: 'LocationInfo2' });
    };
  module.exports.addReview = function(req, res){
      res.render('locations-review-form', { title: 'ADD REVIEW' });
    };
    
    
  