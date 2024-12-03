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

utilisation du $:
$:variable => la variable est devenu reactive (let implciite)

pour bénéficié du reactive statement la variable réactive doit apparaite dans l'expression

$: chaine = 'test ${methode()}' ne marche pas
$: chaine = 'test ${methode(a)}' marche 

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
 $:{
      console.log("props "+ JSON.stringify($$props));
      console.log("restProps "+JSON.stringify($$restProps));
    }

props contient les props passé au composant
restProps contient les props passé au composant mais pas défini avec export let .


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
