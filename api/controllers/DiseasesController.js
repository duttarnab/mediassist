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
            return res.ok (
                {
                    "fulfillmentText": "Diseases",
                    "fulfillmentMessages": [
                        {
                        "card": {
                            "title": "Diseases",
                            "subtitle": "type name diseases to find its information",
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