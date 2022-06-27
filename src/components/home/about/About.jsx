import React from "react"

const About = () => {
  const data = [
    {
      title: "Who I Am And What I Do",
      desc1: "I'm a Developer Advocate with an experience in managing and growing developer communities around the world by organizing community focused events, creating value-based content around a product in form of technical articles, tidbits and YouTube videos.",
      desc2: "I'm a Developer Advocate with an experience in managing and growing developer communities around the world by organizing community focused events, creating value-based content around a product in form of technical articles, tidbits and YouTube videos.",
      desc3: "I'm a Developer Advocate with an experience in managing and growing developer communities around the world by organizing community focused events, creating value-based content around a product in form of technical articles, tidbits and YouTube videos.",
      cover: "./assets/about.jpg",
    },
  ]
  return (
    <>
      <section className='about topMarign'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>About Me</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  <button className='primary-btn'>Download CV</button>
                </div>
                <div className='right'>
                  <div className='img'>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About
