const axios = require("axios");
const { data } = require("./Commands/Taylorquote");
let countryData;
module.exports = async () => {
  const request = await axios.get("https://restcountries.com/v3.1/all");
  countryData = await request.data;
  return countryData;
};
