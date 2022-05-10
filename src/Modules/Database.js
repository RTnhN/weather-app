class Database {
  cities;
  #storageAgent;
  constructor(storageAgent){
    this.#storageAgent = storageAgent;
    this.cities = this.readStorage();
  }
  addCity(city){
    this.cities.push(city)
    this.writeStorage()
  }
  removeCity(cityId){
    this.cities = this.cities.filter(city => city.id !== cityId)
    this.writeStorage()
  }
  updateCity(city){
    this.cities[this.getCityIndex(city)].updateCity(city)
  }
  getCityIndex(queryCity){
    return this.cities.findIndex(city=> city.id === queryCity.id);
  }

  writeStorage() {
    if (this.#storageAgent !== null) {
      this.#storageAgent.store(this.cities);
    }
  }
  readStorage() {
    if (this.#storageAgent !== null) {
      return this.#storageAgent.unstore();
    }
    return [];
  }
  
}

export default Database;
