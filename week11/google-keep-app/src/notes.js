// notes.js
import meetingImage from './images/meeting.webp';
import lasagnaImage from './images/lasagna.webp';
import bookImage from './images/book.jpg';

const notes = [
    {
      title: 'Meeting Notes',
      content: 'Discuss project timeline and milestones.',
      createdDate: new Date('2023-01-15'),
      image: meetingImage, // Optional image
    },
    {
      title: 'Grocery List',
      content: 'Milk, eggs, bread, vegetables.',
      createdDate: new Date('2023-02-01'),
    },
    {
      title: 'Recipe',
      content: 'Ingredients and steps to make lasagna.',
      createdDate: new Date('2023-03-10'),
      image: lasagnaImage, // Optional image
    },
    {
      title: 'Workout Plan',
      content: '30 minutes of cardio, 20 minutes of strength training.',
      createdDate: new Date('2023-04-05'),
    },
    {
      title: 'Book Recommendations',
      content: 'Check out "The Alchemist" and "Sapiens".',
      createdDate: new Date('2023-05-20'),
      image: bookImage, // Optional image
    },
  ];
  
  export default notes;  