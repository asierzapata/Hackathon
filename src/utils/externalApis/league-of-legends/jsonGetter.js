var  client = new (require('node-rest-client')).Client();

var api = {
    jsonGetter: jsonGetter
}

function jsonGetter(link){   
    console.log('--- GETTER ---',link);

    return new Promise(function(resolve,reject){
        client.get(link,function (data,response){
            if(data) resolve(data);
            else reject({status: 500, message: 'There was an error getting the data of the url'})
        })
    });
}

module.exports = api;



