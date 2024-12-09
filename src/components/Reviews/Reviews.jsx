import React from "react";
import "./reviews.css";

const reviews = [
  {
    id: 1,
    name: "Grace Carey",
    date: "24 January, 2023",
    rating: 4,
    text: `I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. Highly recommend!!!`,
    image: "path/to/avatar1.jpg",
  },
  {
    id: 2,
    name: "Ronald Richards",
    date: "24 January, 2023",
    rating: 5,
    text: `This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! If you want a phone that's going to last, grab an iPhone 14 Pro Max and get several cords and plugs.`,
    image: "path/to/avatar2.jpg",
  },
  {
    id: 3,
    name: "Darcy King",
    date: "24 January, 2023",
    rating: 4,
    text: `I might be the only one to say this, but the camera is a little funky. Hoping it will change with a software update; otherwise, love this phone! Came in great condition.`,
    images: ["path/to/img1.jpg", "path/to/img2.jpg"],
  },
  {
    id: 4,
    name: "John Malcolm",
    date: "24 January, 2023",
    rating: 4,
    text: `In Washington, it is already difficult to surprise with the opening of a new institution, but it is still possible. Especially if it is a True Cost project. Here you pay an entrance fee and get meals at cost price.`,
    image: "path/to/avatar3.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <img
                src={review.image}
                alt={`${review.name}'s avatar`}
                className="review-avatar"
              />
              <div>
                <h3 className="review-name">{review.name}</h3>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <div className="review-body">
              <div className="review-rating">
                {"⭐️".repeat(review.rating)}
              </div>
              <p className="review-text">{review.text}</p>
              {review.images && (
                <div className="review-images">
                  {review.images.map((img, index) => (
                    <img key={index} src={img} alt="Additional review content" />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
