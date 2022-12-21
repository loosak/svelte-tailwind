<script>
  const items = ['item0', 'item1', 'item1'];
</script>

<navbar class="navbar bg-gray-100">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="#">navbar</a>
    </div>
    <div class="flex-none">  
        <ul class="menu menu-horizontal p-0">
        {#each items as item}
            <li><a href="#">{item}</a></li>
        {/each}
        </ul>
    </div>
</navbar>