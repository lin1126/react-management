import request from '@/request/index.ts'
import { ApiResponse } from "@/types/request";


export const getCaptcha = (): Promise<ApiResponse<any>> => {
  return request.get('/prod-api/captchaImage')
}