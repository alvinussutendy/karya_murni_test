import React from 'react';
import Color from '../src/components/Color';
import './App.css';

/**
 * data color
 */
const data=[
  { id: 1, name: 'Beige', hex: '#F5F5DC', saturation: 'lighter' },
  { id: 2, name: 'Black', hex: '#000000', saturation: 'darker' },
  { id: 3, name: 'Blue', hex: '#0000FF', saturation: 'light' },
  { id: 4, name: 'Bronze', hex: '#CD7F32', saturation: 'light' },
  { id: 5, name: 'Brown', hex: '#964B00', saturation: 'dark' },
  { id: 6, name: 'Burgundy', hex: '#800020', saturation: 'darker' },
  { id: 7, name: 'Champagne', hex: '#F7E7CE', saturation: 'lighter' },
  { id: 8, name: 'Chocolate', hex: '#7B3F00', saturation: 'darker' },
  { id: 9, name: 'Coffee', hex: '#6F4E37', saturation: 'darker' },
  { id: 10, name: 'Copper', hex: '#B87333', saturation: 'light' },
  { id: 11, name: 'Coral', hex: '#FF7F50', saturation: 'light' },
  { id: 12, name: 'Cyan', hex: '#00FFFF', saturation: 'lighter' },
  { id: 13, name: 'Emerald', hex: '#50C878', saturation: 'lighter' },
  { id: 14, name: 'Erin', hex: '#00FF3F', saturation: 'lighter' },
  { id: 15, name: 'Gold', hex: '#FFD700', saturation: 'light' },
  { id: 16, name: 'Gray', hex: '#808080', saturation: 'dark' },
  { id: 17, name: 'Green', hex: '#00FF00', saturation: 'light' },
  { id: 18, name: 'Harlequin', hex: '#3FFF00', saturation: 'light' },
  { id: 19, name: 'Indigo', hex: '#4B0082', saturation: 'dark' },
  { id: 20, name: 'Rose', hex: '#FF007F', saturation: 'dark' },
  { id: 21, name: 'Jade', hex: '#00A86B', saturation: 'light' },
  { id: 22, name: 'Violet', hex: '#7F00FF', saturation: '' },
  { id: 23, name: 'Lavender', hex: '#B57EDC', saturation: '' },
  { id: 24, name: 'Lemon', hex: '#FFF700', saturation: '' },
  { id: 25, name: 'Sangria', hex: '#92000A', saturation: '' },
  { id: 26, name: 'Lime', hex: '#BFFF00', saturation: '' },
  { id: 27, name: 'Magenta', hex: '#FF00FF', saturation: '' },
  { id: 28, name: 'Maroon', hex: '#800000', saturation: '' },
  { id: 29, name: 'Navy', hex: '#000080', saturation: '' },
  { id: 30, name: 'Olive', hex: '#808000', saturation: '' },
  { id: 31, name: 'Orange', hex: '#FF6600', saturation: '' },
  { id: 32, name: 'Orchid', hex: '#DA70D6', saturation: '' },
  { id: 33, name: 'Peach', hex: '#FFE5B4', saturation: '' },
  { id: 34, name: 'Pear', hex: '#D1E231', saturation: '' },
  { id: 35, name: 'Pink', hex: '#FD6C9E', saturation: '' },
  { id: 36, name: 'Yellow', hex: '#FFFF00', saturation: '' },
  { id: 37, name: 'Silver', hex: '#C0C0C0', saturation: '' },
  { id: 38, name: 'Purple', hex: '#800080', saturation: '' },
  { id: 39, name: 'Raspberry', hex: '#E30B5C', saturation: '' },
  { id: 40, name: 'Red', hex: '#FF0000', saturation: '' }
];

function App() {
  return (
    <div className="App">
        {/* Pass the data into child component */}
        <Color data={data}/>
    </div>
  );
}

export default App;
