import * as React from "react"

export const SideBox: React.SFC<SideBoxProps> = ({title, content, className = "", children = null}) => (
    <div className={("box sidebox " + className).trim()}>
        {title && <div className="sidebox-title">{title}</div>}
        {content && <div className="sidebox-content">{content}</div>}
        {children}
    </div>
)

SideBox.displayName = "SideBox"

export default SideBox

export interface SideBoxProps {
    title?: string,
    content?: React.ReactNode | string,
    className?: string,
    children?: React.ReactNode
}
