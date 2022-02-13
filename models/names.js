/*global sequelize Sequelize */
module.exports = (function () {
    'use strict';
    var blurbs = sequelize.define('blurb', {
        firstName: {
            type: Sequelize.STRING
            },
        lastName: {
            type: Sequelize.STRING
            }
    },
    {schema: 'mobile'});
    
    // // force: true will drop the table if it already exists
    blurbs.sync({force: false}).then(function () {
        // Table created
        return true;
    });
        return blurbs;
    }());

