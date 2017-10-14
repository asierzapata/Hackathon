var _ = require('lodash');

const api = {
    resolveLink : resolveLink
}

module.exports = api;

function resolveLink(link,params){
    _.forIn(params,function(value,key){
        link = _.replace(link, '##'+key+'##', value);
    })
    return link
}

