import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, MarkdownPostProcessorContext, parseYaml  } from 'obsidian';

import {html} from './html';


const allowValues = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "prof_bonus", "acrobatics", "animal_handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight_of_hand", "stealth", "survival"]

const genhtml = (json: any) => html(json);


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
