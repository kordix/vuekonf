this.dane2.find((el)=>el.nazwa=='szyba').dane.map((el)=>
el.wzory = []
);

getSzyby:function(){
  if(this.dane2[1].dane.find((el)=>el.current==true)){
    let origin = this.szybyorig;
    let model = this.dane2[1].dane.find((el)=>el.current==true).artnr;
    this.dane2.find((el)=>el.nazwa=='szyba').dane = origin;
    this.dane2.find((el)=>el.nazwa=='szyba').dane = this.dane2.find((el)=>el.nazwa=='szyba').dane.filter((el)=>el.wzory.indexOf(model)>=0);
  }
},
getPivotSzybyApi:async function(szyba){
  const request = async () => {
    console.log('1');
      const response = await fetch(`/api/szybapivot/${szyba}`);
      const json = await response.json();
      console.log(json);
      json.map((el)=>
      this.dane2.find((el)=>el.nazwa=='szyba').dane.find((el)=>el.artnr==szyba).wzory.push(el)
    )
  }
  await request();
},
getPivotSzybyAll:async function(){
  let tab = this.dane2.find((el)=>el.nazwa=='szyba').dane;

  for(let i=0;i<tab.length;i++){
    await this.getPivotSzybyApi(tab[i].artnr);
  }
}


:src="'images/'+dane2.find((el)=>el.current==true).nazwa+'/'+item.artnr+'.png' " 
