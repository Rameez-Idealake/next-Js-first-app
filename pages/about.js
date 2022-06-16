import React, { useState } from 'react';
export const getStaticProps = async (ctx) => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { abouts: data }
  }

}

const About = ({ abouts }) => {
  const [filter, setFilter] = useState('');
  return (
    <>
      <div>
        <h1>test</h1>
        <input id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)} />
        {abouts.map(about => (
          <div className="test" key={about.id}>
            <a>
              <h3>{about.address.city}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default About
