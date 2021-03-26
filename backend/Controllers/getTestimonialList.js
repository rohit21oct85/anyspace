
const Testimonial = require("../Modals/Testimonial");

const getTestimonialList=  (req, res,next)=>{


    Testimonial.find({},{
        client_image: '',
        client_name: '',
        client_company: '',
        client_message: '',
        client_rating: '',
        
    })
    .then(resp => {
        return res.status(200).json(resp)
    })
    .catch(err=>{
        return res.status(422).json(err)
    })
}

module.exports = getTestimonialList;