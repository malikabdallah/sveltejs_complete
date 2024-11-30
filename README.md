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