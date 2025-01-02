const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorPreview = document.getElementById('colorPreview');
const hexInput = document.getElementById('hex');
const rgbInput = document.getElementById('rgb');

function updateColor() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  // Create the RGB color string
  const rgb = `rgb(${r}, ${g}, ${b})`;

  // Create the HEX color string
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + +b).toString(16).slice(1)}`;

  // Update the color preview and input fields
  colorPreview.style.backgroundColor = rgb;
  hexInput.value = hex;
  rgbInput.value = `${r}, ${g}, ${b}`;
}

// Add event listeners for input changes
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Initialize color on page load
updateColor();
