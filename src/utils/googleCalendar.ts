// Google Calendar booking utility
declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (options: {
          url: string;
          color: string;
          label: string;
          target?: HTMLElement;
        }) => void;
      };
    };
  }
}

export const openGoogleCalendarBooking = () => {
  if (window.calendar?.schedulingButton) {
    // Create a temporary target element
    const target = document.createElement('div');
    document.body.appendChild(target);
    
    window.calendar.schedulingButton.load({
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2WJPu3t4s0SdzADbRyuk8hEjCqBUct-YT4qQm_Vz13foZouu4KCXZ3M5HFy0XvDe4Yx18vSAq_?gv=true',
      color: '#795548',
      label: 'Reservar una cita',
      target,
    });
    
    // Clean up the target element after a short delay
    setTimeout(() => {
      if (document.body.contains(target)) {
        document.body.removeChild(target);
      }
    }, 100);
  } else {
    // Fallback to opening the URL directly
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ2WJPu3t4s0SdzADbRyuk8hEjCqBUct-YT4qQm_Vz13foZouu4KCXZ3M5HFy0XvDe4Yx18vSAq_?gv=true', '_blank');
  }
};