import * as _ from "lodash"

export const createLinkToTag = (tag: string) => `/tag/${_.kebabCase(tag.toLowerCase())}/`
