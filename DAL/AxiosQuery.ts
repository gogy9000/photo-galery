import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {BaseQueryFn} from "@reduxjs/toolkit/dist/query/react";

type AxiosQueryParamsType = {
    baseUrl: string,
    withCredentials?: boolean,
    headers?: AxiosRequestConfig["headers"]
    baseParams?: AxiosRequestConfig["params"]
}

type AxiosQueryReturnType = BaseQueryFn<{
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
}>

export const axiosQuery = (args: AxiosQueryParamsType = {baseUrl: ''}): AxiosQueryReturnType => {
    const {baseUrl, withCredentials, baseParams, headers}=args
    const instance = axios.create({url: baseUrl, params: baseParams})

    return async ({url, method, data, params}) => {
        try {
            const result = await instance({url, method, data, params, headers, withCredentials})
            console.log(result.data)
            return {data: result.data}
        } catch (axiosError) {
            if (axiosError instanceof AxiosError) {
                let err = axiosError as AxiosError
                console.log(err)
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            } else {
                throw axiosError
            }
        }
    }
}