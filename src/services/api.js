import axios from "axios";

export const fetchBooksByMood = async (mood, offset = 0) => {
  const res = await axios.get(
    `https://openlibrary.org/subjects/${mood}.json?limit=20&offset=${offset}`
  );
  return res.data.works;
};