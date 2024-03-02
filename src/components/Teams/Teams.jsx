import React from 'react';
import './Teams.css';
// import ContactForm from './contact';
const TeamPage= () =>{
  return(
    <team>
    <div>
        <h1 className='h1'>Team Robotics</h1>
    </div>

      <div className='conatiner'>
        <div>

            {/* Overall Coordinators */}
            <div className='Oc'>
                <p className='para-oc'>Overall Coordinators</p>
                <div className='over'>
                  <div>
                    <div className='Overall'>
                      <div className='oc-box'>
                        <img src='/Chandrika Geddada.jpeg' className='oc'/>
                        <p className='name-ocs'>Chandrika Geddada</p>
                        <p className='dom-ocs'>Technical</p>
                      </div>
                      <div className='oc-box'>
                        <img src='/Pramil Kesarwani.jpg' className='oc'/>
                        <p className='name-ocs'>Pramil Kesarwani</p>
                        <p className='dom-ocs'>Public Relation</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>


            {/* Head Coordinators */}
            <div className='Hc'>
                <p className='para-oc'>Head Coordinators</p>
                <div className='head'>
                  <div>
                    <div className='Head'>
                    <div className='oc-box'><img src='/Chanchal Thakur.jpg' className='hc'/><p className='name-ocs'>Chanchal Thakur</p><p className='dom-ocs'>Design</p></div>
                    <div className='oc-box'><img src='/Deepshikha Sharma.jpg' className='oc'/><p className='name-ocs'>Deepshikha Sharma</p><p className='dom-ocs'>Documentation</p></div>
                    <div className='oc-box'><img src='/Ayush Hardaha.jpg' className='oc'/><p className='name-ocs'>Ayush Hardaha</p><p className='dom-ocs'>Public Relation</p></div>
                    <div className='oc-box'><img src='/Avi yadav.jpg' className='oc'/><p className='name-ocs'>Avi Yadav</p><p className='dom-ocs'>Public Relation</p></div>
                    <div className='oc-box'><img src='/Vineeth.jpeg' className='oc'/><p className='name-ocs'>Vineeth Kumar Engili</p><p className='dom-ocs'>Public Relation</p></div>
                    <div className='oc-box'><img src='/Aditya ray.jpg' className='oc'/><p className='name-ocs'>Aditya Ray</p><p className='dom-ocs'>Technical</p></div>
                    <div className='oc-box'><img src='/Pratham Gandhi.jpeg' className='hc'/><p className='name-ocs'>Pratham Gandhi</p><p className='dom-ocs'>Web Development</p></div>
                    <div className='oc-box'><img src='/Gautam Raghwani.jpg' className='hc'/><p className='name-ocs'>Gautam Raghwani</p><p className='dom-ocs'>Design</p></div>
                    <div className='oc-box'><img src='/Prakriti Khilnani.png' className='hc'/><p className='name-ocs'>Prakriti Khilnani</p><p className='dom-ocs'>Event Management</p></div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Core Coordinators */}
            <div className='Cc'>
                <p className='para-oc'>Core Coordinators</p>
                <div className='core'>
                  <div>
                    <div className='Core'>
                    <div className='oc-box'><img src='/Archisha De.jpg' className='oc'/><p className='name-ocs'>Archisha De</p><p className='dom-ocs'>Documentation</p></div>
                    <div className='oc-box'><img src='/Sathvik S..jpg' className='hc'/><p className='name-ocs'>S. Sathvik</p><p className='dom-ocs'>Documentation</p></div>
                    <div className='oc-box'><img src='/SAHIL KHOBRAGADE.jpg' className='oc'/><p className='name-ocs'>Sahil Khobragade</p><p className='dom-ocs'>Event Management</p></div>
                    <div className='oc-box'><img src='/Anjali Ramchandra Rege.jpg' className='oc'/><p className='name-ocs'>Anjali Rege</p><p className='dom-ocs'>Public Relation</p></div>
                    <div className='oc-box'><img src='/Rashmiprakash Satapathy.jpg' className='oc'/><p className='name-ocs'>Rashmiprakash Satapathy</p><p className='dom-ocs'>Technical</p></div>
                    <div className='oc-box'><img src='/Ayush Damor.jpeg' className='oc'/><p className='name-ocs'>Ayush Damor</p><p className='dom-ocs'>Technical</p></div>
                    <div className='oc-box'><img src='/Ashish Anand.jpg' className='oc'/><p className='name-ocs'>Ashish Anand</p><p className='dom-ocs'>Technical</p></div>
                    <div className='oc-box'><img src='/Harsh Jangir.jpg' className='oc'/><p className='name-ocs'>Harsh</p><p className='dom-ocs'>Technical</p></div>
                    <div className='oc-box'><img src='/Rohit Kumar.png' className='oc'/><p className='name-ocs'>Rohit Kumar</p><p className='dom-ocs'>Web Development</p></div>
                    <div className='oc-box'><img src='/Aman Dhananjay.jpg' className='oc'/><p className='name-ocs'>Aman Dhananjay</p><p className='dom-ocs'>Web Development</p></div>
                    <div className='oc-box'><img src='/Ekant Sahu.JPG' className='oc'/><p className='name-ocs'>Ekant Sahu</p><p className='dom-ocs'>Web Development</p></div>
                    <div className='oc-box'><img src='/Azhar.jpg' className='hc'/><p className='name-ocs'>Azhar Ansari</p><p className='dom-ocs'>Web Development</p></div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Executives */}
            <div className='Ex'>
                <p className='para-oc'>Executives</p>
                <div className='executives'>
                  <div>
                    <div className='Executives'>
                      <div className='ex-box'><p className='name-exs'>Diptesh Raj</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>Md Wasim</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>Leevant Rathor</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>Umed Kumar</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>Murtaza Narwarwala</p><p className='dom-exs'>Web Development</p></div>
                      <div className='ex-box'><p className='name-exs'>Tanishq Jalandra</p><p className='dom-exs'>Web Development</p></div>
                      <div className='ex-box'><p className='name-exs'>Chitransh Agarwal</p><p className='dom-exs'>Web Development</p></div>
                      <div className='ex-box'><p className='name-exs'>Gaurav Kumar</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>Ram Narayan</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>Prakhar Gurudwan</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>Ayush Mishra</p><p className='dom-exs'>Web Development</p></div>
                      <div className='ex-box'><p className='name-exs'>Chirag Garg</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>Rohit Seth</p><p className='dom-exs'> Event Management</p></div>
                      <div className='ex-box'><p className='name-exs'>Ashutosh Singh</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>lorem ipsum</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>lorem ipsum</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>lorem ipsum</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>lorem ipsum</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>lorem ipsum</p><p className='dom-exs'>Technical</p></div>
                      <div className='ex-box'><p className='name-exs'>lorem ipsum</p><p className='dom-exs'>Technical</p></div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Volunteers */}
            <div className='Ex'>
                <p className='para-oc'>Volunteers</p>
                <div className='executives'>
                  <div>
                    <div className='Executives'>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    <div className='ex-box'><p className='name-exs'>lorem ipsum</p></div>
                    </div>
                  </div>
                </div>
            </div>

          </div>
      </div>

    </team>
  )
}
export default TeamPage;