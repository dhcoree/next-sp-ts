import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experiências" />
      <p>Trabalho há 3 anos como desenvolvedor de front end em empresas como Db1 global software e Smarppy.</p>
      <div className="experience-time">
        <Skill image="/react.png" measure={2} years="2 anos" />
        <Skill image="/ts.png" measure={2} years="2 anos" />
        <Skill image="/js.png" measure={3} years="3 anos" />
        <Skill image="/java.png" measure={1} years="1 ano" />
      </div>
    </div>
  )
}