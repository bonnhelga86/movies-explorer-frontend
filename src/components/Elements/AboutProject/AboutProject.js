function AboutProject() {
  return (
    <section className="about">
      <h2 className="about__title">О проекте</h2>

      <div className="about__wrap">
        <div className="about__info">
          <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__info">
          <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about__timeline">
        <div className="about__timepart">
          <div className="about__line about__line_tech_back"></div>
          <p className="about__label">Back-end</p>
        </div>
        <div className="about__timepart">
          <div className="about__line about__line_tech_front"></div>
          <p className="about__label">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
