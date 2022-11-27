
import {css} from '../../assets/css';

export const html = (json: any) => `
${css}

<section class="stats-wrapper">

<div class="stats_wrap">
  <div class="stats">
<div class="stats hp">

     <div class="hp-block label"> HP:</div> <div class="hp-block hp-progress">
      <div class="hp-value"><div class="label-block-curr">${json.hp + json.hpTime}</div>/<div class="label-block-max">${json.hpMax + json.hpTime}</div></div>
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
  <span>🛡️  КД</span>
</div>

<div class="stats-el initiative">
  <div class="initiative-val">
    ${json.initiative}
  </div>
  <span>⚔ Инициатива</span>
</div>

<div class="stats-el speed">
  <div class="speed-val">
    ${json.speed}
  </div>
  <span>🏃 Cкорость</span>
</div>

<div class="stats-el inspiration">
  <div class="inspiration-val">
${json.inspiration?"😇":"🚫"}
  </div>
  <span>Вдохновение</span>
</div>


<div class="stats-el tiredness">
  <div class="tiredness-val">
${json.tiredness}
  </div>
  <span>🥱 Истощение</span>
</div>

</div>
</div>

</section>

`;
