import EventList from './components/EventList/EventList.jsx';

import './Events.css'

import eventsData from './eventsData.json';

const Events = () => (
  <div className="Event">
    <header>
      <h1>Upcoming Robotics Events</h1>
    </header>
    <main>
      <div className="event-list">
        {eventsData.map((event, index) => (
          // <div>event </div>
          <EventList {...event} />
        ))}
      </div>
    </main>
  </div>
);

export default Events;
