import React from "react";

function Card(props) {
  return (
    <>
      <div className="col">
        <div className="card">
          <dl>
            <dt>
              <span className="Emoji">{props.emoji}</span>
              <br />
              <h2 className="EmojiName">{props.emojiName}</h2>
            </dt>
            <p className="EmojiDescription">{props.emojiMeaning}</p>
          </dl>
        </div>
      </div>
    </>
  );
}

export default Card;
