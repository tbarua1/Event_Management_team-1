import React, { useState, useEffect } from 'react';
import axios from 'axios';
import base_url from '../services/EventService';
import EventData from './EventData';
 
const ListOfEvents = () =>{
    
    const [events, setEvents] = useState([]);

    const getAllEventsFromServer=() =>{
        axios.get(`${base_url}/get_event`).then(
            (response)=>{
                console.log(response.data);
                setEvents(response.data);
            },
            (error)=>{
                console.log(error);
            }
        )
    };

    useEffect(()=>{
        getAllEventsFromServer();
    }, []);


    return(
        <div>
            <h1>All Events</h1>   
            {events.length > 0 ?
                events.map((event) =>
                    <EventData key={event.eid} event={event} />
                ) : "No Events"}
        </div>
    );
};

export default ListOfEvents














// export default class EventDetail extends Component {
//     componentDidMount() {
//         EventService.getEvents().then((res) => {
//             console.log(res.data);
//         });
//     }
//     render() {
//         return (
//             <>
            
//             </>
//         )
//     }
// }


