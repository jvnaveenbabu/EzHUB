import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handelAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handelRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((Selected) => Selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGeneres = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

    setGenres(data.genres);
  };

  console.log(genres);

  useEffect(() => {
    fetchGeneres();
    return () => {
      setGenres({});
    };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            color="primary"
            key={genre.id}
            clickable
            onDelete={() => handelRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            key={genre.id}
            clickable
            onClick={() => handelAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
