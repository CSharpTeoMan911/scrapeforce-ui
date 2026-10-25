import '../styles/components.css'

export default function Frame({Id, width, height, position, display, children, className}){
    return (<div id={Id} className={className} style={{width:width, height:height, position:position, display:display, alignItems:'center', alignContent:'center'}}>
        {children}
    </div>);
} 