import { Card } from "../card";
import "./styles.css";

export function CardList({ cards }) {
  console.log(cards)

  return (
    <div className="cards content__cards">
      {cards.map((dataItem, index) => (
        <Card 
          key={index} 
          {...dataItem} 
          />
      ))}
    </div>
  );
}
