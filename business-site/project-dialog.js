
import { sceneMarkup } from "./project-scenes.js";
const projects = {
 dance: { type:"dansvilla", title:"The Dansvilla Studio", status:"Live website", href:"https://www.thedansvillastudio.com/", description:"A dance studio website that brings classes, schedules, pricing, events, and guided enquiries into one clear experience.", points:["Class, rental, and event information","Guided enquiries with WhatsApp handoff","Responsive layout for students and families"] },
 telo: { type:"business", title:"Telodynamic Solutions", status:"Live website", href:"https://telodynamic.com/", description:"A specialized business website presenting nuclear medicine engineering services, products, and contact routes.", points:["Clear service and product pages","Remote handling, shielding, and hot cell support information","Visible phone, email, and enquiry routes"] },
 drive: { type:"driving", title:"AI Driving School", status:"Website preview", href:"https://ai-driving-school-rho.vercel.app/", description:"A website preview for driving lessons in Hamilton and Burlington, designed to make lesson options and contact information easier to find.", points:["Local service-area information","Clear lesson and package presentation","Preview only; business launch requirements remain separate"] }
};
const dialog = document.createElement("dialog");
dialog.className = "business-project-dialog";
dialog.setAttribute("aria-labelledby","business-project-title");
document.body.append(dialog);
let previousBodyOverflow = "";
dialog.addEventListener("close",()=>{document.body.style.overflow=previousBodyOverflow;});
document.querySelectorAll("a.project").forEach(card => {
  const key = Object.keys(projects).find(key => card.querySelector(".project-art."+key));
  const project = projects[key];
  if (!project) return;
  card.addEventListener("click",event => {
    if(event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0 || typeof dialog.showModal !== "function") return;
    event.preventDefault();
    dialog.innerHTML = '<div class="business-dialog-inner"><div class="business-dialog-head"><small>BEHIND THE PROJECT</small><button class="business-dialog-close" aria-label="Close project details" type="button">×</button></div><div class="business-dialog-grid"><div class="project-scene"><div class="scene-viewport">'+sceneMarkup(project.type)+'</div><div class="scene-toolbar"><p>Concept illustration · not a live simulation</p><button class="scene-replay" type="button">↻ Replay animation</button></div></div><div class="business-dialog-copy"><span class="pill '+(key==="drive"?"preview":"")+'">'+project.status+'</span><h2 id="business-project-title">'+project.title+'</h2><p>'+project.description+'</p><ul>'+project.points.map(point=>'<li>'+point+'</li>').join('')+'</ul><a class="btn" href="'+project.href+'" target="_blank" rel="noopener noreferrer">'+(key==="drive"?"Visit website preview":"Visit live website")+' ↗</a></div></div></div>';
    dialog.querySelector(".business-dialog-close").addEventListener("click",()=>dialog.close());
    dialog.querySelector(".scene-replay").addEventListener("click",()=>{dialog.querySelector(".scene-viewport").innerHTML=sceneMarkup(project.type);});
    previousBodyOverflow=document.body.style.overflow;
    document.body.style.overflow="hidden";
    dialog.showModal();
  });
});
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
