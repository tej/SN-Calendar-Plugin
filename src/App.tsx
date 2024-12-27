import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
}

const App = () => {
  const [events, setEvents] = useState([
    { id: '1', title: 'Sample Event', start: new Date().toISOString() },
  ]);

  const handleDateClick = (info: DateClickArg) => {
    const newEvent = {
      id: String(Date.now()),
      title: 'New Event',
      start: info.dateStr, // Date clicked
    };
    setEvents([...events, newEvent]); // Add event to state
  };
  
  const handleEventDrop = (info: EventDragStopArg) => {
    const updatedEvents = events.map((event) =>
      event.id === info.event.id
        ? { ...event, start: info.event.startStr, end: info.event.endStr }
        : event
    );
    setEvents(updatedEvents);
  };

  const handleEventClick = (info: any) => {
    const eventTitle = prompt('Edit event title:', info.event.title);
    if (eventTitle) {
      const updatedEvents = events.map((event) =>
        event.id === info.event.id ? { ...event, title: eventTitle } : event
      );
      setEvents(updatedEvents);
    }
  };

  return (
<div className="calendar-container" style={{ padding: '20px', background: '#f9f9f9' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Calendar</h2>
  <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    editable={true}
    selectable={true}
    events={events}
    height="auto"
    dateClick={handleDateClick}
    eventDrop={handleEventDrop}
    eventClick={handleEventClick}
  />
</div>
  );
}

export default App;