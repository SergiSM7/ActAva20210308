function mostraAlertaJPC(){
  alert("Alerta!");
}

function passaSeguentSSM(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i+1].id;
      break;
    };
  }

  amagaElementSSM(idObjPregAct);
  mostraElementSSM(idObjPregSeg);
}

function passaAnteriorSSM(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i-1].id;
      break;
    };
  }

  amagaElementSSM(idObjPregAct);
  mostraElementSSM(idObjPregSeg);
}

function mostraElementSSM(idRebut){
  document.getElementById(idRebut).classList.add("elementVisibleSSM");
  document.getElementById(idRebut).classList.remove("elementOcultSSM");
}

function amagaElementSSM(idRebut){
  document.getElementById(idRebut).classList.remove("elementVisibleSSM");
  document.getElementById(idRebut).classList.add("elementOcultSSM");
}