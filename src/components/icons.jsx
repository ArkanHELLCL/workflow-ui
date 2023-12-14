/* eslint-disable react/prop-types */
export function HomeIcon() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

    )
}

export function FlowIcon({id}){
    return(
        id===1 ? <BagIcon /> : id===2 ? <PayIcon /> : id===4 ? <BillIcon /> : null
    )
}

export function BagIcon() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    )
}

export function BillIcon() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
    )
}

export function PayIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
    )
}

export function InBoxIcon({styles, strokeWidth}){
    return(
        <svg fill="currentColor" viewBox="0 0 512 512" strokeWidth={strokeWidth} className={styles}>
            <g>
                <g>
                    <g>
                        <path d="M405.419,135.019c-5.333-8.533-15.456-17.685-27.957-17.685h-36.128c-5.891,0-10.667,4.776-10.667,10.667
                            s4.776,10.667,10.667,10.667h36.128c2.901,0,7.147,3.285,9.824,7.573l100.181,163.093H354.357
                            c-10.367,0-19.307,7.286-21.397,17.44l-5.771,28.875c-1.216,6.101-7.669,7.019-11.456,7.019H196.267
                            c-2.325,0-10.005-0.544-11.424-7.691l-5.76-26.987c-2.133-10.667-11.307-18.656-21.333-18.656H24.533l100.192-163.04
                            c2.709-4.341,6.944-7.627,9.856-7.627h36.085c5.891,0,10.667-4.776,10.667-10.667c0-5.891-4.776-10.667-10.667-10.667h-36.128
                            c-12.501,0-22.635,9.131-27.989,17.739L0,308.459v159.808c0,18.225,14.746,33.014,32.971,33.067h446.059
                            C497.254,501.28,512,486.492,512,468.267V308.459L405.419,135.019z M490.667,468.267c0,6.443-5.195,11.681-11.637,11.733H32.971
                            c-6.443-0.053-11.638-5.29-11.637-11.733v-137.6l135.744-0.107c0.554,0.427,0.934,1.041,1.067,1.728l5.76,26.987
                            C166.837,374.059,179.819,384,196.267,384h119.467c16.704,0,29.408-9.493,32.32-24.181l6.304-29.152h136.309V468.267z"/>
                        <path d="M256,260.416l50.208-50.208c4.093-4.237,3.976-10.99-0.262-15.083c-4.134-3.993-10.687-3.993-14.821,0l-24.459,24.459
                            V21.333c0-5.891-4.776-10.667-10.667-10.667c-5.891,0-10.667,4.776-10.667,10.667v198.251l-24.459-24.459
                            c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82L256,260.416z"/>
                    </g>
                </g>
            </g>
            </svg>
    )

}

export function ArchiveIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>

    )
}

export function SendIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
    )
}

export function CloseIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
            <path stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>       
    )
}

export function OpenIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>      
    )
}

export function Icon({ open, pos }) {
    return (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className={`${open ? "" : "-rotate-90"} w-[.8rem] h-[.8rem] transition-transform ${pos} hover:cursor-pointer`}
      >
        <g>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </g>
      </svg>
    );
}

export function MinusIcon(){
    return(
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
    )
}

export function PlusIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5">
            <path  strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    )
}

export function EditIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
    )
}

export function UserIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    )
}

export function ObsIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
    )
}

export function DownloadIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
    )    
}

export function ArrowDownIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
    )    
}

export function ArrowUpIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
    )    
}

export function CaretDownIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    )    
}

export function CheckIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    )
}

export function CheckSmallIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 45" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    )
}

export function WarningIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-[.8rem] h-[.8rem]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>

    )
}

export function QuestionIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-[.8rem] h-[.8rem]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
        )
}

export function ReloadIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
    )
}

export function SearchIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    )
}

export function TableIcon({styles}){
    return(
        <svg fill="currentColor" viewBox="0 0 512 512" className={styles}>
            <g>
                <g>
                    <path d="M503.467,0H8.533C3.823,0,0,3.823,0,8.533v494.933C0,508.177,3.823,512,8.533,512h494.933c4.71,0,8.533-3.823,8.533-8.533    V8.533C512,3.823,508.177,0,503.467,0z M162.133,494.933H17.067V384h145.067V494.933z M162.133,366.933H17.067V256h145.067    V366.933z M162.133,238.933H17.067V128h145.067V238.933z M332.8,494.933H179.2V384h153.6V494.933z M332.8,366.933H179.2V256h153.6    V366.933z M332.8,238.933H179.2V128h153.6V238.933z M494.933,494.933H349.867V384h145.067V494.933z M494.933,366.933H349.867V256    h145.067V366.933z M494.933,238.933H349.867V128h145.067V238.933z M494.933,110.933H17.067V17.067h477.867V110.933z"/>
                </g>
            </g>
        </svg>
    )
}

export function TableIconPlus({styles}){
    return(
        <div className="relative">
            <span>
                <svg fill="currentColor" viewBox="0 0 512 512" className={styles}>
                    <g>
                        <g>
                            <path d="M503.467,0H8.533C3.823,0,0,3.823,0,8.533v494.933C0,508.177,3.823,512,8.533,512h494.933c4.71,0,8.533-3.823,8.533-8.533    V8.533C512,3.823,508.177,0,503.467,0z M162.133,494.933H17.067V384h145.067V494.933z M162.133,366.933H17.067V256h145.067    V366.933z M162.133,238.933H17.067V128h145.067V238.933z M332.8,494.933H179.2V384h153.6V494.933z M332.8,366.933H179.2V256h153.6    V366.933z M332.8,238.933H179.2V128h153.6V238.933z M494.933,494.933H349.867V384h145.067V494.933z M494.933,366.933H349.867V256    h145.067V366.933z M494.933,238.933H349.867V128h145.067V238.933z M494.933,110.933H17.067V17.067h477.867V110.933z"/>
                        </g>
                    </g>
                </svg>
            </span>
            <span className="absolute -bottom-4 -right-4">
                <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" strokeWidth="1">
                    <path d="M12 6V18" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 12H18" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
        </div>
                
    )
}

