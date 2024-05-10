
import Swal from "sweetalert2";

export const validateRequiredFields = (fields) => {
  for (let field of fields) {
    if (!field.value) {
      Swal.fire({
        text: 'Por favor completa todos los campos.',
        icon: 'question'
      });
      return false;
    }
  }
  return true;
};

export const validateDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (start >= end) {
    Swal.fire({
      text: 'La fecha de inicio debe ser anterior a la fecha de finalización.',
      icon: 'error'
    });
    return false;
  }
  return true;
};

