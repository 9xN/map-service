const reviewController = require("../controllers/reviewController");

const routes = [
  {
    method: "GET",
    url: "/api/review",
    handler: reviewController.getReview
  },
  {
    method: "GET",
    url: "/api/review/:id",
    handler: reviewController.getSingleReview
  },
  {
    method: "POST",
    url: "/api/review",
    handler: reviewController.addReview
  },
  {
    method: "PUT",
    url: "/api/review/:id",
    handler: reviewController.updateReview
  },
  {
    method: "DELETE",
    url: "/api/review/:id",
    handler: reviewController.deleteReview
  }
];

module.exports = routes;
