
import mongoose from 'mongoose';

const Bide = new mongoose.Schema(
    {
        userID:
        {
            type: String,
            required: true
        },
        productID: 
        { 
            type: String,
            required: true
        },
        //giá tối đa có thể chi trả cho sản phẩm
        max_price:{
            type: String,
        },
        //giá đang đấu giá hiện tại
        current_price: {
            type: String,
        },
        auto_bide:{
            type: String,
        },
        bid_step:
        {
            type: Number,
        }
    },
    { timestamps: true}
)

const model = mongoose.model('Bide', Bide);
export default model;
