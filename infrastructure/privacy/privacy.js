import {privacyurl, termurl} from '../common/url'
import {getRequest} from '../common/config'

export const getPrivacy = () => {
    return getRequest(privacyurl());
}

export const getTerm = () => {
    return getRequest(termurl());
}
