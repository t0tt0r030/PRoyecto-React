import React, { useEffect, useState } from 'react';

function Notificacion({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      // Oculta la notificación después de 3 segundos
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      // Limpia el timer si el componente se desmonta o el mensaje cambia
      return () => clearTimeout(timer);
    }
  }, [message]); // Se activa cada vez que el mensaje cambia

  if (!visible) {
    return null;
  }

  return (
    <div className="toast-notification">
      {message}
    </div>
  );
}

export default Notificacion;