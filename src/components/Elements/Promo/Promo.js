import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <p className="promo__text">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <NavTab/>
      <div className="promo__image"></div>
    </section>
  );
}

export default Promo;
