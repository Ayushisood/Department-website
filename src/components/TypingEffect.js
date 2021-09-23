import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function TypingEffect(props) {
  const [result, setResult] = useState(props.text);

  useEffect(() => {
    setResult(result);
  }, [result]);

  return (
    <Typewriter
      options={{
        delay: "natural",
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString(`${result}`).pauseFor(1000).start();
      }}
    />
  );
}

export default TypingEffect;
