import EventItem from "./EventItem";

const EventList = ({events, getAllEvents}) => {
    return(
        <div>
            {events.map(event => <EventItem key={event._id} {...event} getAllEvents={getAllEvents}/>)}
        </div>
    )
}

export default EventList;