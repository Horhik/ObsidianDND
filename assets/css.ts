export const css = `
<style>
.stats_wrap {
    width: 100%;
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
flex-wrap: wrap;
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

.main-skills-list{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-around;

}

.main-skills-item{
    border: none;
    border-width: 0;
    display: flex;
    padding: 18px;
    flex-direction: column;
    align-items: center;
    background: var(--accent2);
    font-family: var(--font);
    padding: 9px 18px;
    margin: 12px;
    border-radius: 16px;
}


.skills_wrap li:nth-child(even), .skills_wrap li{
    border: none;
    border-width: 0;
}

.main-skills-block {
    display: flex;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
}

.main-skills-item-value {
    padding: 20px;
    font-family: var(--font);
    font-size: 1.9em;
    font-weight: bold;
    padding: 8px 16px;

}

.main-skills-item::after, .main-skill-item-plus::after, .main-skill-item-plus::before, .main-skills-item::before {
    display: none;
}
.main-skill-item-plus{

    padding: 5px 10px;
    background: var(--background-primary);
    font-family: var(--font);
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 6px 20px;
    font-size: 1.5em;


}

.main-skills-item-label{
    margin-top: 10px;
    font-size: 1.4em;

}

.main-skills-item-label::first-letter {
    font-weight: bold;
    color: var(--folder);
    font-size: 1.2em;
}



</style>
`;
