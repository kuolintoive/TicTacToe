import React from "react";
import { Container } from "react-bootstrap";
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from "../redux/store";
import { BoardItemOwner, GamePlayer } from "../types/Game";

const mapState = (state: RootState) => ({
    nextPlayer: state.gameBoardSlice.player.next,
    winner: state.gameBoardSlice.game.winner
})

const connector = connect(mapState);
type ReduxProps = ConnectedProps<typeof connector>
interface Props extends ReduxProps {
    nextPlayer: GamePlayer,
    winner: BoardItemOwner
}


const GameTurn = (props: Props) => {
    // If the winner is X, display X.
    if(props.winner === 'x') {
        return <Container id='game-turn'>
            <p id='game-turn-title' style={{ color: '#90EE90' }}>Winner!</p>
            <p>X</p>
        </Container>
    }

    // If the winner is O, display O.
    if(props.winner === 'o') {
        return <Container id='game-turn'>
            <p id='game-turn-title' style={{ color: '#90EE90' }}>Winner!</p>
            <p>O</p>
        </Container>
    }

    // If the is no winner, display the next player. 
    return <Container id='game-turn'>
    <p id='game-turn-title'>Your Turn!</p>
        <p>{props.nextPlayer}</p>
    </Container>
}

export default connector(GameTurn);