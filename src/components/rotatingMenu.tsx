'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Add actual paths for Mario's images
import MarioStanding from '@/assets/mario-standing.png';
import MarioRunningLeft from '@/assets/mario-running-left.png';
import MarioRunningRight from '@/assets/mario-running-right.png';
import BoxImg from '@/assets/yellow-box.png'; // Add the actual box image path

const MarioGame = () => {
  // Mario's position
  const [marioPosition, setMarioPosition] = useState(0); // Mario's horizontal position (percentage of screen width)
  const [marioYPosition, setMarioYPosition] = useState(0); // Mario's vertical position (standing on the ground)
  const [jumping, setJumping] = useState(false); // Whether Mario is jumping
  const [isRunning, setIsRunning] = useState(false); // Whether Mario is running
  const [runDirection, setRunDirection] = useState(''); // 'left' or 'right' for leg animation direction
  const [canJump, setCanJump] = useState(true); // Whether Mario can jump

  // Define boxes (in this case the yellow boxes Mario can jump to)
  const boxes = [
    { x: 30, y: 30, page: 'about' }, // About page (X = 30%, Y = 50% from the bottom)
    { x: 70, y: 30, page: 'blog' }, // Blog page (X = 70%, Y = 50% from the bottom)
    { x: 80, y: 20, page: 'edc' }, // Blog page (X = 70%, Y = 50% from the bottom)
  ];

  // Handle key press for Mario's movement and jumping
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (jumping) return; // Prevent movement while jumping

      if (e.key === 'ArrowLeft' && marioPosition > 5) {
        setMarioPosition(marioPosition - 5); // Move Mario left
        setIsRunning(true); // Mario is running
        setRunDirection('left'); // Mario is running left
      } else if (e.key === 'ArrowRight' && marioPosition < 95) {
        setMarioPosition(marioPosition + 5); // Move Mario right
        setIsRunning(true); // Mario is running
        setRunDirection('right'); // Mario is running right
      } else if (e.key === ' ' && canJump) {
        jump(); // Trigger Mario's jump
      } else {
        setIsRunning(false); // Stop running animation when not moving
      }
    };

    const handleKeyRelease = (e: KeyboardEvent) => {
      if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && !jumping) {
        setIsRunning(false); // Stop running when keys are released
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, [marioPosition, jumping, canJump]);

  // Jumping logic (up and down)
  const jump = () => {
    if (jumping) return; // Prevent starting a new jump if already jumping
  
    setJumping(true); // Set jumping to true when Mario starts jumping
    setCanJump(false); // Disable jumping during the jump
  
    // Move Mario up
    setMarioYPosition((prevY) => prevY + 30); // Mario moves up initially by 30 units
  
    // After 1 second, begin moving Mario down
    setTimeout(() => {
      setMarioYPosition((prevY) => prevY - 30); // Move Mario down by 30 units
    }, 500); // Start moving back down after 1 second
  
    // After 3 seconds, set Mario's Y position to 0 (the ground) and reset jump state
    setTimeout(() => {
      setMarioYPosition(0); // Reset Mario's Y position to 0 (ground level)
      setJumping(false); // End the jump
      setCanJump(true); // Allow jumping again
    }, 1000); // This happens after 3 seconds
  };

  // Collision detection with boxes
  const checkBoxHit = () => {
    boxes.forEach(box => {
      const horizontalDistance = Math.abs(marioPosition - box.x);
      const verticalDistance = Math.abs(marioYPosition - box.y);

      if (horizontalDistance < 5 && verticalDistance < 5) {
        // Navigate to the page by using window.location.assign
        window.location.assign(`/${box.page}`);
      }
    });
  };

  // Check for box collisions on Mario's position change
  useEffect(() => {
    checkBoxHit();
  }, [marioPosition, marioYPosition]);

  return (
    <div className="absolute top-0 w-full h-full -my-16">
        <div className='flex justify-center items-center my-32 text-3xl'>
            IT'S ME GABRIELE
        </div>
      {/* Mario */}
      <div
        className="absolute"
        style={{
          left: `${marioPosition}%`,
          bottom: `${marioYPosition}%`,
        }}
      >
        <Image
          src={isRunning ? (runDirection === 'left' ? MarioRunningLeft : MarioRunningRight) : MarioStanding}
          alt="Mario"
          width={50}
          height={50}
        />
      </div>

      {/* Yellow Boxes */}
      {boxes.map((box, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${box.x}%`,
            bottom: `${box.y}%`,
            width: '50px',
            height: '50px',
          }}
        >
            <div className='flex justify-center text-sm py-2 font-black'>{box.page.toUpperCase()}</div>
          <Image src={BoxImg} alt="Yellow Box" width={50} height={50} />
        </div>
      ))}
    </div>
  );
};

export default MarioGame;
