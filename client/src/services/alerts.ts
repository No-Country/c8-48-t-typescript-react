import Swal from 'sweetalert2';

export const successAlert = (text = '') => {
  Swal.fire('Exito', text, 'success');
};

export const errorAlert = (text = '') => {
  Swal.fire('Error', text, 'error');
};

export const errorServerAlert = () => {
  Swal.fire('Error', 'Algo sucedio con el servidor 😅', 'error');
};
