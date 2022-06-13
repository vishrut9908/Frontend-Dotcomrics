import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../../../styles/home/Brand.module.css'

function Brands() {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 4000,
      cssEase: "linear",
      easing:'linear',
    //   adaptiveHeight: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
    return (
        <div className={styles['brands']}>
            <Slider {...settings}>
                <div className={styles.slide}>
                <img className={styles.img_slider} src="/home/slide-01.png"></img>
                </div>
                <div className={styles.slide}>
                <img src="/home/slide-02.png" className={styles.img_slider}></img>
                </div>
                <div className={styles.slide}>
                <img src="/home/slide-03.png" className={styles.img_slider}></img>
                </div>
                <div className={styles.slide}>
                <img src="/home/slide-04.png" className={styles.img_slider}></img>
                </div>
                </Slider>
        </div>
    )
}

export default Brands
