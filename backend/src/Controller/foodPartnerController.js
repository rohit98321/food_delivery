const foodPartnerModel = require("../Models/foodPartner");

const getFoodPartner = async (req, res) => {

    const {id}=req.params.id
    if(!id){
        res.status(404).json({message:"this is not vilid id"})
    }

    try {
        const foodPartner=await foodPartnerModel.findById(id)
        res.status(200).json({message:"foodPartner fetched",foodPartner})
    } catch (error) {
        res.status(404).json({message:"something is wrong"})
    }
};

module.exports={
    getFoodPartner
}
