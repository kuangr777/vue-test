import fetch from '@/utils/fetch'

//app管理
//业务管理-新车方案获取
export function getFinanceWay(parmas) {
    return fetch({
        url: 'api/web/meeting/info',
        method: 'get',
        params: parmas
    })
}