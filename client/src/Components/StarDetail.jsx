
import style from "./Rating.module.css"

const StarDetail = ({onClick, stars}) => {
    return (
      <div  >
        {[...Array(stars)].map((_, index) => {
          index += 1;
          return(<span key ={index}  className={style.spancolorStar}>&#9733;</span>)
        })}
      </div>
    );
  };

export default StarDetail