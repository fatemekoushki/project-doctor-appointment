import create from 'zustand';   
const useAppointmentStore = create((set) => ({  

  appointments: [],  
  addAppointment: (appointment) => {  

    set((state) => {  

      const exit = state.appointments.find((element) => element.date == appointment.date);  
      if (exit) {  
        alert("You have already booked this time")
      
      } else {  
       
        return {  
            
          appointments: [...state.appointments, {...appointment}], 
           
        }; 
       
      }  
    });  
  },
  removeAppointment: (appointment) => {  
    set((state) => ({  
        appointments: state.appointments.filter((item) => item.time !== appointment.time),  
    }));  
},    
}));  

export default useAppointmentStore;  