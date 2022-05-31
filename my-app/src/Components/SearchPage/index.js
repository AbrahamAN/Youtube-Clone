import React, { useState, useEffect } from "react";
import { SearchBody } from "./SearchBody";
import { ErrorPage } from "../Error/ErrorPage";

function SearchPage(props) {
  const [searchVideos, setSearchVideos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    fetchSearchVideos();
  }, []);

  const fetchSearchVideos = async () => {
    try {
      // aqui va la peticion al backend

      console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

      const response = await fetch(
        process.env.REACT_APP_API +
          `/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=50`
      );

      if (response.status !== 200 || !response.ok) {
        throw new Error("Welcome Tomorrow");
      }

      const videos = await response.json();
      setSearchVideos(videos.items);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  if (error) {
    return <ErrorPage />;
  }

  return <SearchBody searchVideos={searchVideos} />;
}

export { SearchPage };
