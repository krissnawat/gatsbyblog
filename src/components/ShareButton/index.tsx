import * as React from "react"

const ShareButton = ({ shareTo, link, title }: ShareButtonProps) => {
    const getShareLink = () => {
        switch (shareTo) {
            case "twitter":
                return `https://twitter.com/share?text=${title}&amp;url=${link}`
            case "linkedin":
                return `https://www.linkedin.com/shareArticle?mini=true&amp;url=${link}`
            case "reddit":
                return `https://reddit.com/submit?title=${title}&amp;url=${link}`
            case "facebook":
                return `https://www.facebook.com/sharer/sharer.php?u=${link}`
            case "hacker-news":
                return `https://news.ycombinator.com/submitlink?t=${title}&amp;u=${link}`
        }
    }
    const getWindowSize = () => {
        switch (shareTo) {
            case "twitter":
                return `width=550,height=235`
            case "linkedin":
                return `width=490,height=530`
            case "reddit":
                return `width=580,height=296`
            case "facebook":
                return `width=580,height=296`
            case "hacker-news":
                return `width=580,height=296`
        }
    }

    const ShareClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation()
        event.preventDefault()
        if (typeof window !== "undefined") {
            window.open(getShareLink(), `${shareTo}-share`, getWindowSize())
        }
    }

    return (
        <a
            className={`fa fa-${shareTo}`}
            href={link}
            onClick={ShareClick}
        >
            <span>Update</span>
        </a>
    )
}

export default ShareButton

export interface ShareButtonProps {
    shareTo: string
    link: string
    title: string
}