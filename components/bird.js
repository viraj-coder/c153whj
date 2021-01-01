AFRAME.registerComponent("flying-birds", {
init:function(){
    for(var i=1;i<=20;i++){
        var id=`hurdles${i}`
        var posX=(Math.random()*3000+(-1000))
        var posY=(Math.random()*2+(-1))
        var posZ=(Math.random()*3000+(-1000))
        var position={x:posX,y:posY,z:posZ}
        this.flyingBirds(id,position)
    }
},
flyingBirds:(id,position)=>{
    var terrainEl=document.querySelector("#terrain")
    var birdEl=document.createElement("a-entity")
    birdEl.setAttribute("id",id)
    birdEl.setAttribute("id",id)
    birdEl.setAttribute("scale",{x:500,y:500,z:500})
    birdEl.setAttribute("gltf-model",)
    birdEl.setAttribute("animation-mixer",{})
    terrainEl.appendChild(birdEl)

}
})