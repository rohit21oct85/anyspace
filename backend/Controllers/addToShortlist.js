
const User = require("../Modals/user")

const AddToShortList = (req, res, next) => {

    let userId = "5e664489e8346c61e8c3be56";
    let wareHouseId = "5e5cf60a98385486d64f8b96"

    User.update(
        { _id: userId },
        { $push: { shortListed: wareHouseId } }
    )
}

module.exports = AddToShortList