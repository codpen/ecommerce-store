import styles from './GamePage.module.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import AnimatedGamePage from '../AnimatedPage/AnimatedGamePage';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as Arrow } from "../../Resources/image/arrow.svg";

const GamePage = props => {
  const {
    handleHover,
    hoverState,
    handleHome,
    landingPage,
    cartAmount,
    cart,
    search,
    searching,
    handleSearch,
    handleSearchSubmit,
    browsing,
    handleBrowse,
    selectedGame,
    setHoverState
  } = props;

  let { gameId } = useParams();

  return (
    <>
        <div className={styles.gamepage}>
            <NavBar
              handleHover={handleHover}
              hoverState={hoverState}
              handleHome={handleHome}
              browsing={browsing}
              landingPage={landingPage}
              cartAmount={cartAmount}
              search={search}
              searching={searching}
              handleSearch={handleSearch}
              handleSearchSubmit={handleSearchSubmit}
            />

            <AnimatedGamePage>
              <div className={styles.gamepageContent}>
                <header>
                    <button 
                      style={{ color: hoverState[19].hovered ? "#92f" : "#cccccc" }} 
                      className={styles.goBack}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                      onClick={handleBrowse}
                      id="19"
                    >
                        <Arrow style={{ fill: hoverState[19].hovered ? "#92f" : "#cccccc" }} className={styles.arrow} />
                        Store
                    </button>

                    <h1>{selectedGame.name}</h1>
                </header>

                <section>
                  <div className={styles.images}>

                  </div>
                  <div className={styles.gameInfo}>

                  </div>
                </section>
              </div>
            </AnimatedGamePage>
        </div>
    </>
  );
}

export default GamePage;