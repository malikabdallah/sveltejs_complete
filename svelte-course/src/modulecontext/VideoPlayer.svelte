<script context="module">
     let allVideos = new Set();

</script>
<script>
  import { onDestroy, onMount } from "svelte";


    export let src = undefined;

    console.log("src "+src);

    let paused = true;
    let currentTime = 0;
    let volume = 0;
    let video;
    
    onMount(()=>{
        allVideos.add(video);
    });

    onDestroy(()=>{
        allVideos.delete(video);
    });
</script>

<video
onplay={()=>{
    allVideos.forEach((_video)=>{
        if(_video!== video) _video.pause();
    })
}}
bind:this={video} class:playing={!paused} {src} controls muted bind:paused={paused} bind:volume={volume} bind:currentTime={currentTime} />
<button onclick={()=>{paused=!paused}}>{paused?"play":"pause"}</button>
<p>{currentTime}</p>
<p>{volume}</p>

<style>

    video.playing{
        outline:4px solid #ff3e00;
    }

</style>