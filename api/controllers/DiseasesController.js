module.exports = {

    diseasesQuery: async function (req, res){

        try{
            if(req.body.queryResult.parameters.disease == 'feaver'){
                return res.ok (
                    {
                        "fulfillmentText": "This is a text response",
                        "fulfillmentMessages": [
                            {
                            "card": {
                                "title": "card title",
                                "subtitle": "card text",
                                "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
                                "buttons": [
                                {
                                    "text": "button text",
                                    "postback": "https://assistant.google.com/"
                                }
                                ]
                            }
                            }
                        ],
                        "source": "example.com",
                        "payload": {
                            "google": {
                            "expectUserResponse": true,
                            "richResponse": {
                                "items": [
                                {
                                    "simpleResponse": {
                                    "textToSpeech": "this is a simple response"
                                    }
                                }
                                ]
                            }
                            },
                            "facebook": {
                            "text": "Hello, Facebook!"
                            },
                            "slack": {
                            "text": "This is a text response for Slack."
                            }
                        }
                    }
                    
                    /*{
                    "fulfillmentText": "This is a text response.\n\n Annother line",
                    "fulfillmentMessages": [
                      {
                        "card": {
                          "title": "card title",
                          "subtitle": "card text",
                          "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
                          "buttons": [
                            {
                              "text": "button text",
                              "postback": "https://assistant.google.com/"
                            }
                          ]
                        }
                      }
                    ],
                    "source": "example.com",
                    "payload": {
                        "google": {
                            "expectUserResponse": true,
                            "richResponse": {
                                "items": [
                                    {
                                        "simpleResponse": {
                                            "textToSpeech": "This is a Basic Card:"
                                        }
                                    },
                                    {
                                        "basicCard": {
                                            "title": "card title",
                                            "image": {
                                                "url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                                                "accessibilityText": "Google Logo"
                                            },
                                            "buttons": [
                                                {
                                                    "title": "Button Title",
                                                    "openUrlAction": {
                                                        "url": "https://www.google.com"
                                                    }
                                                }
                                            ],
                                            "imageDisplayOptions": "WHITE"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }*/);
            }
        }catch(err){
            return res.ok ('ERROR::::'+err);
        }
        

        
    }
};