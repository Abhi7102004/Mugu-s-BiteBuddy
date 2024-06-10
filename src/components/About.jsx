import React, { useState, useEffect } from 'react';
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

  return (
    <div className="about-us mx-auto mt-20 dark:shadow-md dark:shadow-indigo-600 dark:bg-[#191740]">
      <h2 className="about-us__title dark:text-white">About Me</h2>
      {isLoading && <p className='dark:text-white'>Loading GitHub data...</p>}
      {error && <p className="about-us__error dark:text-white">Error: {error}</p>}
      {githubData && (
        <div className="about-us__content dark:text-white">
          <img src={githubData.avatar_url} alt="GitHub Avatar" className="about-us__image" />
          <div className="about-us__info">
            <h2 className='dark:text-white'>{githubData.name || githubData.login}</h2>
            <p className='dark:text-white'>{githubData.bio}</p>
            <a href={githubData.html_url} target="_blank" rel="noreferrer noopener" className="about-us__link">
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
export default About;