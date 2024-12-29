<script>
	import { afterUpdate } from 'svelte';
    import { getContext} from 'svelte';

    import { v4 as uuid } from "uuid";
    export let name;
    export let type = 'text';
    export let label = undefined;
    export let validate = undefined;

    const id = uuid();


    const formStore = getContext('form');

</script>

<div class="field">
    {#if label}
        <label for={id}>{label}</label>
    {/if}
    <input {id} {name} {type} placeholder="{label}" value={$formStore.values[name] || ''}
    on:input={(e)=>{
        const value = e.currentTarget.value;
        formStore.update((state) => {
            // Ensure `values` and `errors` exist
            state.values = state.values || {};
            state.errors = state.errors || {};

            // Update the value
            state.values[name] = value;

            // Perform validation and update errors
            if (validate) {
                const error = validate(value, label);
                if (error) {
                    state.errors[name] = error; // Set error if validation fails
                } else {
                    delete state.errors[name]; // Remove error if validation passes
                }
            }

            return state; // Return the updated state
        });
        $formStore.values[name] = value;
    }}
    
    />
    {#if $formStore.errors && $formStore.errors[name]}
        <p class="error">{$formStore.errors[name]}</p>
    {/if}

</div>

<style>

    div .field{
        margin-bottom: 10px;
    }
    label {
        display:block;
        font-size: 14px;
        margin-bottom: 5px;

    }

    input{
        height: 30px;
        width:250px;
        max-width: 100%;
    }

</style>

