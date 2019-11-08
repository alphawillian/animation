import fetch from 'common/fetch.js'
// import jsonpPro from 'common/jsonp.fetch.js'
import * as api from 'api/index.js'

// 查询券列表状态接口
export const queryCouponProcess = (params) => fetch(api.QUERY_COUPONPROCESS, params, 'post')

