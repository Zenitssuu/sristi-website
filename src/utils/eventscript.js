// import { EventItem } from "../constants/eventItems.js";
// import gsap from "gsap";

// document.addEventListener("DOMContentLoaded", function(){
//     const gallery=document.querySelector(".gallery");
//     const numberOfItems=25;
//     const radius=1100;
//     const centerX=window.innerWidth/2;
//     const centerY=window.innerHeight/3;
//     const angleIncrement=(2*Math.PI)/numberOfItems;

//     for(let i=0;i<25;i++){
//         const item=document.createElement("div");
//         item.className="item";
//         const p=document.createElement("p");
//         p.textContent=EventItem[i].name;
        
//         item.appendChild(p);
//         console.log(item);
//         gallery.appendChild(item);

        

//         const angle=i*angleIncrement;
//         const x=centerX+radius*Math.cos(angle);
//         const y=centerY+radius*Math.sin(angle);
//         const rotation=(angle*180)/Math.PI;

//         gsap.set(item,{
//             x:x+"px",
//             y: y+"py",
//             rotation: rotation,
//         });
//     }
// })