export function DocIcon({styles, strokeWidth}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    )
}

export function ReportIcon({styles, strokeWidth}){
    return(
        <svg fill="currentColor" viewBox="0 0 41.833 41.833" strokeWidth={strokeWidth} className={styles}><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" strokeWidth="" > <g> <g> <path d="M2.5,31.458h15.792v3.333H15.75c-0.276,0-0.5,0.226-0.5,0.5v3.167c0,0.275,0.224,0.5,0.5,0.5h10.333 c0.274,0,0.5-0.225,0.5-0.5v-3.167c0-0.274-0.226-0.5-0.5-0.5h-2.541v-3.333h15.791c1.379,0,2.5-1.122,2.5-2.5V5.375 c0-1.378-1.121-2.5-2.5-2.5H2.5c-1.378,0-2.5,1.122-2.5,2.5v23.583C0,30.336,1.122,31.458,2.5,31.458z M16.25,37.958v-0.583h9.333 v0.583H16.25z M25.583,36.375H16.25v-0.583h2.542h4.25h2.543L25.583,36.375L25.583,36.375z M22.542,34.792h-3.25v-3.333h3.25 V34.792z M39.333,30.458H23.042h-4.25H2.5c-0.827,0-1.5-0.673-1.5-1.5v-1.75h39.833v1.75 C40.833,29.786,40.159,30.458,39.333,30.458z M2.5,3.875h36.833c0.826,0,1.5,0.673,1.5,1.5v20.833H1V5.375 C1,4.547,1.673,3.875,2.5,3.875z"></path> <path d="M7.667,25.125c0.138,0,0.276-0.059,0.375-0.169l6.642-7.512l3.457,3.57c0.003,0.004,0.006,0.004,0.009,0.006 c0.003,0.004,0.004,0.008,0.006,0.01c0.031,0.029,0.068,0.047,0.103,0.064c0.019,0.012,0.035,0.026,0.055,0.035 c0.06,0.023,0.123,0.037,0.187,0.037s0.128-0.014,0.189-0.038c0.02-0.008,0.036-0.024,0.056-0.036 c0.035-0.021,0.072-0.037,0.103-0.066c0.003-0.002,0.003-0.006,0.006-0.01c0.003-0.002,0.006-0.002,0.009-0.006l5.24-5.519 l4.084,2.119c0.008,0.004,0.019,0.003,0.025,0.006c0.064,0.03,0.135,0.05,0.205,0.05c0.08,0,0.158-0.025,0.23-0.064 c0.021-0.012,0.039-0.031,0.063-0.047c0.029-0.022,0.063-0.038,0.088-0.067l6.834-8.125c0.179-0.211,0.148-0.527-0.063-0.705 c-0.211-0.177-0.523-0.15-0.703,0.061l-6.574,7.818l-4.064-2.108c-0.01-0.005-0.02-0.004-0.024-0.008 c-0.033-0.015-0.065-0.022-0.104-0.029c-0.027-0.006-0.058-0.014-0.086-0.015c-0.031-0.001-0.063,0.006-0.097,0.011 c-0.03,0.005-0.063,0.009-0.095,0.021c-0.026,0.01-0.053,0.027-0.075,0.042c-0.031,0.018-0.063,0.036-0.088,0.061 c-0.009,0.007-0.019,0.009-0.022,0.017l-5.141,5.414l-3.47-3.583c-0.005-0.005-0.012-0.007-0.017-0.011 c-0.005-0.005-0.007-0.011-0.012-0.015c-0.02-0.018-0.045-0.025-0.067-0.039c-0.029-0.019-0.056-0.039-0.088-0.051 c-0.03-0.011-0.06-0.014-0.091-0.019c-0.032-0.005-0.062-0.013-0.095-0.013c-0.033,0.001-0.065,0.01-0.097,0.017 c-0.03,0.007-0.059,0.01-0.088,0.023c-0.031,0.013-0.057,0.035-0.086,0.054c-0.022,0.015-0.047,0.023-0.067,0.042 c-0.005,0.005-0.007,0.012-0.011,0.017c-0.005,0.005-0.011,0.007-0.015,0.012l-7,7.917C7.109,24.5,7.128,24.814,7.335,25 C7.432,25.083,7.549,25.125,7.667,25.125z"></path> </g> </g> </g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M2.5,31.458h15.792v3.333H15.75c-0.276,0-0.5,0.226-0.5,0.5v3.167c0,0.275,0.224,0.5,0.5,0.5h10.333 c0.274,0,0.5-0.225,0.5-0.5v-3.167c0-0.274-0.226-0.5-0.5-0.5h-2.541v-3.333h15.791c1.379,0,2.5-1.122,2.5-2.5V5.375 c0-1.378-1.121-2.5-2.5-2.5H2.5c-1.378,0-2.5,1.122-2.5,2.5v23.583C0,30.336,1.122,31.458,2.5,31.458z M16.25,37.958v-0.583h9.333 v0.583H16.25z M25.583,36.375H16.25v-0.583h2.542h4.25h2.543L25.583,36.375L25.583,36.375z M22.542,34.792h-3.25v-3.333h3.25 V34.792z M39.333,30.458H23.042h-4.25H2.5c-0.827,0-1.5-0.673-1.5-1.5v-1.75h39.833v1.75 C40.833,29.786,40.159,30.458,39.333,30.458z M2.5,3.875h36.833c0.826,0,1.5,0.673,1.5,1.5v20.833H1V5.375 C1,4.547,1.673,3.875,2.5,3.875z"></path> <path d="M7.667,25.125c0.138,0,0.276-0.059,0.375-0.169l6.642-7.512l3.457,3.57c0.003,0.004,0.006,0.004,0.009,0.006 c0.003,0.004,0.004,0.008,0.006,0.01c0.031,0.029,0.068,0.047,0.103,0.064c0.019,0.012,0.035,0.026,0.055,0.035 c0.06,0.023,0.123,0.037,0.187,0.037s0.128-0.014,0.189-0.038c0.02-0.008,0.036-0.024,0.056-0.036 c0.035-0.021,0.072-0.037,0.103-0.066c0.003-0.002,0.003-0.006,0.006-0.01c0.003-0.002,0.006-0.002,0.009-0.006l5.24-5.519 l4.084,2.119c0.008,0.004,0.019,0.003,0.025,0.006c0.064,0.03,0.135,0.05,0.205,0.05c0.08,0,0.158-0.025,0.23-0.064 c0.021-0.012,0.039-0.031,0.063-0.047c0.029-0.022,0.063-0.038,0.088-0.067l6.834-8.125c0.179-0.211,0.148-0.527-0.063-0.705 c-0.211-0.177-0.523-0.15-0.703,0.061l-6.574,7.818l-4.064-2.108c-0.01-0.005-0.02-0.004-0.024-0.008 c-0.033-0.015-0.065-0.022-0.104-0.029c-0.027-0.006-0.058-0.014-0.086-0.015c-0.031-0.001-0.063,0.006-0.097,0.011 c-0.03,0.005-0.063,0.009-0.095,0.021c-0.026,0.01-0.053,0.027-0.075,0.042c-0.031,0.018-0.063,0.036-0.088,0.061 c-0.009,0.007-0.019,0.009-0.022,0.017l-5.141,5.414l-3.47-3.583c-0.005-0.005-0.012-0.007-0.017-0.011 c-0.005-0.005-0.007-0.011-0.012-0.015c-0.02-0.018-0.045-0.025-0.067-0.039c-0.029-0.019-0.056-0.039-0.088-0.051 c-0.03-0.011-0.06-0.014-0.091-0.019c-0.032-0.005-0.062-0.013-0.095-0.013c-0.033,0.001-0.065,0.01-0.097,0.017 c-0.03,0.007-0.059,0.01-0.088,0.023c-0.031,0.013-0.057,0.035-0.086,0.054c-0.022,0.015-0.047,0.023-0.067,0.042 c-0.005,0.005-0.007,0.012-0.011,0.017c-0.005,0.005-0.011,0.007-0.015,0.012l-7,7.917C7.109,24.5,7.128,24.814,7.335,25 C7.432,25.083,7.549,25.125,7.667,25.125z"></path> </g> </g> </g></svg>
    )

}

