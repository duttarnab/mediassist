module.exports = {

    diseasesQuery: async function (req, res){

        try{
            if(req.body.queryResult.parameters.disease == 'feaver'){
                return res.ok ({
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
                    ]});
            }
        }catch(err){
            return res.ok ('ERROR::::'+err);
        }
        

        
    }
};