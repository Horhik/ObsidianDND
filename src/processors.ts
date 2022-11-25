import { MarkdownView, MarkdownPostProcessorContext, parseYaml  } from 'obsidian';

import {validate as validateMagic, render as renderMagic} from './magic/magic'
import {validate as validateSkills, render as renderSkills} from './skills/skills'
import {validate as validateStats, render as renderStats} from './stats/stats'


export const magicProcessor = (content: string, el: HTMLElement, ctx: MarkdownPostProcessorContext)=>{
    let json;
    try{
        json = parseYaml(content);
        validateMagic(json, el)
        renderMagic(json, el)
    } catch (error) {
        let errorDiv = document.createElement('div');
        errorDiv.textContent = "Couldn't render plot:" + error;
        el.appendChild(errorDiv);
    }
}



export const statsProcessor = (content: string, el: HTMLElement, ctx: MarkdownPostProcessorContext)=>{
    let json;
    try{
        json = parseYaml(content);
        validateStats(json, el)
        renderStats(json, el)
    } catch (error) {
        let errorDiv = document.createElement('div');
        errorDiv.textContent = "Couldn't render plot:" + error;
        el.appendChild(errorDiv);
    }
}

export const skillsProcessor = (content: string, el: HTMLElement, ctx: MarkdownPostProcessorContext)=>{
    let json;

    try{
        json = parseYaml(content);
        validateSkills(json, el)
        renderSkills(json, el)
    } catch (error) {
        let errorDiv = document.createElement('div');
        errorDiv.textContent = "Couldn't render plot:" + error;
        el.appendChild(errorDiv);
    }
}
