import { Link } from 'react-router-dom';
import student from '../../../images/student.jpg';

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title content__title">Студент</h2>
      <div className="student__wrap">
        <div className="student__info">
          <div className="student__data">
            <h3 className="student__name">Ольга</h3>
            <p className="student__profession">Фронтенд-разработчик, 37 лет</p>
            <p className="student__about">
              Я&nbsp;родилась и&nbsp;живу в&nbsp;Саратове, закончила факультет управления
              производственными системами СГТУ.
              У&nbsp;меня есть муж и&nbsp;трое детей. Я&nbsp;люблю слушать музыку, читать
              и&nbsp;смотреть хорошие фильмы.
              Программированием увлекаюсь давно. Самостоятельно изучала интересующие меня технологии.
              После того, как прошла курс по&nbsp;веб-разработке, начала писать собственные проекты
              и&nbsp;активно искать работу.
            </p>
          </div>
          <Link
            to="https://github.com/bonnhelga86"
            className="student__link page__link"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <img
          src={student}
          alt="Фото студента"
          className="student__photo"
        />
      </div>
    </section>
  );
}

export default AboutMe;
