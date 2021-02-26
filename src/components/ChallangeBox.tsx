import styles from '../styles/components/ChallengeBox.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        
        <div className={styles.challengeBoxContainer}>
          { activeChallenge ? (
              <div className={styles.challengeActive} >
                <header>Ganhe {activeChallenge.amount}</header>

                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}/>
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>

                <footer>
                    <button
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={resetChallenge}
                    >
                            Falhei
                    </button>
                    
                    <button
                        type="button"
                        className={styles.challengeSucessedButton}>Completei</button>
                </footer>
              </div>
          ) : (
            <div className={styles.challengeNotActive}>
            <strong>Finalize o ciclo para receber um desafio</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level up" />
                Avance de level completando os desafios.
            </p>
        </div>
          )}
        </div>

    )
}