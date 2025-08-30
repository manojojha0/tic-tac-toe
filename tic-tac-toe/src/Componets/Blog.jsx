import React from 'react';

// Sample data for 11 blog entries
const blogs = [
  {
    id: 1,
    name: 'Aman Verma',
    img: 'https://randomuser.me/api/portraits/men/11.jpg',
    suggestion: 'You should add a dark mode toggle!',
  },
  {
    id: 2,
    name: 'Riya Sharma',
    img: 'https://randomuser.me/api/portraits/women/21.jpg',
    suggestion: 'Multiplayer online mode would be awesome!',
  },
  {
    id: 3,
    name: 'Kunal Yadav',
    img: 'https://randomuser.me/api/portraits/men/31.jpg',
    suggestion: 'The AI is too easy, make it harder!',
  },
  {
    id: 4,
    name: 'Neha Singh',
    img: 'https://randomuser.me/api/portraits/women/41.jpg',
    suggestion: 'Add a timer for each move to make it challenging.',
  },
  {
    id: 5,
    name: 'Rohit Mehta',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    suggestion: 'Leaderboard feature would make it more competitive.',
  },
  {
    id: 6,
    name: 'Tanya Kapoor',
    img: 'https://randomuser.me/api/portraits/women/61.jpg',
    suggestion: 'Please add sound effects for moves and win!',
  },
  {
    id: 7,
    name: 'Deepak Kumar',
    img: 'https://randomuser.me/api/portraits/men/71.jpg',
    suggestion: 'A restart button after the game ends would help.',
  },
  {
    id: 8,
    name: 'Meera Joshi',
    img: 'https://randomuser.me/api/portraits/women/81.jpg',
    suggestion: 'Allow custom player names!',
  },
  {
    id: 9,
    name: 'Sahil Khan',
    img: 'https://randomuser.me/api/portraits/men/91.jpg',
    suggestion: 'Add more grid sizes like 4x4 or 5x5.',
  },
  {
    id: 10,
    name: 'Anjali Das',
    img: 'https://randomuser.me/api/portraits/women/25.jpg',
    suggestion: 'Make it possible to save the game history.',
  },
  {
    id: 11,
    name: 'Vikram Rao',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    suggestion: 'Color themes would make it more attractive.',
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-400 px-4 md:px-[90px] py-10 min-h-screen">
      <h1 className="text-3xl font-bold py-10 text-gray-700 mb-8 text-center">Bug & Feedback</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center"
          >
            <img
              src={blog.img}
              alt={blog.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{blog.name}</h3>
            <p className="mt-2 text-gray-600 italic">"{blog.suggestion}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
