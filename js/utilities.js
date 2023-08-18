function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const getInputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(getInputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}
function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
