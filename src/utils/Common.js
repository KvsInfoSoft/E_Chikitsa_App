import { notification } from 'antd';
// const [api, contextHolder] = notification.useNotification();

// export const openNotification = (tittle, message) => {
//   {
//     contextHolder;
//   }
//   api.open({
//     message: tittle,
//     description: message,
//     duration: 3
//   });
// };
export const showNotification = (type, tittle, message, key, isClosable = true) => {
  if (message !== undefined && message !== null && message !== '') {
    notification[type]({
      key: key ? key : 'message',
      maxCount: 1,
      message: tittle,
      description: message,
      duration: 3,
      closable: isClosable
    });
  }
};

export const ENUM_NOTIFY_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning'
};
