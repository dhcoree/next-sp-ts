import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🇺🇸 EN - Writing & Reading</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Analysis and systems development Bachelors Degree | UFMG FACEC, Cianorte</span>
        <span>Advertising and marketing Bachelors Degree | Unicesumar, Maringá</span>
      </div>
    </div>
  )
}