import request from '@/request/index.ts'

export const getCaptcha = () => {
  return request.get('/prod-api/captchaImage')
}