export function LoadingIcon(){
    return(
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">  
        </svg>
    )
}

export function HelpIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
    )
}

export function PowerIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
        </svg>
    )
}

export function MailIcon({styles, strokeWidth}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    )
}

export function ButtonIcon({typeButton, styles, strokeWidth}){
    if(typeButton==='btn_abrir')
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-lime-600'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
    )
    if(typeButton==='btn_devolver')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-[#bf6ac3]'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
    )
    if(typeButton==='btn_avanzar')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-[#bf6ac3]'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    )
    if(typeButton==='btn_retroceder')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-[#bf6ac3]'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
    )
    if(typeButton==='btn_enviarDes')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-green-600'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
        </svg>
    )
    if(typeButton==='btn_tomar')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-sky-600'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3" />
        </svg>
    )
    if(typeButton==='btn_finalizar')
    return (        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles + ' text-green-700'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>        
    )
    if(typeButton==='btn_enviar')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-green-600'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
        </svg>
    )
    if(typeButton==='btn_rechazar')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-red-600'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
    if(typeButton==='btn_liberar')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-sky-600'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
        </svg>
    )
    if(typeButton==='btn_observaciones')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-blue-400'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>     
    )
  
    return null
}

export function TypeDoc({typeDoc}){    
    if(typeDoc==='pdf' || typeDoc==="application/pdf"){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path fill="#fff" d="M3.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H3.5c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5z"/>
                <path fill="#fff" d="M13 4v-.086a.496.496 0 0 0-.146-.353L11 1.707V3.5c0 .275.225.5.5.5H13z"/>
                <path fill="#605E5C" fillRule="evenodd" d="M13.56 2.853 11.146.44a1.51 1.51 0 0 0-1.06-.44H3.5C2.673 0 2 .673 2 1.5v13c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V3.914c0-.4-.156-.777-.44-1.06v-.001zm-.707.708c.095.094.147.22.147.353V4h-1.5a.501.501 0 0 1-.5-.5V1.707l1.854 1.854h-.001zM3.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H3.5c-.275 0-.5.225-.5.5v13a.5.5 0 0 0 .5.5z" clipRule="evenodd" opacity=".64"/>
                <path fill="#C8C6C4" d="M11.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"/>
                <path fill="#D65532" fillRule="evenodd" d="M5 13v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm-3.5 0h2.3a.2.2 0 0 0 .2-.2v-2.6a.2.2 0 0 0-.2-.2H1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zm10.7 0h2.3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2.3a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2zm-2.4 0H6.2a.2.2 0 0 1-.2-.2v-2.6c0-.11.09-.2.2-.2h3.6c.11 0 .2.084.2.194v2.612c0 .11-.09.194-.2.194z" clipRule="evenodd"/>
            </svg>
        )
    }
    if(typeDoc==='docx' || typeDoc==='doc'){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path fill="#fff" d="M5.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H5.5c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5z"/>
                <path fill="#fff" d="M15 4v-.086a.496.496 0 0 0-.146-.353L13 1.707V3.5c0 .275.225.5.5.5H15z"/>
                <path fill="#605E5C" fillRule="evenodd" d="M15.56 2.853 13.146.44a1.51 1.51 0 0 0-1.06-.44H5.5C4.673 0 4 .673 4 1.5v13c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V3.914c0-.4-.156-.777-.44-1.06v-.001zm-.707.708c.095.094.147.22.147.353V4h-1.5a.501.501 0 0 1-.5-.5V1.707l1.854 1.854h-.001zM5.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H5.5c-.275 0-.5.225-.5.5v13a.5.5 0 0 0 .5.5z" clipRule="evenodd" opacity=".64"/>
                <path fill="#185ABD" d="M13.5 10H10v1h3.5a.5.5 0 0 0 0-1z"/>
                <path fill="#2B7CD3" d="M13.5 8H10v1h3.5a.5.5 0 0 0 0-1z"/><path fill="#41A5EE" d="M13.5 6H10v1h3.5a.5.5 0 0 0 0-1z"/>
                <path fill="#185ABD" d="M1 13h7a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1z"/>
                <path fill="#fff" d="M5.855 10.972h-.576l-.765-3.755-.82 3.773H3.22L2.006 6l.732.002.698 3.308L4.154 6h.706l.808 3.298.606-3.267.707.005-1.126 4.936z"/>
            </svg>
        )
    }
    if(typeDoc==='xlsx' || typeDoc==='xls'){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path fill="#fff" d="M5.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H5.5c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5z"/>
                <path fill="#fff" d="M15 4v-.086a.496.496 0 0 0-.146-.353L13 1.707V3.5c0 .275.225.5.5.5H15z"/>
                <path fill="#605E5C" fillRule="evenodd" d="M15.56 2.853 13.146.44a1.51 1.51 0 0 0-1.06-.44H5.5C4.673 0 4 .673 4 1.5v13c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V3.914c0-.4-.156-.777-.44-1.06v-.001zm-.707.708c.095.094.147.22.147.353V4h-1.5a.501.501 0 0 1-.5-.5V1.707l1.854 1.854h-.001zM5.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H5.5c-.275 0-.5.225-.5.5v13a.5.5 0 0 0 .5.5z" clipRule="evenodd" opacity=".64"/>
                <path fill="#134A2C" d="M13.5 10h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                <path fill="#21A366" d="M13.5 8h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                <path fill="#33C481" d="M13.5 6h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                <path fill="#107C41" d="M1 13h7a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1z"/>
                <path fill="#fff" d="M5.413 11 2.766 6h.823l2.69 5h-.866z"/>
                <path fill="#fff" d="m3.632 11 2.647-5h-.823l-2.69 5h.866z"/>
            </svg>
        )
    }
    if(typeDoc==='pptx' || typeDoc==='ppt'){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path fill="#fff" d="M5.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H5.5c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5z"/>
                <path fill="#fff" d="M15 4v-.086a.496.496 0 0 0-.146-.353L13 1.707V3.5c0 .275.225.5.5.5H15z"/>
                <path fill="#605E5C" fillRule="evenodd" d="M15.56 2.853 13.146.44a1.51 1.51 0 0 0-1.06-.44H5.5C4.673 0 4 .673 4 1.5v13c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V3.914c0-.4-.156-.777-.44-1.06v-.001zm-.707.708c.095.094.147.22.147.353V4h-1.5a.501.501 0 0 1-.5-.5V1.707l1.854 1.854h-.001zM5.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H5.5c-.275 0-.5.225-.5.5v13a.5.5 0 0 0 .5.5z" clipRule="evenodd" opacity=".64"/>
                <path fill="#ED6C47" d="M12.95 9H11l-.5-1-.5 1v2.95A2.5 2.5 0 0 0 12.95 9z"/>
                <path fill="#FF8F6B" d="M10.5 7c-.172 0-.338.021-.5.055V9h1V7.05a2.51 2.51 0 0 0-.5-.05z"/>
                <path fill="#FFC7B5" d="M12 8h2a2.567 2.567 0 0 0-2-2v2z"/>
                <path fill="#C43E1C" d="M1 13h7a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1z"/>
                <path fill="#fff" fillRule="evenodd" d="M5 6H4v1h1V6zm0 2H4v1h1V8z" clipRule="evenodd"/>
                <path stroke="#fff" d="M3.5 11V6"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="bevel" d="M4.5 6.5H5c.382 0 .624.278.624.83 0 .54-.024 1.17-.507 1.17H4.5"/>
                <path fill="#fff" fillRule="evenodd" d="M5 7h.159v1h-.16V7z" clipRule="evenodd"/>
            </svg>
        )
    }
    if(typeDoc==='txt'){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path fill="#fff" d="M3.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H3.5c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5z"/>
                <path fill="#fff" d="M13 4v-.086a.496.496 0 0 0-.146-.353L11 1.707V3.5c0 .275.225.5.5.5H13z"/>
                <path fill="#605E5C" fillRule="evenodd" d="M13.56 2.853 11.146.44a1.51 1.51 0 0 0-1.06-.44H3.5C2.673 0 2 .673 2 1.5v13c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V3.914c0-.4-.156-.777-.44-1.06v-.001zm-.707.708c.095.094.147.22.147.353V4h-1.5a.501.501 0 0 1-.5-.5V1.707l1.854 1.854h-.001zM3.5 15h9c.275 0 .5-.225.5-.5V5h-1.5c-.827 0-1.5-.673-1.5-1.5V1H3.5c-.275 0-.5.225-.5.5v13a.5.5 0 0 0 .5.5z" clipRule="evenodd" opacity=".64"/>
                <path fill="#BDBBB8" fillRule="evenodd" d="M4.444 7h7.112c.245 0 .444-.224.444-.5s-.199-.5-.444-.5H4.444C4.199 6 4 6.224 4 6.5s.2.5.444.5zm7.112 2H4.444C4.2 9 4 8.776 4 8.5s.199-.5.444-.5h7.112c.245 0 .444.224.444.5s-.199.5-.444.5zm-7.112 2h7.112c.245 0 .444-.224.444-.5s-.199-.5-.444-.5H4.444c-.245 0-.444.224-.444.5s.2.5.444.5zm0 2h7.112c.245 0 .444-.224.444-.5s-.199-.5-.444-.5H4.444c-.245 0-.444.224-.444.5s.2.5.444.5z" clipRule="evenodd"/>
            </svg>
        )
    }
    if(typeDoc==='zip'){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path fill="#FFB900" d="M8 4 6.586 2.586A2 2 0 0 0 5.172 2H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8z"/>
                <path fill="#FFD75E" d="M8 4 6.586 5.414A2 2 0 0 1 5.172 6H0v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8z"/>
                <path fill="url(#a)" d="M8 4 6.586 5.414A2 2 0 0 1 5.172 6H0v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8z"/>
                <path fill="#E67628" d="M1 13.5c-.373 0-.71-.142-.973-.367A.989.989 0 0 0 1 14h14c.505 0 .905-.38.973-.867-.262.226-.6.367-.973.367H1z"/>
                <path fill="#fff" d="M6.836 5.914 8.75 4H8L6.586 5.414A2 2 0 0 1 5.172 6H0v.5h5.422a2 2 0 0 0 1.414-.586z" opacity=".4"/>
                <path fill="#BF5712" fillRule="evenodd" d="M1.25 8h6.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25V11h1V9H1v-.75A.25.25 0 0 1 1.25 8zm8.5 3h-.5a.25.25 0 0 1-.25-.25v-1.5A.25.25 0 0 1 9.25 9h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25zm2 0h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25zm1.5 0h.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25zm2.5 0h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25zM7 11H5V9h2v2zm-7 0h.75a.25.25 0 0 0 .25-.25v-1.5A.25.25 0 0 0 .75 9H0v2z" clipRule="evenodd"/>
                    <defs>
                        <linearGradient id="a" x1="0" x2="0" y1="4" y2="14" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#fff" stopOpacity=".01"/>
                            <stop offset=".999" stopColor="#FFD75E" stopOpacity=".3"/>
                        </linearGradient>
                    </defs>
            </svg>
        )
    }
    return null
}

