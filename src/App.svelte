<script lang="ts">
  import {onMount} from "svelte";
  import {filesystem, window as neuWindow} from "@neutralinojs/lib";


  onMount(async () => {
    try {
      await neuWindow.show();
    } catch (err: unknown) {
      console.log("Not running in Neutralino or failed to show window:", err);
    }

    try{
      const info = await filesystem.readDirectory("./");
      console.log(info);
    }catch(err: unknown){
      console.log(err);
    }
  })
</script>


<h1>Hola mundo</h1>