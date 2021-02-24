import styles from '../styles/components/Profile.module.css';

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/djenole.png" alt="Djenole da Silva" />
            <div>
                <strong>Djenole da Silva</strong>
                <p>
                    <img src="icons/level.svg" alt=""></img>    
                    Level 1
                </p>
            </div>
        </div>
    )
}