export function SaveAsIcon(){
    return(
        <div className="relative">
            <span>
                <svg fill="currentColor" viewBox="0 0 208 208" className="w-4 h-4">
                    <g>
                        <g>
                            <g>
                                <path d="M168,0.013V0h-0.246H36H4v208h24h152h24V36.244C204,16.343,187.87,0.147,168,0.013z M44,8h116v48H44V8z M172,200H36v-80     h136V200z M196,200h-16v-88H28v88H12V8h24v56h132V8.013c15.46,0.134,28,12.74,28,28.232V200z"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </span>
            <span className="absolute -bottom-1 -right-1">
                <svg viewBox="0 0 24 24" fill="#1c7bc2" className="w-4 h-4">                    
                    <path d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435" stroke="#1c7bc2" strokeLinecap="round" strokeLinejoin="round" fill="#1c7bc2" strokeWidth={2}/>
                </svg>
            </span>
        </div>
    )
}

export function SaveAsIconBig({styles}){
    return(
        <div className="relative">
            <span>
                <svg fill="currentColor" viewBox="0 0 208 208" className={styles}>
                    <g>
                        <g>
                            <g>
                                <path d="M168,0.013V0h-0.246H36H4v208h24h152h24V36.244C204,16.343,187.87,0.147,168,0.013z M44,8h116v48H44V8z M172,200H36v-80     h136V200z M196,200h-16v-88H28v88H12V8h24v56h132V8.013c15.46,0.134,28,12.74,28,28.232V200z"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </span>
            <span className="absolute -bottom-2 -right-2">
                <svg viewBox="0 0 24 24" fill="#1c7bc2" className={styles}>                    
                    <path d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435" stroke="#1c7bc2" strokeLinecap="round" strokeLinejoin="round" fill="#1c7bc2" strokeWidth={2}/>
                </svg>
            </span>
        </div>
    )
}

