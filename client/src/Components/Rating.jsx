
import style from "./Rating.module.css"

const StarRating = ({onClick, stars}) => {
    return (
      <div >
        {[...Array(stars)].map((_, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={style.buttonRating}
              onClick={() => {
                  onClick(index)
              }}
            >
              <span className={style.spancolorStar}>&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

  export default StarRating

