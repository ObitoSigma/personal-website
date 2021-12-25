import React from 'react'

import '../utilities.css'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='u-flex u-flex-alignStretch'>
        <div className='Home-sidebar u-textCenter u-flexColumn'>
          <h4 className='Home-subTitle'>
            Resources
          </h4>
          <div className='Home-sidebar-text'>
            Schedule
          </div>
          <div className='Home-sidebar-text'>
            Residents
          </div>
          <div className='Home-sidebar-text'>
            Guest List
          </div>
          <div className='Home-sidebar-text'>
            Forwarding Addresses
          </div>
          <div className='Home-sidebar-text'>
            Sodafridge
          </div>
          <div className='Home-sidebar-text'>
            Manual
          </div>
        </div>
        <div className='Home-subContainer u-textCenter'>
          <table id='table'>
            <tr>
              <th>Parcels</th>
            </tr>
            <tr>
              <td>Jane Doe (2)</td>
            </tr>
            <tr>
              <td>Hantoa Tenwhij (1)</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
            </tr>
            <tr>
              <td>Island Trading</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
            </tr>
          </table>
        </div>
        <div className='Home-subContainer u-textCenter'>
          <table id='table'>
            <tr>
              <th>Desk Items</th>
            </tr>
            <tr>
              <td>Jane Doe (2)</td>
            </tr>
            <tr>
              <td>Hantoa Tenwhij (1)</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
            </tr>
            <tr>
              <td>Island Trading</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home
