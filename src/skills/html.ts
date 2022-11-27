import {css} from '../../assets/css';
import {getModificator} from '../math';

export const html = (json: any) =>  `
${css}
<div class="skills_wrap">
  <div class="skills_wrap">
    <h3> Характеристики  </h3>
    <section class="main-skills-block">
      <ul class="main-skills-list">
        <li class="main-skills-item"><div class="main-skills-item-label">Сила</div><div class="main-skills-item-value">${json.strength}</div><div class="main-skill-item-plus">${getModificator(json.strength)}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Ловкость</div><div class="main-skills-item-value">${json.dexterity}</div><div class="main-skill-item-plus">${getModificator(json.dexterity)}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Телосложение</div><div class="main-skills-item-value">${json.constitution}</div><div class="main-skill-item-plus">${getModificator(json.constitution)}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Интеллект</div><div class="main-skills-item-value">${json.intelligence}</div><div class="main-skill-item-plus">${getModificator(json.intelligence)}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Мудрость</div><div class="main-skills-item-value">${json.wisdom}</div><div class="main-skill-item-plus">${getModificator(json.wisdom)}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Харизма</div><div class="main-skills-item-value">${json.charisma}</div><div class="main-skill-item-plus">${getModificator(json.charisma)}</div></li>
      </ul>
    </section>
  </div>
  <div class="skills_wrap">
   <h3> Спасброски </h3>
    <section class="skills-block">
      <ul class="skills-list">
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
      </ul>
    </section>
  </div>
  <div class="skills_wrap">
    <h3> Навыки </h3>
    <section class="skills-block">
      <ul class="skills-list">
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
        <li class="skills-item"><div class="skills-item-value">${json.wisdom}</div><div class="skill-item-mark">${json.wisdom}</div></li>
      </ul>
    </section>
  </div>
</div>
`
