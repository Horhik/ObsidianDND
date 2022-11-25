import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, MarkdownPostProcessorContext, parseYaml  } from 'obsidian';



import * as ps from './src/processors'



// Remember to rename these classes and interfaces!

interface DNDmdSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: DNDmdSettings = {
	mySetting: 'default'
}


export default class DNDmd extends Plugin {
	settings: DNDmdSettings;
	async onload() {
		await this.loadSettings();
	         this.registerMarkdownCodeBlockProcessor('dnd-stats', ps.statsProcessor);
	         this.registerMarkdownCodeBlockProcessor('dnd-skills', ps.skillsProcessor);
	         this.registerMarkdownCodeBlockProcessor('dnd-magic', ps.magicProcessor);

	}

async loadSettings() {
	this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}
	onunload() {

	}
}


