"use client"
import 'swiper/css'
import BackgroundRadialRight from '../BackgroundRadialRight/BackgroundRadialRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataPaymentMethods } from './PaymentsMethods.data'
import Image from 'next/image'
import CtaDark from '../CtaDark/CtaDark'


const PaymentsMethods = () => {
  return (
    <div className='relative py-20 md:py-64' id='servicios'>
      <BackgroundRadialRight></BackgroundRadialRight>
      <div className='relative w-full overflow-hidden'>
        <Swiper
            breakpoints={{
                320:{
                    slidesPerView: 8,
                    spaceBetween: 15
                }
            }}
            autoplay={{
                delay:1,
                disableOnInteraction:false
            }}
            grabCursor={true}
            loop={true}
            speed={2000}
        >
            <div className='absolute flex'>
                {dataPaymentMethods.map(({id, image})=>(
                    <SwiperSlide key={id} className='flex items-center slider-horizontal'>
                        <Image src={`/assets/${image}`} alt='Payment' width={70} height={70} className='h-[60px] w-[1200px] object-contain'></Image>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
      </div>
      <CtaDark></CtaDark>
    </div>
  )
}

export default PaymentsMethods
