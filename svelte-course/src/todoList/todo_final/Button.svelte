<script>

$: {
    console.log("rest props: ", JSON.stringify($$restProps));
}
</script>

<button {...$$restProps}>
    <slot></slot>
</button>    


<style>

    button:disabled {
        background-color: #ccc; /* Example styling for disabled state */
        cursor: not-allowed;
    }

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
