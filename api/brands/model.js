// const { Schema, model } = require('mongoose')

// const BrandSchema = new Schema(
//     {
//         BrandName: {
//             type: String,
//             required: true,
//             unique: true
//         },
//         BrandImage: {
//             type: String,
//             required: true,
//         },


//     }
// )
// const Brand = model('brand', BrandSchema)
// module.exports = Brand


const { Schema, model } = require('mongoose')

const BrandSchema = new Schema(
    {
        BrandName: {
            type: String,
            required: true,
            unique: true
        },
        BrandImage: {
            type: Array,
            required: true,
        },
        thumbnail:{
            type:String,
             required : true
           },
      


    }
)
const Brand = model('brand', BrandSchema)
module.exports = Brand