export function OpenFolderIcon({styles}){
    return(
        <svg fill="currentColor" viewBox="0 0 300.872 300.872" className={styles}>
            <g>
                <path d="M299.916,123.326c-1.025-1.504-2.728-2.404-4.548-2.404h-46.747V81.481c0-3.039-2.465-5.504-5.504-5.504H124.84V41.59
                    c0-3.039-2.464-5.502-5.503-5.502H5.502C2.463,36.088,0,38.551,0,41.59V259.28c0,0.201,0.012,0.398,0.033,0.594
                    c0.004,0.039,0.012,0.074,0.017,0.113c0.022,0.168,0.05,0.336,0.087,0.504c0.013,0.055,0.028,0.107,0.042,0.162
                    c0.039,0.148,0.083,0.297,0.134,0.443c0.019,0.055,0.039,0.109,0.059,0.162c0.059,0.152,0.124,0.301,0.196,0.447
                    c0.021,0.041,0.039,0.084,0.061,0.125c0.097,0.186,0.203,0.367,0.322,0.543c0.002,0.002,0.002,0.004,0.004,0.004
                    c0.007,0.012,0.016,0.02,0.023,0.031c0.108,0.156,0.226,0.305,0.349,0.447c0.043,0.051,0.088,0.1,0.133,0.148
                    c0.096,0.103,0.195,0.203,0.298,0.299c0.051,0.047,0.101,0.094,0.153,0.139c0.119,0.103,0.242,0.201,0.369,0.293
                    c0.037,0.025,0.072,0.055,0.109,0.08c0.17,0.117,0.347,0.225,0.529,0.322c0.023,0.012,0.047,0.022,0.069,0.033
                    c0.16,0.082,0.323,0.156,0.491,0.223c0.05,0.02,0.101,0.037,0.151,0.057c0.145,0.053,0.292,0.098,0.441,0.139
                    c0.059,0.016,0.116,0.031,0.176,0.045c0.15,0.035,0.304,0.063,0.457,0.086c0.056,0.008,0.11,0.018,0.167,0.025
                    c0.209,0.023,0.419,0.039,0.631,0.039h237.615c2.262,0,4.294-1.385,5.121-3.49l52.251-132.854
                    C301.156,126.744,300.941,124.83,299.916,123.326z M11.006,47.094h102.828v34.387c0,3.039,2.464,5.502,5.503,5.502h118.278v33.939
                    H57.753c-2.262,0-4.294,1.385-5.121,3.488L11.006,230.252V47.094z M239.369,253.778H13.58l47.922-121.85h181.615h44.174
                    L239.369,253.778z"/>
            </g>
        </svg>
    )
}

