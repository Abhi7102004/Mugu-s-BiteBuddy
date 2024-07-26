import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [githubData, setGithubData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://api.github.com/users/Abhi7102004');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const letterColors = ["text-red-500", "text-green-500", "text-blue-500", "text-yellow-500", "text-purple-500", "text-pink-500"];

  const getColoredName = (name) => {
    return name.split('').map((letter, index) => {
      const isCap = letter === letter.toUpperCase();
      return (
        <span
          key={index}
          className={`inline-block ${letterColors[index % letterColors.length]} ${isCap ? 'text-4xl relative top-[-0.5rem]' : 'text-2xl'}`}
        >
          {letter}
        </span>
      );
    });
  };

  const name = githubData ? (githubData.name || githubData.login) : '';

  return (
    <div className="container mx-auto mt-20 p-10 max-w-[600px] bg-gray-100 dark:bg-[#191740] rounded-lg shadow-md">
      <motion.h2
        className="mb-10 text-3xl font-bold dark:text-white text-gray-800 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        About Me
      </motion.h2>
      {isLoading && <p className="text-xl dark:text-white">Loading GitHub data...</p>}
      {error && <p className="text-red-500 font-bold mt-2 text-center">Error: {error}</p>}
      {githubData && (
        <motion.div
          className="flex flex-col md:flex-row items-center dark:text-white w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src={githubData.avatar_url}
            alt="GitHub Avatar"
            className="w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6 object-cover"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="flex space-x-1 mb-2 font-bold">
              {getColoredName(name)}
            </h2>
            <p className="text-lg mb-4 leading-relaxed dark:text-gray-300 text-gray-600">{githubData.bio}</p>
            <motion.a
              href={githubData.html_url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
