<script>
  let firstName = 'Jimi';
  let lastName = 'Hendrix';

  // reactive value
  $: fullName = `Hello Mr. ${firstName} ${lastName}!!`;

  // reactive statement
  $: {
    console.log(firstName);
    console.log(lastName);
  }
</script>

<div>
    <input type="text" bind:value={firstName}>
    <input type="text" bind:value={lastName}>
    <p>{fullName}</p>
</div>

<style></style>