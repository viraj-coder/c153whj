//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.speedOfRotation=this.el.getAttribute("rotation")
      var planeRotation=this.data.speedOfRotation
      if (e.key === "ArrowRight") {
        if (planeRotation.x<10) {
          planeRotation.x+=0.5;
          this.el.setAttribute("rotation",planeRotation)
        }
      }
      if (e.key === "ArrowLeft") {
        if (planeRotation.x>-10) {
          planeRotation.x-=0.5;
          this.el.setAttribute("rotation",planeRotation)
        }
        

      }
      if (e.key === "ArrowUp") {
        if (planeRotation.z>20) {
          planeRotation.z+=0.5;
          this.el.setAttribute("rotation",planeRotation)
        }
      }
      if (e.key === "ArrowDown") {
        if (planeRotation.z>-10) {
          planeRotation.z-=0.5;
          this.el.setAttribute("rotation",planeRotation)
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});




