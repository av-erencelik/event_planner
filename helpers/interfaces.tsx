export interface Event {
  id: string;
  date: string;
  title: string;
  location: string;
  image: string;
  description: string;
}

export interface Events extends Array<Event> {}
