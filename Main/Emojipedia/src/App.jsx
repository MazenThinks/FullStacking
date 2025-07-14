import { useState } from "react";
import Title from "./components/Title.jsx";
import Card from "./components/Card.jsx";
import emojipedia from "./components/EmojiPedia.jsx";

// function CardsLooping(emojipedia) {
//   return (
//     <Card
//       emoji={emojipedia.emoji}
//       emojiName={emojipedia.name}
//       emojiMeaning={emojipedia.meaning}
//     />
//   );
// }

const CardsLooping = emojipedia.map((emoji) => {
  return (
    <Card
      key={emoji.id}
      emoji={emoji.emoji}
      emojiName={emoji.name}
      emojiMeaning={emoji.meaning}
    />
  );
});

function App() {
  return (
    <>
      <Title />
      <div className="row">{CardsLooping}</div>
    </>
  );
}

export default App;
