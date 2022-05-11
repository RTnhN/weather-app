class Database {
  cities;
  userPreferences;
  #storageAgent;
  constructor(storageAgent){
    this.#storageAgent = storageAgent;
    [this.userPreferences, this.cities] = this.readStorage();
    if (Object.keys(this.userPreferences).length === 0){
      this.userPreferences.preferF = true;
    }
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
    this.writeStorage()
  }
  getCityIndex(queryCity){
    return this.cities.findIndex(city => city.id === queryCity.id);
  }
  writeStorage() {
    if (this.#storageAgent !== null) {
      this.#storageAgent.store([this.userPreferences, this.cities]);
    }
  }
  readStorage() {
    if (this.#storageAgent !== null) {
      return this.#storageAgent.unstore();
    }
    return [{},[]];
  }
  
}

export default Database;