export function PrinterIcon({styles, strokeWidth}){
    return(
        <svg viewBox="-3.2 -3.2 38.40 38.40" fill="currentColor" className={styles}>
            <g id="SVGRepo_bgCarrier" strokeWidth={strokeWidth}/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M7.47 12.268c-0.589 0-1.066 0.477-1.066 1.066s0.477 1.066 1.066 1.066c0.588 0 1.066-0.477 1.066-1.066s-0.478-1.066-1.066-1.066z" fill="#000000"> </path> <path d="M10.669 12.268c-0.589 0-1.066 0.477-1.066 1.066s0.477 1.066 1.066 1.066c0.588 0 1.066-0.477 1.066-1.066s-0.478-1.066-1.066-1.066z" fill="currentColor"> </path> <path d="M29.328 8.003h-5.864v-5.331h-14.928v5.331h-5.864c-0.295 0-0.533 0.238-0.533 0.533v15.994c0 0.295 0.238 0.533 0.533 0.533h5.864v4.265h14.928v-4.265h5.864c0.295 0 0.533-0.238 0.533-0.533v-15.994c0-0.295-0.238-0.533-0.533-0.533zM9.602 3.738h12.795v4.265h-12.795v-4.265zM22.398 28.262h-12.795v-9.596h12.795v9.596zM28.795 23.997h-5.331v-6.398h-14.928v6.398h-5.331v-14.928h25.59v14.928z" fill="currentColor"> </path> </g>
        </svg>
    )
}

export function SaveAllIcon(){
    return(
        <div className="relative">
            <span>
                <svg fill="currentColor" viewBox="0 0 512 512" className="h-[19px] w-[19px]" strokeWidth="1.7">
                    <g>
                        <g>
                            <path d="M447.168,134.56c-0.535-1.288-1.318-2.459-2.304-3.445l-128-128c-2.003-1.988-4.709-3.107-7.531-3.115H138.667
                                C132.776,0,128,4.776,128,10.667V64H74.667C68.776,64,64,68.776,64,74.667v426.667C64,507.224,68.776,512,74.667,512h298.667
                                c5.891,0,10.667-4.776,10.667-10.667V448h53.333c5.891,0,10.667-4.776,10.667-10.667V138.667
                                C447.997,137.256,447.714,135.86,447.168,134.56z M320,36.416L411.584,128H320V36.416z M362.667,490.667H85.333V85.333H128v352
                                c0,5.891,4.776,10.667,10.667,10.667h224V490.667z M426.667,426.667H149.333V21.333h149.333v117.333
                                c0,5.891,4.776,10.667,10.667,10.667h117.333V426.667z"/>
                        </g>
                    </g>
                </svg>
            </span>
            <span className="absolute -bottom-1 right-0">
                <svg viewBox="0 0 24 24" className="w-3 h-3" >
                    <path fill="none" stroke="#c36ac6" strokeMiterlimit="10" strokeWidth="1.91px" d="M22.5,22.5H1.5V1.5H18.68L22.5,5.32Z"/>
                    <path fill="none" stroke="#c36ac6" strokeMiterlimit="10" strokeWidth="1.91px" d="M7.23,1.5h9.55a0,0,0,0,1,0,0V6.27a1,1,0,0,1-1,1H8.18a1,1,0,0,1-1-1V1.5A0,0,0,0,1,7.23,1.5Z"/>
                    <rect fill="none" stroke="#c36ac6" strokeMiterlimit="10" strokeWidth="1.91px" x="6.27" y="14.86" width="11.45" height="7.64"/>
                </svg>                
            </span>
        </div>
    )
}

export function SaveAllIconBig({styles}){
    return(
        <div className="relative">
            <span>
                <svg fill="currentColor" viewBox="0 0 512 512" className={styles} strokeWidth="1.7">
                    <g>
                        <g>
                            <path d="M447.168,134.56c-0.535-1.288-1.318-2.459-2.304-3.445l-128-128c-2.003-1.988-4.709-3.107-7.531-3.115H138.667
                                C132.776,0,128,4.776,128,10.667V64H74.667C68.776,64,64,68.776,64,74.667v426.667C64,507.224,68.776,512,74.667,512h298.667
                                c5.891,0,10.667-4.776,10.667-10.667V448h53.333c5.891,0,10.667-4.776,10.667-10.667V138.667
                                C447.997,137.256,447.714,135.86,447.168,134.56z M320,36.416L411.584,128H320V36.416z M362.667,490.667H85.333V85.333H128v352
                                c0,5.891,4.776,10.667,10.667,10.667h224V490.667z M426.667,426.667H149.333V21.333h149.333v117.333
                                c0,5.891,4.776,10.667,10.667,10.667h117.333V426.667z"/>
                        </g>
                    </g>
                </svg>
            </span>
            <span className="absolute -bottom-1 -right-1">
                <svg viewBox="0 0 24 24" className="w-5 h-5" >
                    <path fill="none" stroke="#c36ac6" strokeMiterlimit="10" strokeWidth="1.91px" d="M22.5,22.5H1.5V1.5H18.68L22.5,5.32Z"/>
                    <path fill="none" stroke="#c36ac6" strokeMiterlimit="10" strokeWidth="1.91px" d="M7.23,1.5h9.55a0,0,0,0,1,0,0V6.27a1,1,0,0,1-1,1H8.18a1,1,0,0,1-1-1V1.5A0,0,0,0,1,7.23,1.5Z"/><rect fill="none" stroke="#c36ac6" strokeMiterlimit="10" strokeWidth="1.91px" x="6.27" y="14.86" width="11.45" height="7.64"/>
                </svg>                
            </span>
        </div>
    )
}

