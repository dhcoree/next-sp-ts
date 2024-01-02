import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Idiomas" />
      <div className="languages-info">
        <span>🇺🇸 EN - Escrita e Leitura</span>
        <span>🇧🇷 PT-BR - Língua nativa</span>
      </div>
      <SectionTitle text="Formação" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Análise e desenvolvimento de sistemas. Graduação ensino superior | UFMG FACEC, Cianorte</span>
      </div>
      <div className="educational-info">
        <span>🎓</span>
        <span>Publicidade e Propaganda. Graduação ensino superior | Unicesumar, Maringá</span>
      </div>
    </div>
  )
}