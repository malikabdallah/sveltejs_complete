<script>
    export let title = 'My button'

</script>

<!-- <button>{title}</button> -->

<button><slot/>  </button>

<style lang="scss">
    button {
        border: none;
        background-color: #ff3e00;
        color: #ffffff;
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor:pointer;
        &:hover{
            background-color: #fff;
        }
    }
</style>