/* eslint-disable react/prop-types */
export function HomeIcon() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

    )
}

export function BagIcon() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    )
}

export function BillIcon() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
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

export function PayIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5 text-gray-400">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>      
    )
}

export function Icon({ open, pos }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2.5">
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

export function TableIcon({styles, strokeWidth}){
    return(
        <svg viewBox="0 0 1024 1024" fill="currentColor" strokeWidth={strokeWidth} className={styles}>

            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

            <g id="SVGRepo_iconCarrier">

            <path d="M880.201143 36.717714a89.234286 89.234286 0 0 1 88.941714 88.868572v81.846857a89.234286 89.234286 0 0 1-88.941714 88.941714H143.798857A89.234286 89.234286 0 0 1 54.857143 207.433143V125.586286A89.234286 89.234286 0 0 1 143.798857 36.717714h736.402286z m28.891428 88.868572c0-7.826286-5.339429-14.848-14.701714-20.918857-6.144-3.876571-12.361143-6.509714-14.189714-7.314286H143.798857a28.233143 28.233143 0 0 0-28.745143 28.233143v84.114285c0 16.676571 9.654857 26.624 28.745143 26.624h736.402286c20.626286 0 28.891429-8.338286 28.891428-28.891428V125.586286z m-28.891428 565.467428a89.234286 89.234286 0 0 1 88.941714 88.941715v81.846857a89.234286 89.234286 0 0 1-88.941714 88.868571H143.798857A89.234286 89.234286 0 0 1 54.857143 861.842286v-81.846857a89.234286 89.234286 0 0 1 88.941714-88.941715h736.402286z m29.696 88.941715c0-22.820571-5.12-27.794286-29.696-27.794286H146.066286c-22.162286 0-32.402286 8.557714-32.402286 27.794286v81.846857c0 20.48 7.533714 28.013714 28.233143 28.013714h738.304c21.211429 0 29.696-7.972571 29.696-28.013714v-81.846857z m0-327.168c0-18.870857-9.069714-26.331429-29.696-26.331429H143.798857c-18.285714 0-28.818286 11.995429-28.818286 29.403429v80.018285c0 14.774857 10.898286 26.697143 28.818286 26.697143h736.402286c22.893714 0 29.622857-5.12 29.622857-23.698286V452.754286z m-29.696-88.941715a89.234286 89.234286 0 0 1 88.941714 88.941715v81.773714a89.234286 89.234286 0 0 1-88.941714 88.941714H143.798857A89.234286 89.234286 0 0 1 54.857143 534.601143V452.827429a89.234286 89.234286 0 0 1 88.941714-88.941715h736.402286zM726.308571 172.982857a35.84 35.84 0 1 1 71.68 0 35.84 35.84 0 0 1-71.68 0z m0 320.731429a35.84 35.84 0 1 1 71.68 0 35.84 35.84 0 0 1-71.68 0z m0 327.168a35.84 35.84 0 1 1 71.68 0 35.84 35.84 0 0 1-71.68 0z" fill="currentColor"/>

            </g>

        </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-red-600'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
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
        <svg viewBox="0 0 24 24">

            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

            <g id="SVGRepo_iconCarrier"> <path fill="currentColor" d="M5.75 3C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H9.99852C9.99129 20.8075 10.011 20.6088 10.0613 20.4075L10.2882 19.5H7.5V14.25C7.5 13.8358 7.83579 13.5 8.25 13.5H14.8531L16.2883 12.0648C16.1158 12.0225 15.9355 12 15.75 12H8.25C7.00736 12 6 13.0074 6 14.25V19.5H5.75C5.05964 19.5 4.5 18.9404 4.5 18.25V5.75C4.5 5.05964 5.05964 4.5 5.75 4.5H7V7.25C7 8.49264 8.00736 9.5 9.25 9.5H13.75C14.9926 9.5 16 8.49264 16 7.25V4.52344C16.3582 4.58269 16.6918 4.75246 16.9519 5.01256L18.9874 7.0481C19.3156 7.37629 19.5 7.8214 19.5 8.28553V10.007C19.5709 10.0024 19.642 10 19.713 10H19.7151C20.1521 10.0002 20.59 10.0874 21 10.2615V8.28553C21 7.42358 20.6576 6.59693 20.0481 5.98744L18.0126 3.9519C17.4031 3.34241 16.5764 3 15.7145 3H5.75ZM8.5 7.25V4.5H14.5V7.25C14.5 7.66421 14.1642 8 13.75 8H9.25C8.83579 8 8.5 7.66421 8.5 7.25Z" /> <path d="M19.7152 11H19.7131C19.1285 11.0003 18.5439 11.2234 18.0979 11.6695L12.1955 17.5719C11.8513 17.916 11.6072 18.3472 11.4892 18.8194L11.0315 20.6501C10.8325 21.4462 11.5536 22.1674 12.3497 21.9683L14.1804 21.5106C14.6526 21.3926 15.0838 21.1485 15.4279 20.8043L21.3303 14.9019C22.223 14.0093 22.223 12.5621 21.3303 11.6695C20.8843 11.2234 20.2998 11.0003 19.7152 11Z" fill="#1c7bc2"/> </g>

        </svg>
    )
}

export function OpenFolderIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
        </svg>
    )
}

export function PrinterIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />            
        </svg>
    )
}

export function SaveAllIcon(){
    return(
        <div className="relative">
            <span>
                <svg fill="currentColor" viewBox="0 0 512 512" className="h-4 w-4">
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
            <span className="absolute -bottom-[6px] -right-[4px]">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                    <path d="M7.76471 4H5C4.44771 4 4 4.44772 4 5V16.5376C4 16.8309 4.12882 17.1095 4.35235 17.2995L8.42581 20.7619C8.60661 20.9156 8.83617 21 9.07346 21H19C19.5523 21 20 20.5523 20 20V5C20 4.44772 19.5523 4 19 4H16.2353M7.76471 4V9C7.76471 9.55228 8.21242 10 8.76471 10H15.2353C15.7876 10 16.2353 9.55228 16.2353 9V4M7.76471 4H16.2353" stroke="#c36ac6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21V16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16V21" stroke="#c36ac6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
        </div>
    )
}

export function DeleteFileIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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