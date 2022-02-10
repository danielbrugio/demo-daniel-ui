import React from 'react'
import './styles.css'

export const Table = ({ title, description, data }) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
      <p>{description}</p>
      {data && (
        <div className='table__grid'>
        <table className=''>
        <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default value</th>
          <th>Description</th>
          </tr>
          </thead>
          {data.map((element) => (
            <tbody key={element.name}>
            <tr>
              <td >{element.name}</td>
              <td >{element.type}</td>
              <td >{element.default}</td>
              <td >{element.description}</td>
            </tr>
              </tbody>
          ))}
          </table>
        </div>
      )}
    </div>
  )
}