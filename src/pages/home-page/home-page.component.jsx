import React from 'react'
import { Link } from 'react-router-dom'

import './home-page.styles.scss'
import Directory from '../../components/directory/directory.component'

const HomePage = (props) => {
  console.log(`HomePage props: ${JSON.stringify(props)}`)
  return (
    <div className='homepage'>
      <Directory />
    </div>
  )
}
export default HomePage
