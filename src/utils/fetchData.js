//here we will make a connection with rapid api
//const axios = require('axios');

export const exerciseOptions =  {
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async(url, options)=>{
    const response = await fetch(url, options);
    const data= await response.json();

    return data;
}