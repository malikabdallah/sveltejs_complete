# sveltejs_complete

svlete permet de crée des interface interactive basé sur des états,
svelte est un compilateur qui ne tourne pas dans le navigateur
le code compilé va modifié directement le DOM sans un virtual dom
le code qui manipule le dom est produit au build , on ne le load pas dans le client. 

Pas de virtualDom a update au runtime

configure svelte 
->rolup
->webpack
->vite
npm create vite@latest svelte-course -- --template svelte 


# reactive statement

utilisation du $ :
<p>$:variable => la variable est devenu reactive (let implciite)</p>

pour bénéficié du reactive statement la variable réactive doit apparaite dans l'expression
<p>
$: chaine = 'test ${methode()}' ne marche pas <br/>
$: chaine = 'test ${methode(a)}' marche 
</p>
# props 

les props sont utilisé pour le binding d'attribut dans les composants

un example <Component test={valeur} />
Cette valeur est transmise dans component

qui doit declaré la variable

export let test;

Si le props est pas setter , il faut soit lui donné une valeur par defaut 
export let test=0;

soit lui donné une valeur undefined sinon erreur du compilateur.

On peut passé plusieurs props via un objet avec la méthode suivante

<Component {...data} >
si data.variable contient toutes les variables du même nom que le component

pour affiché les props transmise 
<code>
 $:{
      console.log("props "+ JSON.stringify($$props));
      console.log("restProps "+JSON.stringify($$restProps));
    }
</code>
props contient les props passé au composant
restProps contient les props passé au composant mais pas défini avec export let .

# svlete-preprocess
-permet de géré le scss , typescript et bien plus 

npm i svelte-preprocess
npm i sass

# Slot

Pour passer un element a un composant imaginons dans un composant Button.svelte 
on a 

<button><slot/></button>

on peut initialisé la valeur dans ce slot dans un composant Parent
<Button>text</Button>

Le slot sera initialisé.

Slot fallback imaginons qu on initialise pas le slot on peut
<button><slot>Text par defaut </slot></button>

si on initialise pas le slot ce sera cette valeur


## encore plus de slots

<p>
$$slots
</p>
pour recupère les slots

on peut variabilisé un slot
    <slot {isLeftHovered}></slot>
et récupère la valeur dans le composant parent via la directire
let

## condition

{#if}

{:else}

{/if}

## envoyé des evenements depuis un enfant 

## preventdefautt


## restprops customization

<button {...$$restProps}>

peut permettre de setter les valeurs du button via props

<Button disabled > </Button>

## Binding

Handling Inputs in Svelte
Svelte provides multiple ways to handle and bind input values. This flexibility allows developers to choose the most suitable approach for their specific use case. Below are three common methods:

<h1>Method 1: Using bind:this for Direct DOM Access</h1>
The bind:this directive allows you to bind the input element to a variable. This gives you direct access to the DOM element, enabling manual manipulation of its properties or methods.

<script>
    let input;
</script>

<code><input bind:this={input} /></code>

<p>The input element is bound to: {input}</p>
Use Case
Ideal when you need programmatic access to the input element, such as focusing it, clearing its value, or working directly with DOM methods.


<h1>Method 2: Using on:input for Manual Updates</h1>
The on:input directive lets you listen to the input event and manually update a variable. This approach provides complete control over how the value is handled or transformed during updates.


<script>
    let inputText = '';
</script>

<!-- Listen to the `input` event and update `inputText` manually -->
<code>
<input
    on:input={(e) => {
        console.log("Current value: " + e.currentTarget.value);
        inputText = e.currentTarget.value;
    }}
/>
</code>
<p>You typed: {inputText}</p>
Use Case
Best for scenarios where you need additional logic during input updates, such as validation, formatting, or triggering side effects.

<h1>Method 3: Using bind:value for Two-Way Binding</h1>
The bind:value directive is the simplest and most idiomatic way to achieve two-way binding in Svelte. It automatically synchronizes the input's value with the bound variable.

<script>
    let inputText = '';
</script>

<!-- Bind the input's value to `inputText` -->

<code><input bind:value={inputText} />
</code>
<p>You typed: {inputText}</p>
Use Case
Ideal for straightforward input handling where no custom logic or side effects are required. This is the most common and recommended approach for simple use cases.
Comparison of Methods
Method	Description	Best For
bind:this	Provides direct access to the DOM element, allowing for manual manipulation.	Advanced use cases requiring DOM interaction, like programmatic focus or accessing properties.
on:input	Listens to the input event and updates a variable manually, allowing for additional custom logic.	Scenarios where custom side effects or transformations are needed during input updates.
bind:value	Simplifies two-way binding, automatically syncing the variable with the input's value.	Simple and idiomatic input handling without extra logic.
