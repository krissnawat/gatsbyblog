// const deepmerge = require('deepmerge');

const defaultPolicy = {
   "form-action": [
       "syndication.twitter.com",
    ],
   "font-src": [
       "fonts.gstatic.com",
       "'self'",
    ],
   "script-src": [
       "www.google-analytics.com",
       "ssl.google-analytics.com",
    //    "'sha256-sOPJaJAyizbw4qATJmS9gVXZX8gWbcLhF0xS8rWviww='",
    //    "'sha256-MXY44blwPHWMXg1B2Y7eAqC0crc+p74gapDWjiMqKxA='",
    //    "'sha256-ml5NCCyvZVRMT9yuDNxgrqBCvXENW2FfNXw6uaG5t5M='",
    //    "'sha256-Y6ybr3Cm3Rfq7tF/eVtwoGVonvLLyEiO0oDCasqHDV0='",
       "'self'",
    ],
   "img-src": [
       "stats.g.doubleclick.net",
       "www.google-analytics.com",
       "ssl.google-analytics.com",
       "'self'",
    ],
   "style-src": [
       "fonts.googleapis.com",
    //    "'sha256-pmQVgiMVejhZ15re6r5Yh22QXGU4AlBwsAVwTDL6aHU='",
    //    "'sha256-L1sSENuZjDNt2Wq/MK3Z3FDSa4CoFELb7YwM9A2mzxc='",
    //    "'sha256-zCvYlDs6LsUp0EqrJFjIGUiM/AG2fGlkNrzJ2YiBTG0='",
    //    "'sha256-BP8N5oc1ukpumaiMwM/GPY3F97l5b3Jw4/yPbrQeKyg='",
       "'self'",
    ],
   "worker-src": [
       "'self'",
    ],
   "connect-src": [
       "'self'",
    ],
   "child-src": [
       "'self'",
    ],  
}

function reportToString(csp) {
    return Object.keys(csp)
    .map(type => `${type} ${csp[type].join(" ")};`)
    .join(" ")
}

let cspPolicy = reportToString(defaultPolicy)
let cspReport = reportToString(defaultPolicy)

module.exports = {
    policy: cspPolicy,
    report: cspReport
}