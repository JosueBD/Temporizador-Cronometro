document.addEventListener('DOMContentLoaded',()=>{
  /* ---- CRONÓMETRO ---- */
  let cronoSeg = 0, cronoInt;
  const cronoDisplay=document.getElementById('cronometro');
  function mostrarCrono(){
    let h=Math.floor(cronoSeg/3600).toString().padStart(2,'0');
    let m=Math.floor((cronoSeg%3600)/60).toString().padStart(2,'0');
    let s=(cronoSeg%60).toString().padStart(2,'0');
    cronoDisplay.textContent=`${h}:${m}:${s}`;
  }
  document.getElementById('iniciar-crono').onclick=()=>{
    if(cronoInt) return;
    cronoInt=setInterval(()=>{cronoSeg++;mostrarCrono();},1000);
  };
  document.getElementById('pausar-crono').onclick=()=>{clearInterval(cronoInt);cronoInt=null;};
  document.getElementById('reset-crono').onclick=()=>{cronoSeg=0;mostrarCrono();clearInterval(cronoInt);cronoInt=null;};
  mostrarCrono();

  /* ---- TEMPORIZADOR ---- */
  let tempoSeg=0, tempoInt;
  const tempoDisplay=document.getElementById('temporizador');
  function mostrarTempo(){
    let m=Math.floor(tempoSeg/60).toString().padStart(2,'0');
    let s=(tempoSeg%60).toString().padStart(2,'0');
    tempoDisplay.textContent=`${m}:${s}`;
  }
  document.getElementById('iniciar-tempo').onclick=()=>{
    const min=+document.getElementById('minutos').value||0;
    const seg=+document.getElementById('segundos').value||0;
    if(tempoSeg===0) tempoSeg=min*60+seg;
    if(tempoSeg<=0) return;
    if(tempoInt) return;
    tempoInt=setInterval(()=>{
      tempoSeg--;
      mostrarTempo();
      if(tempoSeg<=0){clearInterval(tempoInt);tempoInt=null;alert('¡Tiempo terminado!');}
    },1000);
  };
  document.getElementById('pausar-tempo').onclick=()=>{clearInterval(tempoInt);tempoInt=null;};
  document.getElementById('reset-tempo').onclick=()=>{tempoSeg=0;mostrarTempo();clearInterval(tempoInt);tempoInt=null;};
  mostrarTempo();
});
