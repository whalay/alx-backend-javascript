// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Implement the initializeRooms function
export default function initializeRooms() {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  return [room1, room2, room3];
}
