const _ = require('lodash');
const scans = require('../data/scans.json');

module.exports = function (request) {
    var data = _.clone(scans);
    var params = request.query;
    if (_.keys(params).length > 0) {
        if (params.order) {
            if (_.startsWith(params.order, '-')) {
                data.results = _.orderBy(data.results, [_.trimStart(params.order, '-')], ['desc']);
            } else {
                data.results = _.orderBy(data.results, [params.order], ['asc']);
            }
        }
        data.count = data.results.length;
        if (params.page && params.page_size) {
            var pagedResults = _.chunk(data.results, params.page_size);
            data.results = pagedResults[params.page - 1];
        }
        if (params.name) {
            data.results = _.filter(data.results, result => {
                return _.includes(result.name, params.name);
            });
        }
    }

    return data;
};