const express = require('express');
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

const reviewController = require("../controllers/reviews.js");
// ✅ was "/:id/reviews" — now just "/"
router.post("/",
    validateReview,
    wrapAsync(reviewController.createReview));

// ✅ was "/:id/reviews/:reviewId" — now just "/:reviewId"
router.delete("/:reviewId",
    
    wrapAsync(reviewController.deleteReview));

router.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

module.exports = router;