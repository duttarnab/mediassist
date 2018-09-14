module.exports = {

    diseasesQuery:  function (req, res){

        try{
            console.log('>>>'+req.body.queryResult.parameters.disease+'<<<');
            if(req.body.queryResult.parameters.disease == 'cough'){
                return res.ok (
                    {
                        "fulfillmentText": "Cough",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "Cough",
                                "subtitle": "Causes and Treatment",
                                "imageUri": "https://www.dropbox.com/s/0zm3rx3j7ymgk4m/cough.jpg?dl=1",
                                "buttons": [
                                    {
                                        "text": "Cough Causes",
                                        "postback": "http://gurukullearn.com/cough_reason.html"
                                    },
                                    {
                                        "text": "Cough - Treatment to cure",
                                        "postback": "http://gurukullearn.com/cough_remedy.html"
                                    }
                                ]
                            }
                            }
                        ],
                    });
            }
            if(req.body.queryResult.parameters.disease == 'jaundice'){
                return res.ok (
                    {
                        "fulfillmentText": "Jaundice",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "Jaundice",
                                "subtitle": "Causes and Treatment",
                                "imageUri": "https://www.dropbox.com/s/tubu8qwfwru2gqa/liver.jpg?dl=1",
                                "buttons": [
                                    {
                                        "text": "Jaundice Causes",
                                        "postback": "http://gurukullearn.com/jaundice_reason.html"
                                    },
                                    {
                                        "text": "Jaundice - Treatment to cure",
                                        "postback": "http://gurukullearn.com/jaundice_remedy.html"
                                    }
                                ]
                            }
                            }
                        ],
                    });
            }
            if(req.body.queryResult.parameters.disease == 'diabetes'){
                return res.ok (
                    {
                        "fulfillmentText": "Diabetes",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "Diabetes",
                                "subtitle": "Causes and Treatment",
                                "imageUri": "https://www.dropbox.com/s/mjso5nhl1c5d24l/dibetes.jpg?dl=1",
                                "buttons": [
                                    {
                                        "text": "Diabetes Causes",
                                        "postback": "http://gurukullearn.com/diabetes_causes.html"
                                    },
                                    {
                                        "text": "Diabetes - Treatment to cure",
                                        "postback": "http://gurukullearn.com/diabetes_remedy.html"
                                    }
                                ]
                            }
                            }
                        ],
                    });
            }
            if(req.body.queryResult.parameters.disease == 'malaria'){
                return res.ok (
                    {
                        "fulfillmentText": "Malaria",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "Malaria",
                                "subtitle": "Causes and Treatment",
                                "imageUri": "https://www.dropbox.com/s/sg01sxfhh2ywydd/Malaria.jpg?dl=1",
                                "buttons": [
                                    {
                                        "text": "Malaria Causes",
                                        "postback": "http://gurukullearn.com/malaria_causes.html"
                                    },
                                    {
                                        "text": "Malaria - Treatment to cure",
                                        "postback": "http://gurukullearn.com/malaria_remedy.html"
                                    }
                                ]
                            }
                            }
                        ],
                    });
            }
            if(req.body.queryResult.parameters.nutrition == 'protein'){
                return res.ok (
                    {
                        "fulfillmentText": "Protein",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "Protein",
                                "subtitle": "Information",
                                "imageUri": "https://www.dropbox.com/s/9ylprk30ez33owk/protein.png?dl=1",
                                "buttons": [
                                    {
                                        "text": "Protein Information",
                                        "postback": "https://en.wikipedia.org/wiki/Protein_(nutrient)"
                                    }
                                ]
                            }
                        }],
                    });
            }
            if(req.body.queryResult.parameters.nutrition == 'carbohydrates'){
                return res.ok (
                    {
                        "fulfillmentText": "Carbohydrates",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "Carbohydrates",
                                "subtitle": "Information",
                                "imageUri": "https://www.dropbox.com/s/9ifueersj4kaxg7/carbohydrates.png?dl=1",
                                "buttons": [
                                    {
                                        "text": "Carbohydrates Information",
                                        "postback": "https://en.wikipedia.org/wiki/Carbohydrate"
                                    }
                                ]
                            }
                        }],
                    });
            }
            if(req.body.queryResult.parameters.nutrition == 'fat'){
                return res.ok (
                    {
                        "fulfillmentText": "Fat",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "Fat",
                                "subtitle": "Information",
                                "imageUri": "https://www.dropbox.com/s/iy16gulfy2n02gg/fat.png?dl=1",
                                "buttons": [
                                    {
                                        "text": "Fat Information",
                                        "postback": "https://en.wikipedia.org/wiki/Fat"
                                    }
                                ]
                            }
                        }],
                    });
            }
            if(req.body.queryResult.parameters.nutrition == 'vitamin'){
                return res.ok (
                    {
                        "fulfillmentText": "Vitamin",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "Vitamin",
                                "subtitle": "Information",
                                "imageUri": "https://www.dropbox.com/s/hjd00kxhp7eiz88/vitamin.jpg?dl=1",
                                "buttons": [
                                    {
                                        "text": "Vitamin Information",
                                        "postback": "https://en.wikipedia.org/wiki/Vitamin"
                                    }
                                ]
                            }
                        }],
                    });
            }
            if(req.body.queryResult.parameters.nutrition == 'mineral'){
                return res.ok (
                    {
                        "fulfillmentText": "Minerals",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "Minerals",
                                "subtitle": "Information",
                                "buttons": [
                                    {
                                        "text": "Minerals Information",
                                        "postback": "https://en.wikipedia.org/wiki/Mineral_(nutrient)"
                                    }
                                ]
                            }
                        }],
                    });
            }
            return res.ok (
                {
                    "fulfillmentText": "Diseases",
                    "fulfillmentMessages": [
                        {
                        "card": {
                            "title": "Diseases",
                            "subtitle": "Type name diseases or nutrient to find its information",
                            "imageUri": "https://www.dropbox.com/s/zw62g6i1157qniy/good_health.jpg?dl=1",
                        }
                        }
                    ],
                });
        }catch(err){
            return res.ok ('ERROR::::'+err);
        }
        

        
    }
};