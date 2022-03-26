import toast from 'react-hot-toast';

export const createNotification = (info, message) => {
  if (info === 'success' || info === 'copying') {
    return toast.success(message);
  }
  if (info === 'error') {
    return toast.error(message);
  }
  if (info === 'info') {
    return toast(message, {
      icon: 'ℹ️'
    });
  }
  if (info === 'warning') {
    return toast(message, {
      icon: '⚠️'
    });
  }
  if (info === 'working') {
    return toast(message, {
      icon: '🚧'
    });
  }
};
