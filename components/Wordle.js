import { useEffect, useState } from "react"
import useWordle from "../hooks/useWordle"

// components
// import Grid from "./Grid"
// import Keypad from "./Keypad"
// import Modal from "./Modal"

export default function Wordle({ solution }) {
  const {
    currentGuess,
    guesses,
    turn,
    isCorrect,
    usedKeys,
    handleKeyup,
    handleClick,
  } = useWordle(solution)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener("keyup", handleKeyup)
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener("keyup", handleKeyup)
    }

    return () => window.removeEventListener("keyup", handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  return (
    <div className="flex-1 flex flex-col w-full justify-between">
      <div className="border-y py-4">grid</div>

      <div className="py-2">keypad</div>

      {/* <div className="py-4 border-y">
        <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      </div>

      <div className="py-4">
        <Keypad usedKeys={usedKeys} handleClick={handleClick} />
      </div> */}

      {/* {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )} */}
    </div>
  )
}
