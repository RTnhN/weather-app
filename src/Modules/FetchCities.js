class FetchCities {
  searchKeyword;
  cityData;
  async getCities(searchKeyword, DOMcallback){
    const responseCity = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchKeyword}`);
    const jsonCity = await responseCity.json();
    if (jsonCity.results !== undefined){
      this.cityData = jsonCity.results;
      DOMcallback(jsonCity.results);
    }
  }
}

export default FetchCities;
