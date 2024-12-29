
export default function longpress (node, options){

    const {duraction = 2000} = options;
    let timer;
    function handleMouseDown(){
        timer = setTimeout(() => {
            node.dispatchEvent(new CustomEvent("longpress"))
        }, duraction);
    }

    function handleMouseUp(){
        clearTimeout(timer);
    
    }

    node.addEventListener('mousedown',handleMouseDown);
    node.addEventListener('mouseup',handleMouseUp);

    console.log(node, options);
    return {
        destroy(){
            console.log("destroy");
        },

        update(newOptions){
            console.log(`new options ${newOptions}`);
        }
    }
}