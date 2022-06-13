import {logourl} from '../common/url'
import {getRequest} from '../common/config'

export const getLogo = () => {
    return getRequest(logourl());
}
