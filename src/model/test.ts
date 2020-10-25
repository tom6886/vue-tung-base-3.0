/*
 * @Author: 汤波
 * @Date: 2020-10-25 19:19:38
 * @Description: 
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-25 19:24:52
 * @FilePath: \vue3.0-tung-base\src\model\test.ts
 */
import { IPagination } from './common';

export default interface Test {
  id: string;
  code: string;
  creator: string;
  gmtCreate: string;
  gmtModified: string;
  modifier: string;
  name: string;
}

export interface TestRefs {
    name: string;
    code: string;
    data: Test[];
    pagination: IPagination;
    loading: boolean;
}