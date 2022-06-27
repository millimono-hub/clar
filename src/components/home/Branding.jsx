import React from "react"

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Digital Branding",
      desc: "How to use React Hooks to create a Counter Component.",
    },
    {
      id: "02",
      heading: "Team Management",
      desc: "How to use React Hooks to create a Counter Component",
    },
    {
      id: "03",
      heading: "Creative Mind",
      desc: "How to use React Hooks to create a Counter Component",
    },
  ]
  return (
    <>
      <section className='Branding'>
        <div className='container grid'>
          {data.map((value) => {
            return (
              <div className='box flex'>
                <div className='text'>
                  <h1>{value.id}</h1>
                </div>
                <div className='para'>
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding
