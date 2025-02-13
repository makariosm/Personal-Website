import React from 'react'
import CardItem from './CardItem'
import './ProjectCards.css'

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem 
                src="images/reversi.png"
                text="A fun, interactive game! The aim of the game is to capture
                more discs than your opponent. There are options for grid types as
                well as single-player and two-player modes. Click for the source code."
                    label="Reversi"
                    path="https://github.com/makariosm/Reversi"
                />
              <CardItem 
                src="images/klondike.png"
                text="A spin-off of the classic Solitaire game! For the default game-mode the
                same rules apply as for normal Solitaire. However, there are other versions of the
                game available with different sets of rules. Click for the source code."
                    label="Klondike"
                    path="https://github.com/makariosm/Klondike"
                />
              <CardItem 
                src="images/logo.png"
                text="Click to find the source code for the website
                you're currently viewing!"
                    label="Personal Website"
                    path="https://github.com/makariosm/Personal-Website"
                />
                <CardItem 
                src="images/password.png"
                text="A side project to help me practice concepts from my operating systems class: A multi-threaded key-value
                store with a simple frontend to display the key value pairs. 
                Future work: adding a database to properly store the pairs. Click for the source code."
                    label="Password Manager"
                    path="https://github.com/makariosm/Password-Manager"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