export function DeleteFileIcon({styles, strokeWidth}){
    return (
        <svg viewBox="0 0 32 32" className={styles} strokeWidth={strokeWidth}>
            <g id="cross">
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} x1="7" x2="25" y1="7" y2="25"/>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} x1="7" x2="25" y1="25" y2="7"/>
            </g>
        </svg>
    )
}
export function ArrowLeftIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>      
    )
}
export function EnvelopePlusIcon(){
    return(
        <div className="relative">
            <span>
                <svg fill="currentColor" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" className="h-8 w-8">
                    <path d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
                        h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
                        L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
                        L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
                        C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
                        M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
                        c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
                        l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"/>
                </svg>
            </span>
            <span className="absolute -bottom-[11px] -right-[12px] text-green-600">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.95} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            </span>
        </div>
    )
}
export function FlowPlusIcon({styles, strokeWidth}){
    return(
        <div className="relative">
            <span>
            <svg viewBox="0 0 32 32" className={styles} strokeWidth={strokeWidth}>
                <path fill="currentColor" d="M29,21h-3v-3.427c0-0.827-0.673-1.5-1.5-1.5h-0.839c-0.089-0.19-0.234-0.359-0.45-0.467l-5.87-2.935  c-0.268-0.134-0.553-0.21-0.842-0.259V11H20c1.657,0,3-1.343,3-3V7c0-1.657-1.343-3-3-3h-8c-1.657,0-3,1.343-3,3v1  c0,1.657,1.343,3,3,3h3.5v1.412c-0.289,0.049-0.573,0.125-0.842,0.259l-5.87,2.935c-0.216,0.108-0.36,0.277-0.45,0.467H7.5  c-0.827,0-1.5,0.673-1.5,1.5V21H3c-1.657,0-3,1.343-3,3v1c0,1.657,1.343,3,3,3h7c1.657,0,3-1.343,3-3v-1c0-1.657-1.343-3-3-3H7  v-3.427c0-0.276,0.225-0.5,0.5-0.5h0.924c0.09,0.128,0.207,0.243,0.365,0.322l5.87,2.935c0.422,0.211,0.882,0.317,1.342,0.317  c0.46,0,0.919-0.106,1.342-0.317l5.87-2.935c0.158-0.079,0.275-0.193,0.365-0.322H24.5c0.275,0,0.5,0.224,0.5,0.5V21h-3  c-1.657,0-3,1.343-3,3v1c0,1.657,1.343,3,3,3h7c1.657,0,3-1.343,3-3v-1C32,22.343,30.657,21,29,21z M10,8V7c0-1.103,0.897-2,2-2h8  c1.103,0,2,0.897,2,2v1c0,1.103-0.897,2-2,2h-8C10.897,10,10,9.103,10,8z M12,24v1c0,1.103-0.897,2-2,2H3c-1.103,0-2-0.897-2-2v-1  c0-1.103,0.897-2,2-2h7C11.103,22,12,22.897,12,24z M16.894,19.435c-0.276,0.138-0.586,0.211-0.894,0.211  c-0.309,0-0.618-0.073-0.894-0.211L9.236,16.5l5.87-2.935c0.276-0.138,0.586-0.211,0.894-0.211s0.618,0.073,0.894,0.211l5.87,2.935  L16.894,19.435z M31,25c0,1.103-0.897,2-2,2h-7c-1.103,0-2-0.897-2-2v-1c0-1.103,0.897-2,2-2h7c1.103,0,2,0.897,2,2V25z"/>
            </svg>
            </span>
            <span className="absolute -top-1 -left-5">
                <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" strokeWidth="1">
                    <path d="M12 6V18" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 12H18" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
        </div>
    )
}

export function GenReportIcon({styles, strokeWidth}){
    return(
        <div className="relative">
            <span>
                <svg  fill="currentColor" viewBox="0 0 470.586 470.586" className={styles} strokeWidth={strokeWidth}>
                    <g>
                        <path d="M327.081,0H90.234c-15.9,0-28.854,12.959-28.854,28.859v412.863c0,15.924,12.953,28.863,28.854,28.863H380.35   c15.917,0,28.855-12.939,28.855-28.863V89.234L327.081,0z M333.891,43.184l35.996,39.121h-35.996V43.184z M384.972,441.723   c0,2.542-2.081,4.629-4.634,4.629H90.234c-2.551,0-4.62-2.087-4.62-4.629V28.859c0-2.548,2.069-4.613,4.62-4.613h219.41v70.181   c0,6.682,5.444,12.099,12.129,12.099h63.198V441.723z M140.851,126.337h219.662v12.105H140.851v62.547h219.662v12.105H140.851   v60.526h219.662v12.105H140.851v56.991h219.662v12.105H140.851v33.792h-12.105v-33.792h-22.177v-12.105h22.177v-56.991h-22.177   v-12.105h22.177v-60.526h-22.177v-12.105h22.177v-62.547h-22.177v-12.105h22.177V85.984h12.105V126.337z"/>
                    </g>
                </svg>
            </span>
            <span className="absolute -bottom-3 -right-2">
                <svg viewBox="0 0 20 20" fill="none" className="h-7 w-7">
                    <path d="M13.9372 4.21148C14.3936 4.52244 14.5115 5.14453 14.2005 5.60095C13.8896 6.05738 13.2675 6.1753 12.8111 5.86434C11.9885 5.30394 11.0183 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C11.4232 3 12.7852 3.42666 13.9372 4.21148Z" fill="#1c7bc2"/>
                    <path d="M13.5385 12.5062C13.0732 12.8038 12.4548 12.6679 12.1572 12.2026C11.8596 11.7373 11.9955 11.1189 12.4608 10.8214L15.9426 8.59426C16.4079 8.29667 17.0263 8.43258 17.3239 8.89784C17.6215 9.36309 17.4855 9.98149 17.0203 10.2791L13.5385 12.5062Z" fill="#1c7bc2"/>
                    <path d="M18.9034 12.4104C19.1284 12.9147 18.9019 13.506 18.3976 13.731C17.8932 13.956 17.3019 13.7295 17.0769 13.2252L15.5688 9.84436C15.3438 9.33999 15.5702 8.74871 16.0746 8.52371C16.579 8.29871 17.1703 8.52519 17.3953 9.02957L18.9034 12.4104Z" fill="#1c7bc2"/>
                </svg>
            </span>
        </div>
    )
}

