import { Carousel } from 'react-carousel-minimal';
import img1 from '../images/1.png'
import img2 from '../images/2.jpeg'
import img3 from '../images/3.webp'
import './Carousel.css'

export default function Carousel1(){
    const data = [
        {
          image: img1
        },
        {
          image: img2
        },
        {
          image: img3
        }
    ]
    return (
        <div className='container'>
    <Carousel
            data={data}
            time={4000}
            width="100%"
            height="450px"
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "450px",
              margin: "40px auto",
            }}
          />
          </div>
    )
}