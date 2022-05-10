class DOM {
  constructor(contentNode) {
    this.tempF = true;
    this.contentNode = contentNode;
    const placeholder = document.createDocumentFragment();
    this.searchBar = document.createElement('div');
    this.citiesContainer = document.createElement('div');
    this.cityBar = document.createElement('div');
    this.weatherContainer = document.createElement('div');

    this.searchBar.id = 'searchBar';
    this.citiesContainer.id = 'citiesContainer';
    this.cityBar.id = 'cityBar';
    this.weatherContainer.id = 'weatherContainer';

    this.searchEntry = document.createElement('input');
    this.searchEntry.type = 'text';
    this.searchEntry.id = 'searchEntry';

    this.autoLocateButton = document.createElement('button');
    this.autoLocateButton.id = 'autoLocateButton';
    this.autoLocateButton.textContent = 'my_location';
    this.autoLocateButton.classList.add('material-symbols-outlined');

    this.searchBar.appendChild(this.searchEntry);
    this.searchBar.appendChild(this.autoLocateButton);

    this.searchResults = document.createElement('div');
    this.searchResults.id = "searchResults";
    
    this.citiesList = document.createElement('div');
    this.citiesList.id = 'citiesList';

    this.citiesContainer.appendChild(this.searchResults);
    this.citiesContainer.appendChild(this.citiesList);

    this.cityBar = document.createElement("div");
    this.cityBar.id = 'cityBar';

    this.openCitiesHalf = document.createElement('button');
    this.openCitiesHalf.id = 'openCitiesHalf';
    this.openCitiesHalf.textContent = "chevron_right"; 
    this.openCitiesHalf.classList.add('material-symbols-outlined');

    this.cityNameTitle = document.createElement('p');
    this.cityNameTitle.id = 'cityNameTitle';

    this.menuButton = document.createElement("button");
    this.menuButton.id = 'menuButton';
    this.menuButton.textContent = 'info';
    this.menuButton.classList.add('material-symbols-outlined');

    this.cityBar.appendChild(this.openCitiesHalf);
    this.cityBar.appendChild(this.cityNameTitle);
    this.cityBar.appendChild(this.menuButton);

    placeholder.appendChild(this.searchBar);
    placeholder.appendChild(this.citiesContainer);
    placeholder.appendChild(this.cityBar);
    placeholder.appendChild(this.weatherContainer);

    this.contentNode.appendChild(placeholder);
  }

  makeSearchList(json){
    this.clearCitySearchList();
    this.searchResults.style.display = "flex";
    this.citiesList.style.display = 'none';
    json.forEach(this.makeCitySearchList.bind(this));
  }

  clearCitySearchList(){
    this.searchResults.style.display = "";
    while(this.searchResults.firstChild){
      this.searchResults.removeChild(this.searchResults.firstChild);
    }
  }

  makeCitySearchList(city){
    const placeholder = document.createDocumentFragment();
    const cityDiv = document.createElement('div');
    cityDiv.id = city.id;
    let cityName;
    if (city.country === 'United States'){
      cityName = `${city.name}, ${city.admin1}, ${city.country}`;
    } else {
      cityName = `${city.name}, ${city.country}`;
    }
    cityDiv.textContent = cityName;
    placeholder.appendChild(cityDiv);
    this.searchResults.appendChild(placeholder);
  }

  addCity(city){
    this.citiesList.style.display = '';
    const cityDiv = document.createElement("div");
    cityDiv.id = city.id;
    const weatherIcon = document.createElement('span');
    weatherIcon.textContent = city.conditions;
    weatherIcon.classList.add('material-symbols-outlined');
    const cityName = document.createElement('span');
    cityName.textContent = city.name;
    const cityTemp = document.createElement('span');
    if (this.tempF){
      cityTemp.textContent = `${city.currentTempF}°`;
    } else {
      cityTemp.textContent = `${city.currentTempC}°`;
    }
    cityDiv.appendChild(weatherIcon);
    cityDiv.appendChild(cityName);
    cityDiv.appendChild(cityTemp);
    this.citiesList.appendChild(cityDiv);
  }
  updateCity(city){
    const cityId = city.id;
    const cityElement = document.getElementById(cityId);
    const cityElementChildren = cityElement.children;
    cityElementChildren[0].textContent = city.conditions;
    cityElementChildren[1].textContent = city.name;
    if (this.tempF){
      cityElementChildren[2].textContent = `${city.currentTempF}°`;
    } else {
      cityElementChildren[2].textContent = `${city.currentTempC}°`;
    }
  }
}

export default DOM;
