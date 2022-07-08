import { Carousel } from 'react-carousel-minimal';
import img1 from '../images/4.png'
import img2 from '../images/3.png'
import img3 from '../images/2.png'
import style from './Carousel.module.css'

export default function Carousel1(){

  const data = [{
    image: img1
  },
  {
    image: img2,
  },
  {
    image: img3
  }]
    return (
        <div className={style.containerCarousel}>
    <Carousel
            data={data}
            time={1200}
            width="100%"
            height="450px"
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="lightsalmon"
            slideImageFit="cover"
            thumbnailWidth="100px"
            style={{
              maxWidth: "100%",
              maxHeight: "450px",
              margin: "40px auto",
            }}
          />
          </div>
    )
}