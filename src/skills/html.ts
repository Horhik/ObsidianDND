import {css} from '../../assets/css';
import {getModificator} from '../math';


const getVal = (skill: any) => skill[0];
const getMark = (skill: any) => skill[1];


export const html = (json: any) =>  {
const modificators= {
  strength:  getModificator(getVal(json.strength)),
  dexterity: getModificator(getVal(json.dexterity)),
  constitution: getModificator(getVal(json.constitution)),
  intelligence: getModificator(getVal(json.intelligence)),
  wisdom: getModificator(getVal(json.wisdom)),
  charisma: getModificator(getVal(json.charisma))
};
const val = {
  strength:  getVal(json.strength),
  dexterity: getVal(json.dexterity),
  constitution: getVal(json.constitution),
  intelligence: getVal(json.intelligence),
  wisdom: getVal(json.wisdom),
  charisma: getVal(json.charisma)
};

const mark = {
  strength:  getMark(json.strength),
  dexterity: getMark(json.dexterity),
  constitution: getMark(json.constitution),
  intelligence: getMark(json.intelligence),
  wisdom: getMark(json.wisdom),
  charisma: getMark(json.charisma)
};

const bonus = json.prof_bonus;

return `
${css}
<div class="skills_wrap">
  <div class="skills_wrap">
    <h3> Характеристики  </h3>
    <section class="main-skills-block">
      <ul class="main-skills-list">
        <li class="main-skills-item"><div class="main-skills-item-label">Сила</div><div class="main-skills-item-value">${getVal(json.strength)}</div><div class="main-skill-item-plus">${modificators.strength}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Ловкость</div><div class="main-skills-item-value">${getVal(json.dexterity)}</div><div class="main-skill-item-plus">${modificators.dexterity}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Телосложение</div><div class="main-skills-item-value">${getVal(json.constitution)}</div><div class="main-skill-item-plus">${modificators.constitution}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Интеллект</div><div class="main-skills-item-value">${getVal(json.intelligence)}</div><div class="main-skill-item-plus">${modificators.intelligence}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Мудрость</div><div class="main-skills-item-value">${getVal(json.wisdom)}</div><div class="main-skill-item-plus">${modificators.wisdom}</div></li>
        <li class="main-skills-item"><div class="main-skills-item-label">Харизма</div><div class="main-skills-item-value">${getVal(json.charisma)}</div><div class="main-skill-item-plus">${modificators.charisma}</div></li>
      </ul>
    </section>
  </div>
  <div class="skills_wrap">
   <h3> Спасброски </h3>
    <section class="skills-block">
      <ul class="skills-list">
        <li class="skills-item"><span class="skills-item-label">Сила</span><div class="skills-item-value">${mark.strength ==1? modificators.strength + bonus: modificators.strength} </div><div class="skill-item-mark">${mark.strength == 1 ? "⚪" : ""}</div></li>
        <li class="skills-item"><span class="skills-item-label">Ловкость</span><div class="skills-item-value">${mark.dexterity ==1? modificators.dexterity + bonus: modificators.dexterity} </div><div class="skill-item-mark">${mark.dexterity == 1 ? "⚪" : ""}</div></li>
        <li class="skills-item"><span class="skills-item-label">Телосложение</span><div class="skills-item-value">${mark.constitution ==1? modificators.constitution + bonus: modificators.constitution} </div><div class="skill-item-mark">${mark.constitution == 1 ? "⚪" : ""}</div></li>
        <li class="skills-item"><span class="skills-item-label">Интеллект</span><div class="skills-item-value">${mark.intelligence ==1? modificators.intelligence + bonus: modificators.intelligence} </div><div class="skill-item-mark">${mark.intelligence == 1 ? "⚪" : ""}</div></li>
        <li class="skills-item"><span class="skills-item-label">Мудрость</span><div class="skills-item-value">${mark.wisdom ==1? modificators.wisdom + bonus: modificators.wisdom} </div><div class="skill-item-mark">${mark.wisdom == 1 ? "⚪" : ""}</div></li>
        <li class="skills-item"><span class="skills-item-label">Харизма</span><div class="skills-item-value">${mark.charisma ==1? modificators.charisma + bonus: modificators.charisma} </div><div class="skill-item-mark">${mark.charisma == 1 ? "⚪" : ""}</div></li>
      </ul>
    </section>
  </div>
  <div class="skills_wrap">
    <h3> Навыки </h3>
    <section class="skills-block">
      <ul class="skills-list">


<li class="skills-item"><span class="skills-item-label">Акробатика </span><div class="skills-item-value">${json.acrobatics == 1 ? modificators.dexterity  + bonus: modificators.dexterity  } </div><div class="skill-item-mark">${json.acrobatics  == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Анализ </span><div class="skills-item-value">${json.investigation== 1 ? modificators.intelligence  + bonus: modificators.intelligence  } </div><div class="skill-item-mark">${json.investigation == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Атлетика </span><div class="skills-item-value">${json.athletics== 1 ? modificators.strength  + bonus: modificators.strength  } </div><div class="skill-item-mark">${json.athletics == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Восприятие </span><div class="skills-item-value">${json.perception== 1 ? modificators.wisdom  + bonus: modificators.wisdom  } </div><div class="skill-item-mark">${json.perception == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Выживание </span><div class="skills-item-value">${json.survival== 1 ? modificators.wisdom  + bonus: modificators.wisdom  } </div><div class="skill-item-mark">${json.survival == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Выступление </span><div class="skills-item-value">${json.performance== 1 ? modificators.charisma  + bonus: modificators.charisma  } </div><div class="skill-item-mark">${json.performance == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Запугивание </span><div class="skills-item-value">${json.intimidation== 1 ? modificators.charisma  + bonus: modificators.charisma  } </div><div class="skill-item-mark">${json.intimidation == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">История </span><div class="skills-item-value">${json.history== 1 ? modificators.intelligence  + bonus: modificators.intelligence  } </div><div class="skill-item-mark">${json.history == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Ловкостьрук </span><div class="skills-item-value">${json.sleight_of_hand== 1 ? modificators.dexterity  + bonus: modificators.dexterity  } </div><div class="skill-item-mark">${json.sleight_of_hand == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Магия </span><div class="skills-item-value">${json.arcana== 1 ? modificators.intelligence  + bonus: modificators.intelligence  } </div><div class="skill-item-mark">${json.arcana == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Медицина </span><div class="skills-item-value">${json.medicine== 1 ? modificators.wisdom  + bonus: modificators.wisdom  } </div><div class="skill-item-mark">${json.medicine == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Обман </span><div class="skills-item-value">${json.deception== 1 ? modificators.charisma  + bonus: modificators.charisma  } </div><div class="skill-item-mark">${json.deception == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Природа </span><div class="skills-item-value">${json.nature== 1 ? modificators.intelligence  + bonus: modificators.intelligence  } </div><div class="skill-item-mark">${json.nature == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Проницательность </span><div class="skills-item-value">${json.insight== 1 ? modificators.wisdom  + bonus: modificators.wisdom  } </div><div class="skill-item-mark">${json.insight == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Религия </span><div class="skills-item-value">${json.religion== 1 ? modificators.intelligence  + bonus: modificators.intelligence  } </div><div class="skill-item-mark">${json.religion == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Скрытность </span><div class="skills-item-value">${json.stealth== 1 ? modificators.dexterity  + bonus: modificators.dexterity  } </div><div class="skill-item-mark">${json.stealth == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Убеждение </span><div class="skills-item-value">${json.persuasion== 1 ? modificators.charisma  + bonus: modificators.charisma  } </div><div class="skill-item-mark">${json.persuasion == 1 ? "⚪" : ""}</div></li>
<li class="skills-item"><span class="skills-item-label">Уходзаживотными </span><div class="skills-item-value">${json.animal_handling== 1 ? modificators.wisdom  + bonus: modificators.wisdom  } </div><div class="skill-item-mark">${json.animal_handling == 1 ? "⚪" : ""}</div></li>
      </ul>
    </section>
  </div>
</div>
`};
