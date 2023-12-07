import React, { useEffect } from "react";
import Countdown from "react-countdown";
import { Text } from "@chakra-ui/react";

// eslint-disable-next-line react/display-name
const CountdownTimer = React.memo(({ setResend, timerKey }) => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return setResend(true);
    } else {
      // Render a countdown

      return (
        <Text color="white">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      );
    }
  };
  return (
    <>
      <Countdown
        key={timerKey}
        date={Date.now() + 30 * 1000}
        renderer={renderer}
        autoStart={true}
      />
    </>
  );
});

export default CountdownTimer;
