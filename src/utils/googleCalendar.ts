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
  // Open the Google Calendar booking link directly
  window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ON0b0wp22VAnjVKt0nt0CGPg4u3ykRO5_Mkepv7sphtHjHBDe21vm8FJtxj66iLpm1aUU7XJZ', '_blank');
};