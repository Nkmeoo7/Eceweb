import React, { useState } from "react";

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal visibility state
  const [modalImgSrc, setModalImgSrc] = useState(""); // Image source for modal

  // Array of image URLs
  const photos = [
    "./p1.jpg",
    "./p2.jpg",
    "./p3.jpg",
    "./p4.jpg",
    "./p5.jpg",
    "./p6.jpg",
    "./p7.jpg",
    "./p8.jpg",
    "./p9.jpg",
    "./p10.jpg",
    "./p11.jpg",
    "./p12.jpg",
    "./p13.jpg",
    "./p14.jpg",
    "./p15.jpg",
    "./p16.jpg",
    "./p17.jpg",
    "./p18.jpg",

    // Add more image URLs as needed
  ];

  // Function to open modal with selected image
  const handleImageClick = (src) => {
    setModalImgSrc(src); // Set the clicked image as modal image
    setIsOpen(true); // Open the modal
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsOpen(false); // Hide the modal
  };

  return (
    <div className="bg-white">
      {/* Photo gallery grid */}
      <div className="grid grid-cols-6 gap-2 p-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative photo-item cursor-pointer group"
            onClick={() => handleImageClick(photo)} // Click handler for image
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-20 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              🔍
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen modal */}
      {isOpen && (
        <div
          id="photoModal"
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseModal} // Close modal on click
        >
          <img
            id="modalImg"
            src={modalImgSrc}
            alt="Enlarged"
            className="max-w-4xl max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
