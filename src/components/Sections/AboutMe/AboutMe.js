import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <p className="student__name">Ольга</p>
      <p className="student__profession">Фронтенд-разработчик, 37 лет</p>
      <p className="student__about">
        Я родилась и живу в Саратове, закончила факультет управления проиовдственными
        системами СГТУ. У меня есть муж и трое детей. Я люблю слушать музыку и увлекаюсь спортом.
        С 2013 года начала самостоятельно изучать программирование. Некоторое время
        работала в небольшой ИТ компании. После декрета прошла курс по веб-разработке.
        Сейчас нахожусь в поиске работы по специальности "Фронтенд-разработчик".
      </p>
      <Link
        to="https://github.com/bonnhelga86"
        className="student__link"
        target="_blank"
      >
        Github
      </Link>
    </section>
  );
}

export default AboutMe;
