<script>
  export let name;  // from main.js App.props
  import Logos from './lib/Logos.svelte';
  import Counter from './lib/Counter.svelte'
  import Title from './lib/Title.svelte';
  import Reactive from './lib/Reactive.svelte'
  import Navbar from './lib/Navbar.svelte';
  import Alert from './lib/Alert.svelte';
  import Calendar from './lib/Calendar.svelte';

  let showAlert = false;
  const toggleAlert = () => {
    showAlert = !showAlert;
  };
</script>

<div class="flex flex-col h-screen justify-between">

  <header class="sticky top-0 p-0">
    <Navbar />
  </header>

  <main>

    <Title title={name}/>
    <Calendar />

    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title justify-center">Counter</h2>
        <div class="card-actions justify-center">
          <div class="btn btn-primary" >
            <Counter />
          </div>
        </div>
      </div>
    </div>
    
  <Alert message="badge" show=true isBadge=true/>

  </main>

  <footer class="sticky bottom-0 p-0">
    <div class="text-white bg-gray-800">Footer</div>
  </footer>
</div>