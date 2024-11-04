import Review from "../models/reviews.js";

export const addreview = async (req, res, next) => {
    try {
        const { hotelid, userid } = req.params;
        const { review } = req.body;
        const newReview = new Review({
            review,
            hotel: hotelid,
            user: userid
        });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (err) {
        next(err);
    }
};

export const viewreview = async (req, res, next) => {
    const { id } = req.params;
    try {
        const reviews = await Review.find({ hotel: id }).populate({ path: 'user',select: 'username',}).sort({ createdAt: -1 });
        res.json(reviews);
    } catch (err) {
        next(err);
    }
};
