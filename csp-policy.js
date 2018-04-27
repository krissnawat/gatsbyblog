// const deepmerge = require('deepmerge');

const defaultPolicy = {
    "default-src": [
        "'self'"
    ],
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
        // "cdn.syndication.twimg.com",
        "'sha256-07IlXpzTZ6R7aACQ5oRKmy8mu6HJ5zhxYR4cfnZHnME='",
        "'sha256-ml5NCCyvZVRMT9yuDNxgrqBCvXENW2FfNXw6uaG5t5M='",
        "'sha256-2+ExXDwjGk9C28Qn4PI5W7Ga2DIiAZDGLpNDsG4ljI8='",
        "'sha256-+/FADY2MCme7lW7/c1uoM+B69og2ipjumXIXhABs56I='",
        "'sha256-NCUPBIxoZgNIUymb3WFRqlNXXL0kgpteEzvG5+wweS0='",
        "'sha256-ffO3ab6wiPKq+4TM7QahHILxn7zAhOYhKGn3pzsu05U='",
        "'sha256-zVpczxDlSslgkqaTDlIWARtL+cGYScz1SWw5F8lTeKc='",
        "'sha256-lsWp+D34PYZ4F0C+/Ha1Q35jGBJLbPTTKXBqDGQJ9Kg='",
        "'self'",
    ],
    "img-src": [
        "stats.g.doubleclick.net",
        "platform.twitter.com",
        "pbs.twimg.com",
        "syndication.twitter.com",
        "www.google-analytics.com",
        "ssl.google-analytics.com",
        "'self'",
    ],
    "style-src": [
        "fonts.googleapis.com",
        "platform.twitter.com",
        "unsafe-inline",
        "'self'",
    ],
    "worker-src": [
        "'self'",
    ],
    "connect-src": [
        "stats.g.doubleclick.net",
        "www.google-analytics.com",
        "platform.twitter.com",
        "fonts.gstatic.com",
        "'self'",
    ],
    "child-src": [
        "embed.plnkr.co",
        "'self'",
    ],
    "object-src": [
        "'none'"
    ]
}

function reportToString(csp) {
    return Object.keys(csp)
        .map(type => `${type} ${csp[type].join(" ")};`)
        .join(" ")
}

let reportPolicy = defaultPolicy
reportPolicy["script-src"].push("strict-dynamic")

let cspPolicy = reportToString(defaultPolicy)
let cspReport = reportToString(reportPolicy)

module.exports = {
    policy: cspPolicy,
    report: cspReport
}