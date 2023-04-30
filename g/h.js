fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
		.then(response => response.json())
		.then(characters => {
		  function createCharacterRow(character) {
		    const tableRow = document.createElement('tr');
		    tableRow.innerHTML = `
		      <td><img src="${character.images.md}" width="80"></td>
		      <td>${character.biography.fullName}</td>
		      <td>${character.name}</td>
		      <td>${character.appearance.race}</td>
		      <td>${character.appearance.gender}</td>
		      <td>${character.appearance.weight[1]}</td>
		      <td>${character.appearance.height[1]}</td>
		      <td>${character.biography.placeOfBirth}</td>
		      <td>${character.biography.alignment}</td>
		      <td>${character.powerstats.intelligence}</td>
		      <td>${character.powerstats.strength}</td>
		      <td>${character.powerstats.speed}</td>
		      <td>${character.powerstats.durability}</td>
		      <td>${character.powerstats.power}</td>
		      <td>${character.powerstats.combat}</td>
		    `;
		    return tableRow;
		  }
		  // Get a reference to the table body
		  const tableBody = document.getElementById('characters-table');

		  // Loop through each character and add a row to the table for each one
		  for (const character of characters) {
		    const tableRow = createCharacterRow(character);
		    tableBody.appendChild(tableRow);
		  }
		});