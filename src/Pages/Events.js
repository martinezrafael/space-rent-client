import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventList from "../components/EventList";
import apiUtils from "../utils/api.utils";

const Events = () => {
    const [ events, setEvents ] = useState([]);

    const navigate = useNavigate();

    const getAllEvents = async () => {
        try {
            const events = await apiUtils.getEvents();
            setEvents(events);
        } catch (error) {
            console.error(error);
            navigate('/login')
        }
    }

    useEffect(() => {
        getAllEvents();
    }, []);

    return (
        <div>
           <EventList events={events} getAllEvents={getAllEvents}/>
        </div>
    )
}

export default Events;