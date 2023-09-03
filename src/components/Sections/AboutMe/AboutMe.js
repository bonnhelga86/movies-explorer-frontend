import { Link } from 'react-router-dom';
import student from '../../../images/student.jpg';

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title content__title">Студент</h2>
      <div className="student__wrap">
        <div className="student__info">
          <p className="student__name">Виталий</p>
          <p className="student__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="student__about">
          Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ.
          У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом.
          Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
          После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
          фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
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
