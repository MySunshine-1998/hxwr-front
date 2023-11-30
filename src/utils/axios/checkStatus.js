// import { useUserStoreWithOut } from '@/store/modules/user'
import { message } from 'ant-design-vue'
import { errorMessages } from './enum'

export function checkStatus(status, msg) {
  // const userStore = useUserStoreWithOut()
  let errMessage = ''

  switch (status) {
    case 400:
      errMessage = `${msg}`
      break
    // 401: Not logged in
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      // userStore.setToken(undefined)
      errMessage = msg || errorMessages.errMsg401
      // userStore.logout(true)
      break
    case 403:
      errMessage = errorMessages.errMsg403
      break
    // 404请求不存在
    case 404:
      errMessage = errorMessages.errMsg404
      break
    case 405:
      errMessage = errorMessages.errMsg405
      break
    case 408:
      errMessage = errorMessages.errMsg408
      break
    case 500:
      errMessage = errorMessages.errMsg500
      break
    case 501:
      errMessage = errorMessages.errMsg501
      break
    case 502:
      errMessage = errorMessages.errMsg502
      break
    case 503:
      errMessage = errorMessages.errMsg503
      break
    case 504:
      errMessage = errorMessages.errMsg504
      break
    case 505:
      errMessage = errorMessages.errMsg505
      break
    default:
  }

  if (errMessage) {
    message.error(errMessage)
  }
}
