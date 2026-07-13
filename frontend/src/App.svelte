<script lang="ts">
  import {onMount} from "svelte";
  import {filesystem} from "@neutralinojs/lib";


  onMount(async () => {
    try{
      const info = await filesystem.readDirectory("./");
      console.log(info);
    }catch(err: unknown){
      console.log(err);
    }
  })
</script>


<h1>Hola mundo</h1>