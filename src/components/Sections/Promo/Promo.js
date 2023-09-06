import NavTab from '../../Elements/NavTab/NavTab';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <NavTab/>
      </div>
      <div className="promo__image"></div>
    </section>
  );
}

export default Promo;
