import { techs } from "../../../utils/techList";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title content__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </p>

      <ul className="techs__list page__list">
        {techs.map(tech => (
          <li key={tech} className="techs__item">{tech}</li>
        ))}
      </ul>
    </section>
  );
}

export default Techs;
