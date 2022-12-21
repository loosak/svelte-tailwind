<script>
let people = [
    { name: 'yoshi', beltColour: 'black',  age: 25, id: 1 },
    { name: 'mario', beltColour: 'orange', age: 45, id: 2 },
    { name: 'luigi', beltColour: 'brown',  age: 35, id: 3 }
  ];
	
const handleClick = (e, id) => {

	console.log(`button: ${e.button}, id: ${id}`);
	people = people.filter((person) => person.id != id); // return new array with filtered out
	console.dir(people);
};
	
</script>

<main>
	{#each people as person (person.id)}
	<div>
		<h4>{person.name}</h4>
		<p>
			{person.age} years old, {person.beltColour} belt.
		</p>
		<button on:click={e => handleClick(e, person.id)}>delete</button>
	</div>
	{:else}
		<p>
			there are {people.length} people...
		</p>
	{/each}
</main>