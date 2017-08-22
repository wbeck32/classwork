const API_KEY = process.env.REACT_APP_API_KEY;
const url = search => `http://www.omdbapi.com/?s=${encodeURIComponent(search||' ')}&plot=short&r=json&apikey=${API_KEY}`;

export const search = search => fetch(url(search))
    .then(res => res.json())
    .then(data => {
        if(!Boolean(data.Response)) throw data.Error;
        return data.Search
    });