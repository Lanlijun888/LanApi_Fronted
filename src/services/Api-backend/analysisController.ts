// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listTopInvokeInterfaceInfo GET /api/analysis/top/interface/invoke */
export async function listTopInvokeInterfaceInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfoVO>('/api/analysis/top/interface/invoke', {
    method: 'GET',
    ...(options || {}),
  });
}

/** topHumanInvokeInterfaceInfo GET /api/analysis/topHuman/interface/invoke */
export async function topHumanInvokeInterfaceInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListUserVO>('/api/analysis/topHuman/interface/invoke', {
    method: 'GET',
    ...(options || {}),
  });
}
