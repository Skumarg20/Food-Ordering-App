export default function Button({children,textOnly,className,...props}){
    let cssClasss=textOnly?'text-button':'button';
    cssClasss+=' '+className;
    return <button className={cssClasss} {...props}>{children}</button>
}