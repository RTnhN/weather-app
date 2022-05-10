class Database {
  cities;
  addCity(city){
    this.cities.push(city)
  }
  removeCity(cityId){
    this.cities = this.cities.filter(city => city.id !== cityId)
  }
}