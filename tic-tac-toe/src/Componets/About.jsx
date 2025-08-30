import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen px-4 md:px-[80px]  bg-gray-400 text-gray-900 py-10 ">
      <div className="w-full mt-10 px-4  bg-gray-900 text-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center  py-10 mb-4">About Tic-Tac-Toe</h1>
        
        <p className="text-lg mb-6">
          Tic-Tac-Toe is a classic 2-player strategy game where players take turns marking X or O in a 3x3 grid. The first player to align three symbols in a row wins! Play against a friend or challenge our smart AI. Simple, fast, and timeless — enjoy a game anytime, anywhere.
        </p>

        <hr className="my-6" />

        <div className="text-base">
          <p><strong>Game Name:</strong> Tic-Tac-Toe</p>
          <p className=''><strong>Created By: </strong> xyz Devlope</p>
          <p className="mt-4">
            This game is designed to be simple and intuitive, yet provides a fun challenge whether you're playing with a friend or testing your skills against an AI. It's perfect for quick breaks, brain training, or just passing time. Built with React and Tailwind CSS, this app is lightweight and fully responsive across devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
