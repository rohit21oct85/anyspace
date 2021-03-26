
const Testimonial = require("../Modals/Testimonial")

const getTestimonial =  (req, res,next)=>{
    Testimonial.findOne({_id: req.body.testimonialID}).exec()
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getTestimonial;