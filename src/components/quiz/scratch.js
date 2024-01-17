import { Box, Center, Image } from "@chakra-ui/react";
import React, { useLayoutEffect, useRef, useState } from "react";

const Scratch = () => {
  const [prizeValue, setPrizeValue] = useState("$10");
  const [isScratchEnabled, setScratchEnabled] = useState(true);

  const hiddenImageRef = useRef();

  useLayoutEffect(() => {
    const canvasElement = document.getElementById("scratch");
    const canvasContext = canvasElement.getContext("2d");

    const initializeCanvas = () => {
      const gradient = canvasContext.createLinearGradient(0, 0, 135, 135);
      gradient.addColorStop(0, "#FFA53B");
      gradient.addColorStop(1, "#FFA53B");
      canvasContext.fillStyle = gradient;
      canvasContext.fillRect(0, 0, 200, 200);

      const prizeOptions = ["$1", "$5", "$10", "$20", "$25", "$30", "$35", "$40", "$45", "$50"];
      const randomPrize = prizeOptions[Math.floor(Math.random() * prizeOptions.length)];
      setPrizeValue(randomPrize);
    };

    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;

    const eventTypes = {
      mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
      },
      touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
      },
    };

    let deviceType = "";

    const checkIfTouchDevice = () => {
      try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
      } catch (e) {
        deviceType = "mouse";
        return false;
      }
    };

    const getMouseCoordinates = (event) => {
      mouseX =
        (!checkIfTouchDevice() ? event.pageX : event.touches[0].pageX) - canvasElement.getBoundingClientRect().left;
      mouseY =
        (!checkIfTouchDevice() ? event.pageY : event.touches[0].pageY) - canvasElement.getBoundingClientRect().top;
    };

    checkIfTouchDevice();

    canvasElement.addEventListener(eventTypes[deviceType].down, (event) => {
      if (isScratchEnabled) {
        isDragging = true;
        getMouseCoordinates(event);
        scratch(mouseX, mouseY);
      }
    });

    canvasElement.addEventListener(eventTypes[deviceType].move, (event) => {
      if (!checkIfTouchDevice()) {
        event.preventDefault();
      }
      if (isDragging && isScratchEnabled) {
        getMouseCoordinates(event);
        scratch(mouseX, mouseY);
      }
    });

    canvasElement.addEventListener(eventTypes[deviceType].up, () => {
      isDragging = false;
    });

    canvasElement.addEventListener("mouseleave", () => {
      isDragging = false;
    });

    const scratch = (x, y) => {
      canvasContext.globalCompositeOperation = "destination-out";
      canvasContext.beginPath();
      canvasContext.arc(x, y, 16, 0, 2 * Math.PI);
      canvasContext.fill();
    };

    const scratchEntireCanvas = () => {
      const step = 5;
      for (let x = 0; x < canvasElement.width; x += step) {
        for (let y = 0; y < canvasElement.height; y += step) {
          scratch(x, y);
        }
      }
    };
    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
    initializeCanvas();
  }, [isScratchEnabled]);

  const handleToggleScratch = () => {
    setScratchEnabled((prevEnabled) => !prevEnabled);
  };

  return (
    <div className="container">
      <div className="base">
        <h4>You Won</h4>
        <h3>{prizeValue}</h3>
        <button onClick={handleToggleScratch}>{isScratchEnabled ? "Disable Scratch" : "Enable Scratch"}</button>
      </div>
      <Center style={{ position: "relative" }}>
        <canvas
          id="scratch"
          width="200"
          height="200"
          style={{
            cursor: 'url("https://media.geeksforgeeks.org/wp-content/uploads/20231030101751/bx-eraser-icon.png"), auto',
          }}
        />
        <Box boxSize="60px" position="absolute">
          <Image
            display={!isScratchEnabled ? "block" : "none"}
            ref={hiddenImageRef}
            src="/LockedWhite.svg"
            alt="Hidden Image"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Center>
    </div>
  );
};

export default Scratch;
