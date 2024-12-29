<script>
    export let size = 'small';
    export let shadow = false;
    export let bgcolor = 'blue';
    export let type = "submit";
    let isLeftHovered = false; // Initialize the variable
</script>


<button {type} style:background-color={bgcolor} class:size-lg={size === 'large'} class:size-sm={size !== 'large'} class:shadow>
    {#if $$slots.leftContent}
        <!-- Mouse events to set isLeftHovered -->
        <div class="left-content"
            on:mouseenter={() => isLeftHovered = true}
            on:mouseleave={() => isLeftHovered = false}>
            <!-- Pass isLeftHovered to the slot -->
            <slot name="leftContent" {isLeftHovered}></slot>
        </div>
    {/if}
    
    <!-- Pass isLeftHovered to the default slot -->
    <slot {isLeftHovered}></slot>
</button>

<style>
    .left-content {
        height: 150px;
        width: 150px;
    }
    button {
        display: flex;
        align-items: center;
        border: none;
        background-color: #ff3e00;
        color: #ffffff;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;

        .left-content {
            margin-right: 10px;
        }

        &.size-sm {
            padding: 15px 20px;
        }

        &.size-lg {
            padding: 20px 25px;
        }

        &.shadow {
            box-shadow: 0 0 10px rgba(1, 1, 1, 0.3);
        }
    }
</style>
