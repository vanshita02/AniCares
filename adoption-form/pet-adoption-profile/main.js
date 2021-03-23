const petsArray = [
  {
    imageLink: "1.jfif",
    imageDescription: "NGO1",
    name: 'Gidget',
    color: 'Grilled Beef Brown',
    id: '1234',
    type: 'Dog',
    age: '3 year',
    gender: 'Female',
  sterilized:'yes',
  vaccination:'properly vaccinated',
  habits:'sleeping on couch'
  },
  {
    imageLink: "4.jpg",
    imageDescription: "NGO2",
    name: 'Anna',
    color: 'White',
    id: '12345',
    type: 'Rabbit',
    age: '2 months',
    gender: 'Male',
  sterilized:'yes',
  vaccination:'properly vaccinated',
  habits:'hopping around'
  },
  {
    imageLink: "2.jfif",
    imageDescription: "NGO1",
    name: 'Xena',
    color: 'Spicy Mustard Yellow',
    id: '123456',
    type: 'Dog',
    age: '35 days',
    gender: 'Male',
  sterilized:'yes',
  vaccination:'properly vaccinated',
  habits:'playing with disc'
  },
  {
    imageLink: "3.jfif",
    imageDescription: "NGO3",
    name: 'Dolly',
    color: 'Golden',
    id: '1234567',
    type: 'Dog',
    age: '50 days',
    gender: 'Female',
  sterilized:'yes',
  vaccination:'properly vaccinated',
  habits:'bark on strangers'
  },
  {
    imageLink: "5.jfif",
    imageDescription: "NGO4",
    name: 'Phoebe',
    color: 'Black',
    id: '12345678',
    type: 'Cat',
    age: '1.5 years',
    gender: 'Female',
  sterilized:'yes',
  vaccination:'properly vaccinated',
  habits:'sleeping on bed'
  },
  {
    imageLink: "6.jfif",
    imageDescription: "NGO10",
    name: 'Tukku',
    color: 'Light Orange and White',
    id: '123456789',
    type: 'Cat',
    age: '5 years',
    gender: 'Male',
  sterilized:'yes',
  vaccination:'properly vaccinated',
  habits:'playing with wool'
  },
  {
    imageLink: "7.jpg",
    imageDescription: "NGO3",
    name: 'Kera',
    color: 'brown',
    id: '1234567890',
    type: 'Cow',
    age: '3 years',
    gender: 'Female',
  sterilized:'yes',
  vaccination:'properly vaccinated',
  habits:'eating jaggery'
  }
  ];
  
  const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  }
  
  const petLoop = () => {
  let domString = '';
  
  for (let i = 0; i < petsArray.length; i++) {
    domString +=  `<div class="animal-card" style="display: ${petsArray[i].display};">
                    <header class="animal-header">
                      <img src= "${petsArray[i].imageLink}" alt= "${petsArray[i].imageDescription}">
                     <h1>${petsArray[i].name}</h1>
                    </header>
                    </br>
                    <div class="bodysection">
                    <p class="desc"><strong>Id:</strong> &nbsp ${petsArray[i].id}</p>
                    <p class="desc"><strong>Age:</strong> &nbsp ${petsArray[i].age}</p>
                    <p class="desc"><strong>Gender:</strong> &nbsp ${petsArray[i].gender}</p>
                    <p class="desc"><strong>Color:</strong> &nbsp ${petsArray[i].color}</p>
                    <p class="desc"><strong>Type of Pet: </strong>&nbsp ${petsArray[i].type}</p>
                    <p class="desc"><strong>Sterilized: </strong>&nbsp ${petsArray[i].sterilized}</p>
                    <p class="desc"><strong>vaccination: </strong>&nbsp ${petsArray[i].vaccination}</p>
					<p class="desc"><strong>Habits: </strong>&nbsp ${petsArray[i].habits}</p>
                  </div>
                </div>`;
    }
    printToDom('.cards', domString)
  }
  
  const init = () => {
    petLoop();
  }
  
  init();
  