export function DownReportIcon({styles, strokeWidth}){
    return(
        <div className="relative">
            <span>
                <svg  fill="currentColor" viewBox="0 0 470.586 470.586" className={styles} strokeWidth={strokeWidth}>
                    <g>
                        <path d="M327.081,0H90.234c-15.9,0-28.854,12.959-28.854,28.859v412.863c0,15.924,12.953,28.863,28.854,28.863H380.35   c15.917,0,28.855-12.939,28.855-28.863V89.234L327.081,0z M333.891,43.184l35.996,39.121h-35.996V43.184z M384.972,441.723   c0,2.542-2.081,4.629-4.634,4.629H90.234c-2.551,0-4.62-2.087-4.62-4.629V28.859c0-2.548,2.069-4.613,4.62-4.613h219.41v70.181   c0,6.682,5.444,12.099,12.129,12.099h63.198V441.723z M140.851,126.337h219.662v12.105H140.851v62.547h219.662v12.105H140.851   v60.526h219.662v12.105H140.851v56.991h219.662v12.105H140.851v33.792h-12.105v-33.792h-22.177v-12.105h22.177v-56.991h-22.177   v-12.105h22.177v-60.526h-22.177v-12.105h22.177v-62.547h-22.177v-12.105h22.177V85.984h12.105V126.337z"/>
                    </g>
                </svg>
            </span>
            <span className="absolute -bottom-2 -right-2">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" strokeWidth="3">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M12 16L12 8" stroke="#c36ac6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                        <path d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13" stroke="#c36ac6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                        <path d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15" stroke="#c36ac6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                    </g>
                </svg>
            </span>
        </div>
    )
}

export function MessagesIcon({styles, strokeWidth}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30" className={styles} strokeWidth={strokeWidth}>
            <path d="M4.486 15h10.028c.27 0 .486.217.486.486 0 .27-.217.486-.486.486H4.486c-.27 0-.486-.216-.486-.486S4.217 15 4.486 15zm.014-4h21c.277 0 .5.223.5.5s-.223.5-.5.5h-21c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-4h21c.277 0 .5.223.5.5s-.223.5-.5.5h-21c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-3-6C.678 1 0 1.678 0 2.5v19c0 .822.678 1.5 1.5 1.5H5v4.5c0 .348.05.647.184.908.132.26.374.48.658.555.568.15 1.076-.164 1.515-.613 1.525-1.56 4.227-4.236 5.35-5.35H28.5c.822 0 1.5-.678 1.5-1.5v-19c0-.822-.678-1.5-1.5-1.5zm0 1h27c.286 0 .5.214.5.5v19c0 .286-.214.5-.5.5h-16c-.132 0-.258.052-.352.145-1.06 1.05-3.926 3.89-5.505 5.505-.552.552-.643.198-.643-.15v-5c0-.276-.224-.5-.5-.5h-4c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5z"/>
        </svg>
    )
}

export function FlowStepIcon({styles, strokeWidth}){
    return(
        <svg viewBox="0 0 32 32" className={styles} strokeWidth={strokeWidth}>
            <path fill="currentColor" d="M29,21h-3v-3.427c0-0.827-0.673-1.5-1.5-1.5h-0.839c-0.089-0.19-0.234-0.359-0.45-0.467l-5.87-2.935  c-0.268-0.134-0.553-0.21-0.842-0.259V11H20c1.657,0,3-1.343,3-3V7c0-1.657-1.343-3-3-3h-8c-1.657,0-3,1.343-3,3v1  c0,1.657,1.343,3,3,3h3.5v1.412c-0.289,0.049-0.573,0.125-0.842,0.259l-5.87,2.935c-0.216,0.108-0.36,0.277-0.45,0.467H7.5  c-0.827,0-1.5,0.673-1.5,1.5V21H3c-1.657,0-3,1.343-3,3v1c0,1.657,1.343,3,3,3h7c1.657,0,3-1.343,3-3v-1c0-1.657-1.343-3-3-3H7  v-3.427c0-0.276,0.225-0.5,0.5-0.5h0.924c0.09,0.128,0.207,0.243,0.365,0.322l5.87,2.935c0.422,0.211,0.882,0.317,1.342,0.317  c0.46,0,0.919-0.106,1.342-0.317l5.87-2.935c0.158-0.079,0.275-0.193,0.365-0.322H24.5c0.275,0,0.5,0.224,0.5,0.5V21h-3  c-1.657,0-3,1.343-3,3v1c0,1.657,1.343,3,3,3h7c1.657,0,3-1.343,3-3v-1C32,22.343,30.657,21,29,21z M10,8V7c0-1.103,0.897-2,2-2h8  c1.103,0,2,0.897,2,2v1c0,1.103-0.897,2-2,2h-8C10.897,10,10,9.103,10,8z M12,24v1c0,1.103-0.897,2-2,2H3c-1.103,0-2-0.897-2-2v-1  c0-1.103,0.897-2,2-2h7C11.103,22,12,22.897,12,24z M16.894,19.435c-0.276,0.138-0.586,0.211-0.894,0.211  c-0.309,0-0.618-0.073-0.894-0.211L9.236,16.5l5.87-2.935c0.276-0.138,0.586-0.211,0.894-0.211s0.618,0.073,0.894,0.211l5.87,2.935  L16.894,19.435z M31,25c0,1.103-0.897,2-2,2h-7c-1.103,0-2-0.897-2-2v-1c0-1.103,0.897-2,2-2h7c1.103,0,2,0.897,2,2V25z"/>
        </svg>
    )
}

export function AttachIcon({styles}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={styles} viewBox="0 0 24 24"><path fill="currentColor" d="M11.772 3.744a6 6 0 0 1 8.66 8.302l-.189.197l-8.8 8.798l-.036.03a3.723 3.723 0 0 1-5.49-4.973a.76.76 0 0 1 .085-.13l.054-.06l.087-.088l.141-.148l.003.003l7.436-7.454a.75.75 0 0 1 .976-.074l.084.073a.75.75 0 0 1 .074.976l-.072.084l-7.595 7.613A2.23 2.23 0 0 0 10.364 20l8.833-8.83a4.502 4.502 0 0 0-6.198-6.524l-.168.16l-.012.014l-9.537 9.536a.75.75 0 0 1-1.133-.977l.073-.084l9.549-9.55h.001Z"/></svg>
    )
  }