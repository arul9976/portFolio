const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/interaction-1Iv3jBaI.js","assets/index-DOB1Q10d.js","assets/index-W-_6wcIe.css","assets/plugin-DlxA-FZ-.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./index-DOB1Q10d.js";import{O as n}from"./OptionsColor-3YvOLuDb.js";import"./BgParticles-CB47gshh.js";class l{constructor(){this.blur=5,this.color=new n,this.color.value="#000",this.enable=!1}load(i){i&&(i.blur!==void 0&&(this.blur=i.blur),this.color=n.create(this.color,i.color),i.enable!==void 0&&(this.enable=i.enable))}}class c{constructor(){this.enable=!1,this.frequency=1}load(i){i&&(i.color!==void 0&&(this.color=n.create(this.color,i.color)),i.enable!==void 0&&(this.enable=i.enable),i.frequency!==void 0&&(this.frequency=i.frequency),i.opacity!==void 0&&(this.opacity=i.opacity))}}class d{constructor(){this.blink=!1,this.color=new n,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new l,this.triangles=new c,this.width=1,this.warp=!1}load(i){i&&(i.id!==void 0&&(this.id=i.id),i.blink!==void 0&&(this.blink=i.blink),this.color=n.create(this.color,i.color),i.consent!==void 0&&(this.consent=i.consent),i.distance!==void 0&&(this.distance=i.distance),i.enable!==void 0&&(this.enable=i.enable),i.frequency!==void 0&&(this.frequency=i.frequency),i.opacity!==void 0&&(this.opacity=i.opacity),this.shadow.load(i.shadow),this.triangles.load(i.triangles),i.width!==void 0&&(this.width=i.width),i.warp!==void 0&&(this.warp=i.warp))}}async function w(e,i=!0){const{loadLinksInteraction:t}=await o(async()=>{const{loadLinksInteraction:s}=await import("./interaction-1Iv3jBaI.js");return{loadLinksInteraction:s}},__vite__mapDeps([0,1,2])),{loadLinksPlugin:r}=await o(async()=>{const{loadLinksPlugin:s}=await import("./plugin-DlxA-FZ-.js");return{loadLinksPlugin:s}},__vite__mapDeps([3,1,2]));await t(e,i),await r(e,i)}export{d as Links,l as LinksShadow,c as LinksTriangle,w as loadParticlesLinksInteraction};
