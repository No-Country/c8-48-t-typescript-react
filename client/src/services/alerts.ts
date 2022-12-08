import Swal from 'sweetalert2';

export const successAlert = (text = '') => {
  Swal.fire('Éxito', text, 'success');
};

export const errorAlert = (text = '') => {
  Swal.fire('Error', text, 'error');
};

export const errorServerAlert = () => {
  Swal.fire('Error', 'Algo sucedió con el servidor 😅', 'error');
};

export const errorLogin = () => {
  Swal.fire('Error', 'Necesita ingresar como usuario', 'error');
};
