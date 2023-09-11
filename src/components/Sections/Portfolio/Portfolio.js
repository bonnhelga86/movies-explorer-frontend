import { Link } from "react-router-dom";
import { portfolio } from "../../../utils/portfolioList";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <ul className="portfolio__list page__list">
        {portfolio.map(item => (
          <li key={item.name} className="portfolio__item">
            {item.name}
            <Link
              to={item.path}
              className="portfolio__link page__link"
              target="_blank"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
