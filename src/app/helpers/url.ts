/**
 * Object to Query Stirng
 * @export
 * @param params 
 * @returns
 */
export function query(params: any = {}) {
    if (params && Object.keys(params).length > 0) {
        return `${Object.keys(params).filter(key => {
            return (key && params[key] != 'null')
        })
            .map(key => {
                return [key, encodeURIComponent(params[key])].join('=');
            }).join('&')}`
    } else {
        return ''
    }
}
/**
 * return url: domain/path/endpoint/params
 * @export
 * @param domain 
 * @param path 
 * @param endpoint 
 * @param params 
 * @returns
 */
export function merge(domain:any, path:any, endpoint:any, params:any = null) {
    if ( params && Object.keys(params).length > 0) {
        return `${domain}/${path}/${endpoint}?${query(params)}`;
    } else {
        return `${domain}/${path}/${endpoint}`;
    }
}