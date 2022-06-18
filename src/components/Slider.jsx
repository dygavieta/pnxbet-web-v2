import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline'

const Slider = (props) => {
  const [current, setCurrent] = useState(0)

  const [open, setOpen] = useState(false)
  const length = props.theme.length

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (current < length - 1) {
        setCurrent(current + 1)
      } else if (current === length - 1) {
        setCurrent(0)
      }
    }, 7000)
    return () => clearInterval(interval)
  })

  const RedirectPage = () => {
    window.open('https://pnxbet.com/affiliates/?btag=209088')
  }

  useEffect(() => {
    const test = getComputedStyle(document.documentElement)
    console.log(test)
  })
  const openModal = () => {
    setOpen(!open)
    document.documentElement.style.setProperty('overflow', 'hidden')
  }

  return (
    <div className=" flex relative justify-center select-none">
      <div className="md:grid grid-cols-2 py-4 cursor-pointer  ">
        <div className=" px-8 md:px-14 text-white opacity-100">
          {props.theme.map((slide, index) => {
            return (
              <div
                className={
                  index === current ? 'ease-in duration-1000' : 'opacity-0'
                }
              >
                {index === current && (
                  <div>
                    <h1 className="text-4xl md:text-6xl"> {slide.head} </h1>
                    <a
                      className="text-1xl md:text-3xl hover:cursor-pointer hover:text-orange-600"
                      onClick={RedirectPage}
                    >
                      {slide.link}
                    </a>
                    {slide.sub.map((line) => {
                      return <p className="text-sm md:text-xl">{line}</p>
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center">
          <ArrowCircleLeftIcon
            className=" slideArrow left-0"
            onClick={prevSlide}
          />
          <ArrowCircleRightIcon
            className=" slideArrow right-0 "
            onClick={nextSlide}
          />
          {props.theme.map((slide, index) => {
            return (
              <div
                className={
                  index === current ? 'ease-in duration-1000' : 'opacity-0'
                }
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    className="w-full md:w-[70%] "
                    onClick={openModal}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
      {<Modal open={open} setOpen={setOpen} />}
    </div>
  )
}

export default Slider
