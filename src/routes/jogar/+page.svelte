<script lang="ts">
	import { onMount } from "svelte";
  import { gameState } from "$lib/game/gameState"
 
 onMount(async () => {
        const k = (await import("$lib/game/kaplay")).default;
        await import("$lib/game/scenes/level0"); // Aguarde a importação da cena
        
        await k.go("level0"); // Agora a cena já está registrada antes de ser chamada

 });

</script>

<main>
  <div id="game-container"></div>
</main>