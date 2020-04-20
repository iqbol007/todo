import * as qs from "querystring";
import * as _ from "lodash";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

/**
 *  
 *
 * @param query  
 * @param state  
 * @param method  
 *               
 */
export const updateQueryString = (query: any, state = {}, method: 'push' | 'replace' = 'push') => {
    const currentQuery = qs.parse(history.location.search.replace("?", ""));
    const updatedQuery = _.defaults(query, currentQuery);
    history[method]({search: qs.stringify(updatedQuery), state})
};

export const QUERY_STRING_PARSE = "QUERY_STRING_PARSE";

export const parseQueryStringAction = (key?: string) => ({
    type: QUERY_STRING_PARSE,
    query: parseQueryString(),
    key
});

 
export const parseQueryString = (): any => {
    return qs.parse(history.location.search.replace("?", ""))
};