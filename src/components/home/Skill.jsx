import React from "react"

const Skill = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    )
  }

  const data = [
    {
      title: "Every Day is a New Challenge",
      para: "How to use React Hooks to create a Counter Component",
      para1: "How to use React Hooks to create a Counter Component",
    },
  ]
  return (
    <>
      <section className='skill'>
        <div className='container'>
          <div className='heading'>
            <h3> WHY CHOOSE US</h3>
            <h1>Some Of My Skills</h1>
          </div>

          <div className='content flex'>
            <div className='left topMarign'>
              <Progress done='70' title='HTML' />
              <Progress done='80' title='CSS' />
              <Progress done='90' title='JAVASCRIPT' />
              <Progress done='70' title='REACT JS' />
            </div>
            <div className='right mtop'>
              {data.map((val) => {
                return (
                  <>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                    <button className='primary-btn'>Hire Me</button>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
