import React from 'react'
import Directory from '../../components/directory/directory.component'
import './home-page.styles.scss'

const HomePage = (props) => {
  // console.log(`HomePage props: ${JSON.stringify(props)}`)
  return (
    <div className='homepage'>
      <Directory />
    </div>
  )
}
export default HomePage
