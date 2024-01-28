/** 
 * 
 */


// @ts-ignore
import { wrapPromise } from 'react-utils';
// @ts-ignore
import { config } from 'axios-utils';

/** @type {import('axios').AxiosInstance} */
const axios = config({ baseUrl: '/api/' })

export { wrapPromise }
export default axios;
