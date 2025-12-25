// SDK initialization

var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint : process.env.URL_ENDPOINT
});

const uploadFile= async (file,filename)=>{
    const response= await imagekit.upload({
        file:file,
        fileName:filename,
        folder:"food_delivery"

    })
    return response
}

module.exports=uploadFile