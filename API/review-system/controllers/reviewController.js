const Review = require("../models/Review");

// get all courses
exports.getReview = async (req, reply) => {
  try {
    const reviews = await Review.find();
    return reviews;
  } catch (error) {
    throw error;
  }
};

// get a single course

exports.getSingleReview = async (req, reply) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);
    return review;
  } catch (error) {
    throw error;
  }
};

// add a new course

exports.addReview = async (req, reply) => {
  try {
    const review = new Review(req.body);
    return review.save();
  } catch (error) {
    throw error;
  }
};

// update an existing course

exports.updateReview = async (req, reply) => {
  try {
    const reviewId = req.params.id;
    const review = req.body;
    const { ...updatedReview } = review;
    const update = await Course.findByIdAndUpdate(reviewId, updatedReview, {
      new: true
    });
    return update;
  } catch (error) {
    throw error;
  }
};

// delete an existing course

exports.deleteReview = async (req, reply) => {
  try {
    const reviewId = req.params.id;
    const review = Course.findByIdAndDelete(reviewId);
    return review;
  } catch (error) {
    throw error;
  }
};
