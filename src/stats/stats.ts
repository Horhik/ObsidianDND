import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, MarkdownPostProcessorContext, parseYaml  } from 'obsidian';


const allowValues = ["data", "layout", "config", "hp", "hpMax", "lvl", "xp", "xpMax", "hpTime","defence","initiative","speed"];

const genhtml = (json: any) => `
<style>
.stats_wrap {
    width: 400px;
    display: flex;
    padding: 10px;
    justify-content: space-around;
    
}

.stats {
display: flex;
}



.lvl_lable {
    display: flex;
}

.defence{
display: flex;
}

.speed {
display: flex;
}


.hp-block, .lvl-block{
    padding: 5px;
    font-weight: bold;
    font-size: 1.3em;
}

.hp-value{
display: flex;
}

.lvl_wrap{
display:flex;
}

.label-block-max{
    color: var(--color-green);
}

.label-block-curr{
    color: var(--color-red);
}

.stats_wrap{
display: flex;
padding: 10px;
}

.label{
font-family: var(--font);
font-weight: bold;
font-size: 1.3em;
color: var(--headers);
}

.stats-wrapper{
display:flex;
flex-direction: column;
text-align: center;
align-items: center;
align-content: center;
}

.stats-el{
    display: flex;
    padding: 10px;
    font-family: var(--font);
    font-weight: bold;
    font-size: 1.6em;
    flex-direction: column;
}


.stats-el span{
  font-size: 0.5em;
  
}

}

</style>

<section class="stats-wrapper">

<div class="stats_wrap">
  <div class="stats">
<div class="stats hp">

     <div class="hp-block label"> HP:</div> <div class="hp-block hp-progress">
      <div class="hp-value"><div class="label-block-curr">${json.hp}</div>/<div class="label-block-max">${json.hpMax}</div></div>
       </div>
  </div>
</div>

  <div class="stats lvl-lable">
    <div class="lvl-block label">LVL:</div>
    <div class="lvl-block lvl-lable">${json.lvl}
    </div>
  </div>
</div>
  <div class="hp">
    <div class="xp-block label">XP <span><span class="label-block-curr">${json.xp}</span>/<span class="label-block-max">${json.xpMax}</span></span></div> <div class="hp-progress">
      <progress id="xp" value="${json.xp}" max="${json.xpMax}"> ${json.xpMax/json.xp}% </progress></div> </div>
</div>
<div class="stats_wrap">
<div class="stats-el defence">
  <div class="defence-val">
    ${json.defence}
  </div>
  <span>КД</span>
</div>

<div class="stats-el initiative">
  <div class="initiative-val">
    ${json.initiative}
  </div>
  <span>Инициатива</span>
</div>

<div class="stats-el speed">
  <div class="speed-val">
    ${json.speed}
  </div>
  <span>Cкорость</span>
</div>
</div>
</div>

</section>

`;

export const validate = (json: any, el: HTMLElement) => {
    if(!json){
        throw "There should be a valid JSON in this block."
    }

    Object.keys(json).forEach(key=>{
        if(!allowValues.contains(key)){
            throw "The only valid keys are data, layout and config."
        }
    })
}

export const render = (json: any, el: HTMLElement) => {
    let destination = document.createElement('div');
    destination.innerHTML = destination.innerHTML + genhtml(json);

    if(el.firstElementChild!=null){
        el.replaceChild(destination, el.firstElementChild);
    } else {
        el.appendChild(destination);
    }
}


export const preprocessor = (content: string, el: HTMLElement, ctx: MarkdownPostProcessorContext)=>{
    let json;
    try{
        json = parseYaml(content);
        validate(json, el)
        render(json, el)
    } catch (error) {
        let errorDiv = document.createElement('div');
        errorDiv.textContent = "Couldn't render plot:" + error;
        el.appendChild(errorDiv);
    }
}
