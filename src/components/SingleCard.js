import "./SingleCard.css";

/** _rfc + tab -> makes a stateless functional component
 ** named from file name
 ** with export default included
 *
 * could use props or destructure the parameter: { card }
 * */

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
