let scale = 0.15
var stage = new Konva.Stage({
  container: 'konva',   // id of container <div>
  width: 300,
  height: 300
});

// then create layer
var layer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 30,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 8
});

// add the shape to the layer
// layer.add(circle);

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();


function drawokleina(){
  let select = app.$root.dane2[4].dane.find((el)=>el.current==true).artnr;
  var imageObj = new Image(); imageObj.src = `images/konva/tla/${select}.png`;
        imageObj.onload = function() {
          let image = new Konva.Image({x: 50,y: 50,image: imageObj,width: 800 * scale,height: 2100 * scale});
          layer.add(image);layer.batchDraw();
        };
}


function drawklamka(){
  try {
  let select1 = app.$root.dane2[3].dane.find((el)=>el.current==true).artnr;
  let select2 = app.$root.dane2[5].dane.find((el)=>el.current==true).artnr;
  var imageObj = new Image(); imageObj.src = `images/konva/klamki/${select1}-${select2}.png`;
        imageObj.onload = function() {
          let image = new Konva.Image({x: 130 ,y: 150 ,image: imageObj,width: 170 * scale,height: 200 * scale});
          layer.add(image);layer.batchDraw();
        };
  }catch(e){
    console.log(e.message);
  }
}

function draw(){
drawokleina();
drawklamka();

}
