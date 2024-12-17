import React, { useState } from "react";
import Modal from "../pages/Modal2";
import image from "../asset/image/istockphoto-1387459509-2048x2048.jpg"

const blogPosts = [
  {
    id: 1,
    image:image,
    title: "Cox's Bazar's Joyful Journey",
    description:
      "Cox's Bazar, located in southeastern Bangladesh, is renowned for having the world's longest natural sandy beach, stretching over 120 kilometers along the Bay of Bengal. Recently, I had the privilege of visiting this breathtaking destination, and the experience was nothing short of magical.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    title: "Blog Title 2",
    description:
      "Short description about Blog Post 2 goes here. This content is hidden until the user clicks on Read More.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    title: "Blog Title 3",
    description:
      "Short description about Blog Post 3 goes here. Click on Read More to see the full content.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300",
    title: "Blog Title 4",
    description:
      "Short description about Blog Post 4 goes here. Extra details will be revealed in the modal.",
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="bg-black">
      <div className="bg-black w-10/12 mx-auto min-h-screen text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-bold text-center mb-20">
            MY <span className="text-yellow-400 ">BLOG</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  
                  {/* বর্ণনার অংশ বিশেষ দেখানো */}
                  <p className="text-gray-300 mb-4">
                    {post.description.length > 100
                      ? `${post.description.substring(0, 100)}...`
                      : post.description}
                  </p>

                  {/* রিড মোর বাটন */}
                  <button
                    onClick={() => openModal(post)}
                    className="text-yellow-400 font-semibold hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedPost?.title}
        description={selectedPost?.description}
        image={selectedPost?.image}
      />
    </div>
  );
};

export default Blog;
