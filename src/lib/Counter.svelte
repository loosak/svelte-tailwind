<script>
  let count = 0
  
  const handler = e => {
    switch (e.button) {
      case 0:
        console.log('Left button clicked.');
        count++;
        break;
      case 1:
        console.log('Middle button clicked.');
        break;
      case 2:
        console.log('Right button clicked.');
        count--;
        break;
      default:
        console.log('Unknown button code: ' + e);
    }
    
  }
</script>

<button
  on:contextmenu|preventDefault
  on:mouseup={handler}
>
  Clicked: {count} {count === Math.abs(1) ? 'time': 'times'}
</button>
