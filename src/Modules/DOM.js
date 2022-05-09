class DOM {
  constructor(contentNode) {
    this.contentNode = contentNode;
    this.placeholder = document.createDocumentFragment();
    this.searchBar = document.createElement('div');
    this.citiesBlock = document.createElement('div');
    this.cityBar = document.createElement('div');
    this.weatherBlock = document.createElement('div');

    this.searchBar.id = 'searchBar';
    this.citiesBlock.id = 'citiesBlock';
    this.cityBar.id = 'cityBar';
    this.weatherBlock.id = 'weatherBlock';

    this.searchEntry = document.createElement('input');
    this.searchEntry.type = 'text';
    this.searchEntry.id = 'searchEntry';

    this.autoLocateButton = document.createElement('button');
    this.autoLocateButton.id = 'autoLocateButton';
    this.autoLocateButton.textContent = 'my_location'; // Material Design name
    this.autoLocateButton.classList.add('material-symbols-outlined');

    this.searchBar.appendChild(this.searchEntry);
    this.searchBar.appendChild(this.autoLocateButton);

    this.citiesContainer = document.createElement('div');
    this.citiesContainer.id = 'citiesContainer';

    this.cityBar = document.createElement("div");
    this.cityBar.id = 'cityBar';

    this.openCitiesHalf = document.createElement('button');
    this.openCitiesHalf.id = 'openCitiesHalf';
    this.openCitiesHalf.textContent = "chevron_right"; // Material Design name
    this.openCitiesHalf.classList.add('material-symbols-outlined');

    this.cityNameTitle = document.createElement('p');
    this.cityNameTitle.id = 'cityNameTitle';

    this.menuButton = document.createElement("button");
    this.menuButton.id = 'menuButton';
    this.menuButton.textContent = 'info'; // Material Design Name
    this.menuButton.classList.add('material-symbols-outlined');

    this.cityBar.appendChild(this.openCitiesHalf);
    this.cityBar.appendChild(this.cityNameTitle);
    this.cityBar.appendChild(this.menuButton);

    this.placeholder.appendChild(this.searchBar);
    this.placeholder.appendChild(this.citiesBlock);
    this.placeholder.appendChild(this.cityBar);
    this.placeholder.appendChild(this.weatherBlock);

    this.contentNode.appendChild(this.placeholder);
  }
}

export default DOM;
