import axios from "axios";

const checkLoginApi=async(mobile:string)=>{
    var data = JSON.stringify({
        "collection": "admin",
        "database": "AnilGym",
        "dataSource": "Cluster0",
        "filter":{mobile:mobile}
    });
    var config = {
        method: 'post',
        url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-btvsn/endpoint/data/v1/action/findOne',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'V07hAhdrq9SWtSUUK225998RzXj3Mf2iWXmiC3UsvR8VlvwMcUQlzvtYXWkfAVyI',
        },
        data: data
    };
    const response = axios(config)
    .then(function (response:any) {
        return response.data
    })
    .catch(function (error:any) {
        return error.response.data;
    });
    return response;
}

const addNewMember=async()=>{
    var data = JSON.stringify({
        "collection": "members",
        "database": "AnilGym",
        "dataSource": "Cluster0",
        "document": {
            "name":"Harjinder Singh",
            "mobile":"9509301559",
            "status":true,
            "photo":"",
            "idType":"",
            "idFront":"",
            "idBack":"",
            "dueDate":"",
            "feesDetails":[],
            "createdAt": { "$date": new Date() }
        }
    });
    var config = {
        method: 'post',
        url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-btvsn/endpoint/data/v1/action/insertOne',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'V07hAhdrq9SWtSUUK225998RzXj3Mf2iWXmiC3UsvR8VlvwMcUQlzvtYXWkfAVyI',
        },
        data: data
    };
    const response = axios(config)
    .then(function (response:any) {
        return response.data
    })
    .catch(function (error:any) {
        return error.response.data;
    });
    return response;
}

export{
    checkLoginApi,
    addNewMember
}