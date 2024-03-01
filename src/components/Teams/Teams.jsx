import './Teams.css';
import ContactForm from './contact.jsx';

const TeamPage = () => {
  const coordinators = [
    { type: 'Overall', name: 'Coordinator 1', instagram: 'bg1.jpg' },
    { type: 'Overall', name: 'Coordinator 2', instagram: 'bg1.jpg' },
    { type: 'Head', name: 'Head Coordinator 1', instagram: 'bg1.jpg' },
    { type: 'Head', name: 'Head Coordinator 2', instagram: 'bg1.jpg' },
    { type: 'Head', name: 'Head Coordinator 1', instagram: 'bg1.jpg' },
    { type: 'Head', name: 'Head Coordinator 2', instagram: 'bg1.jpg' },
    { type: 'Head', name: 'Head Coordinator 1', instagram: 'bg1.jpg' },
    { type: 'Head', name: 'Head Coordinator 2', instagram: 'bg1.jpg' },
    { type: 'Head', name: 'Head Coordinator 1', instagram: 'bg1.jpg' },
    { type: 'Head', name: 'Head Coordinator 2', instagram: 'bg1.jpg' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 2', designation: 'Executive' },
    { type: 'Executive', name: 'Executive 1', designation: 'Executive' },
    { type: 'Volunteer', name: 'Volunteer 1' },
    { type: 'Volunteer', name: 'Volunteer 2' },
    { type: 'Volunteer', name: 'Volunteer 2' },
    { type: 'Volunteer', name: 'Volunteer 1' },
    { type: 'Volunteer', name: 'Volunteer 2' },
    { type: 'Volunteer', name: 'Volunteer 2' },
    { type: 'Volunteer', name: 'Volunteer 1' },
    { type: 'Volunteer', name: 'Volunteer 2' },
    { type: 'Volunteer', name: 'Volunteer 2' },
    { type: 'Volunteer', name: 'Volunteer 1' },
    { type: 'Volunteer', name: 'Volunteer 2' },
    { type: 'Volunteer', name: 'Volunteer 2' },
    { type: 'Volunteer', name: 'Volunteer 1' },
    { type: 'Volunteer', name: 'Volunteer 2' },
    { type: 'Volunteer', name: 'Volunteer 2' },
  ];
  const groupCoordinatorsIntoRows = (coordinators, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < coordinators.length; i += itemsPerRow) {
      rows.push(coordinators.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  const itemsPerRow = 3;

  const headCoordinatorRows = groupCoordinatorsIntoRows(
    coordinators.filter((coordinator) => coordinator.type === 'Head'),
    itemsPerRow
  );

  const executiveRows = groupCoordinatorsIntoRows(
    coordinators.filter((coordinator) => coordinator.type === 'Executive'),
    itemsPerRow
  );

  return (
    <div>
        <div className="team-page">
        <h1 className="h1-style">TEAM ROBOTICS</h1>
        {/* Overall Coordinators Section */}
        <div className="section">
            <h2 className="section-heading1"><span>OVERALL</span> COORDINATORS</h2>
            <div className="photos-container">
            {coordinators
                .filter((coordinator) => coordinator.type === 'Overall')
                .map((coordinator) => (
                <div key={coordinator.name} className="photo">
                    <div className="photo-wrapper">
                      <img
                        src={`/bg2.jpg`}
                        alt={coordinator.name}
                        className="photo-img"
                      />
                      <div className="hover-effect">
                        <img
                          src={`/bg2.jpg`}
                          alt="Instagram"
                          className="instagram-icon"
                        />
                      </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

      {/* Head Coordinators Section */}
      <div className="section1">
          <h2 className="section-heading2"><span>HEAD </span> COORDINATORS</h2>
          <div className="photos-container">
            {headCoordinatorRows.map((row, rowIndex) => (
              <div key={rowIndex} className="photo-row">
                {row.map((coordinator) => (
                  <div key={coordinator.name} className="photo1">
                    <div className="photo-wrapper">
                      <img
                        src={`/bg2.jpg`}
                        alt={coordinator.name}
                        className="photo-img"
                      />
                      <div className="hover-effect">
                        <img
                          src={`/bg2.jpg`}
                          alt="Instagram"
                          className="instagram-icon"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>


        <headcoordnator>
          <div>
             <div>
              
             </div>
          </div>
        </headcoordnator>



    
       {/* Executives Section */}
        <div className="section">
          <h2 className="section-heading3"><span>EXECUTIVES</span></h2>
          <div className="names-grid">
            {executiveRows.map((row, rowIndex) => (
              <div key={rowIndex} className="name-row">
                {row.map((coordinator) => (
                  <div key={coordinator.name} className="name-grid-item">
                    <div className="executive-name">{coordinator.name}</div>
                    <div className="executive-designation">{coordinator.designation}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>



        {/* Volunteers Section */}
        <div className="section">
            <h2 className="section-heading4"><span>VOLUNTEERS</span></h2>
            <div className="names-grid">
            {coordinators
                .filter((coordinator) => coordinator.type === 'Volunteer')
                .map((coordinator) => (
                <div key={coordinator.name} className="name-grid-item">
                    {coordinator.name}
                </div>
                ))}
            </div>
        </div>
          <hr className='horizontal'/>
        {/* Contact Form Section */}
        <div className="section">
          <h2 className="section-heading5">
            <span>CONTACT </span>US
          </h2>
          <ContactForm />
        </div>

        </div>
    </div>
  );
};
export default TeamPage;