// src/hooks/useMovies.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiHost = import.meta.env.VITE_API_HOST;
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const cached = localStorage.getItem('cachedMovies');
        if (cached) {
          setMovies(JSON.parse(cached));
          setLoading(false);
          return;
        }

        const response = await axios.get(apiUrl, {
          headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost
          }
        });

        setMovies(response.data || []);
        localStorage.setItem('cachedMovies', JSON.stringify(response.data));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopMovies();
  }, []);

  

  return { movies, loading, error };

  
};

export default useMovies;
