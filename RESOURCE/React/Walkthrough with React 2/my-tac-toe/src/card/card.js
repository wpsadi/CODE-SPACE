import Icon from "../icon/icon.js";
import "./card.css"



function Card({gameEnd, player, onPlay,index}){
    let icon  =<Icon/>;
    if (player == "o"){
        icon = <Icon name="circle"/>
    }
    else if (player == "x"){
        icon = <Icon name="cross"/>
    }

    return(
    <div className="card" onClick={()=> player=="" && !gameEnd && onPlay(index)}>
        {icon}
    </div>
    )
}


export default Card;