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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
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
    if(typeDoc==='pdf'){
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
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 36.00 35.00">
            <g strokeWidth="1.00" fill="none" strokeLinecap="butt">
            <path stroke="currentcolor" d="   M 10.57 29.15   Q 7.76 29.35 6.13 27.49   Q 4.95 26.14 4.95 23.13   Q 4.95 13.82 4.92 4.49   Q 4.92 3.88 5.53 3.88   L 7.41 3.88   Q 8.06 3.88 8.06 4.53   L 8.05 15.38   Q 8.05 15.95 8.63 15.95   L 23.55 15.86   Q 23.66 15.86 23.69 15.76   Q 23.73 15.62 23.78 15.48   A 0.32 0.32 0.0 0 0 23.47 15.06   L 9.47 15.03   Q 8.91 15.03 8.91 14.47   L 8.93 4.33   Q 8.94 3.85 9.42 3.85   L 25.46 3.91   Q 26.02 3.91 26.02 4.46   L 26.07 12.37   A 0.45 0.39 49.4 0 0 26.90 12.50   L 26.95 4.46   Q 26.95 3.88 27.54 3.88   L 29.48 3.89   A 0.60 0.59 -0.0 0 1 30.08 4.48   L 30.07 9.58   A 0.43 0.43 0.0 0 0 30.93 9.58   L 30.96 3.62   A 0.60 0.59 -90.0 0 0 30.37 3.02   L 4.74 3.02   A 0.65 0.65 0.0 0 0 4.09 3.66   Q 3.90 13.99 4.13 24.34   Q 4.18 26.95 5.45 28.26   Q 7.75 30.64 11.50 29.85   Q 11.99 29.75 11.98 29.25   L 11.90 22.49   Q 11.90 21.87 12.51 21.87   L 17.45 21.90   Q 17.71 21.90 17.75 21.64   Q 17.77 21.44 17.67 21.31   Q 17.56 21.16 17.25 21.14   Q 14.53 20.93 11.56 21.04   Q 11.04 21.06 11.05 21.57   L 11.12 28.55   Q 11.13 29.10 10.57 29.15"/>
            <path stroke="#457a98" d="   M 13.42 31.56   Q 12.94 32.91 14.32 32.54   C 16.52 31.95 18.55 31.35 20.29 29.61   Q 26.51 23.36 32.77 17.15   C 34.44 15.49 34.19 13.13 31.91 12.18   A 2.23 2.23 0.0 0 0 29.47 12.66   L 15.37 26.75   Q 14.97 27.15 14.78 27.69   L 13.42 31.56"/>
            <path stroke="currentcolor" d="   M 29.41 29.05   Q 26.52 29.11 23.64 29.05   Q 23.46 29.04 23.38 29.12   Q 23.28 29.21 23.27 29.35   Q 23.23 29.86 23.74 29.87   L 30.48 30.00   Q 30.96 30.01 30.96 29.52   L 30.93 22.71   A 0.42 0.42 0.0 0 0 30.40 22.30   Q 30.06 22.38 30.08 22.75   Q 30.20 25.61 30.00 28.49   Q 29.96 29.04 29.41 29.05"/>
            <path stroke="#2c92d7" d="   M 15.97 27.33   L 14.35 31.12   Q 14.07 31.76 14.76 31.62   Q 17.26 31.07 19.26 29.54"/>
            <path stroke="#457a98" d="   M 19.26 29.54   L 32.77 15.88   A 1.55 1.55 0.0 0 0 32.41 13.42   Q 30.75 12.53 29.40 13.76   Q 28.98 14.13 29.38 14.52   L 31.32 16.41   A 0.42 0.42 0.0 0 1 30.76 17.04   Q 29.72 16.19 28.89 15.13   Q 28.57 14.72 28.20 15.08   L 15.97 27.33"/>
            <path stroke="#194970" d="   M 19.26 29.54   Q 18.69 29.05 18.92 29.54"/>
            <path stroke="#457a98" d="   M 18.92 29.54   Q 19.06 27.67 17.63 27.12   Q 16.97 26.87 16.63 27.45"/>
            <path stroke="#194970" d="   M 16.63 27.45   Q 16.51 27.54 15.97 27.33"/>
            <path stroke="currentcolor" d="   M 18.92 29.54   L 16.63 27.45"/>
            </g>

            <path fill="currentcolor" d="   M 11.12 28.55   L 11.05 21.57   Q 11.04 21.06 11.56 21.04   Q 14.53 20.93 17.25 21.14   Q 17.56 21.16 17.67 21.31   Q 17.77 21.44 17.75 21.64   Q 17.71 21.90 17.45 21.90   L 12.51 21.87   Q 11.90 21.87 11.90 22.49   L 11.98 29.25   Q 11.99 29.75 11.50 29.85   Q 7.75 30.64 5.45 28.26   Q 4.18 26.95 4.13 24.34   Q 3.90 13.99 4.09 3.66   A 0.65 0.65 0.0 0 1 4.74 3.02   L 30.37 3.02   A 0.60 0.59 90.0 0 1 30.96 3.62   L 30.93 9.58   A 0.43 0.43 0.0 0 1 30.07 9.58   L 30.08 4.48   A 0.60 0.59 0.0 0 0 29.48 3.89   L 27.54 3.88   Q 26.95 3.88 26.95 4.46   L 26.90 12.50   A 0.45 0.39 49.4 0 1 26.07 12.37   L 26.02 4.46   Q 26.02 3.91 25.46 3.91   L 9.42 3.85   Q 8.94 3.85 8.93 4.33   L 8.91 14.47   Q 8.91 15.03 9.47 15.03   L 23.47 15.06   A 0.32 0.32 0.0 0 1 23.78 15.48   Q 23.73 15.62 23.69 15.76   Q 23.66 15.86 23.55 15.86   L 8.63 15.95   Q 8.05 15.95 8.05 15.38   L 8.06 4.53   Q 8.06 3.88 7.41 3.88   L 5.53 3.88   Q 4.92 3.88 4.92 4.49   Q 4.95 13.82 4.95 23.13   Q 4.95 26.14 6.13 27.49   Q 7.76 29.35 10.57 29.15   Q 11.13 29.10 11.12 28.55   Z"/>
            <path fill="#57c3ff" d="   M 13.42 31.56   L 14.78 27.69   Q 14.97 27.15 15.37 26.75   L 29.47 12.66   A 2.23 2.23 0.0 0 1 31.91 12.18   C 34.19 13.13 34.44 15.49 32.77 17.15   Q 26.51 23.36 20.29 29.61   C 18.55 31.35 16.52 31.95 14.32 32.54   Q 12.94 32.91 13.42 31.56   Z   M 15.97 27.33   L 14.35 31.12   Q 14.07 31.76 14.76 31.62   Q 17.26 31.07 19.26 29.54   L 32.77 15.88   A 1.55 1.55 0.0 0 0 32.41 13.42   Q 30.75 12.53 29.40 13.76   Q 28.98 14.13 29.38 14.52   L 31.32 16.41   A 0.42 0.42 0.0 0 1 30.76 17.04   Q 29.72 16.19 28.89 15.13   Q 28.57 14.72 28.20 15.08   L 15.97 27.33   Z"/>

            <path fill="currentcolor" d="   M 30.00 28.49   Q 30.20 25.61 30.08 22.75   Q 30.06 22.38 30.40 22.30   A 0.42 0.42 0.0 0 1 30.93 22.71   L 30.96 29.52   Q 30.96 30.01 30.48 30.00   L 23.74 29.87   Q 23.23 29.86 23.27 29.35   Q 23.28 29.21 23.38 29.12   Q 23.46 29.04 23.64 29.05   Q 26.52 29.11 29.41 29.05   Q 29.96 29.04 30.00 28.49   Z"/>
            <path fill="#57c3ff" d="   M 18.92 29.54   L 16.63 27.45   Q 16.97 26.87 17.63 27.12   Q 19.06 27.67 18.92 29.54   Z"/>
            <path fill="#0061af" d="   M 15.97 27.33   Q 16.51 27.54 16.63 27.45   L 18.92 29.54   Q 18.69 29.05 19.26 29.54   Q 17.26 31.07 14.76 31.62   Q 14.07 31.76 14.35 31.12   L 15.97 27.33   Z"/>
        </svg>
    )
}

export function OpenFolderIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 33.00 29.00">
            <g strokeWidth="1.00" fill="none" strokeLinecap="butt">
            <path stroke="currentcolor" d="   M 28.96 11.49   L 28.92 7.60   A 0.60 0.60 0.0 0 0 28.32 7.01   Q 22.91 7.06 17.49 6.98   C 16.40 6.97 15.79 6.33 15.20 5.50   A 0.96 0.92 -16.1 0 0 14.44 5.10   L 3.78 4.99   Q 3.04 4.98 3.04 5.72   L 3.13 24.26   Q 3.13 24.89 3.76 24.90   L 25.44 24.92   Q 26.15 24.92 26.47 24.28   L 32.25 12.68   Q 32.51 12.15 31.93 12.13   L 29.49 12.03   Q 28.97 12.01 28.96 11.49"/>
            <path stroke="currentcolor" d="   M 9.34 12.23   A 0.35 0.35 0.0 0 1 9.66 12.03   L 27.71 12.03   A 0.35 0.35 0.0 0 0 28.06 11.69   L 28.12 8.30   A 0.35 0.35 0.0 0 0 27.78 7.95   L 16.03 7.88   A 0.35 0.35 0.0 0 1 15.78 7.77   L 14.19 6.05   A 0.35 0.35 0.0 0 0 13.94 5.94   L 4.27 5.85   A 0.35 0.35 0.0 0 0 3.92 6.20   L 3.96 21.82   A 0.35 0.35 0.0 0 0 4.62 21.97   L 9.34 12.23"/>
            <path stroke="currentcolor" d="   M 25.33 24.04   A 0.34 0.34 0.0 0 0 25.63 23.85   L 30.79 13.44   A 0.34 0.34 0.0 0 0 30.48 12.95   L 10.35 12.92   A 0.34 0.34 0.0 0 0 10.05 13.11   L 4.86 23.54   A 0.34 0.34 0.0 0 0 5.17 24.03   L 25.33 24.04"/>
            </g>

            <path fill="#f9f8f8" d="   M 29.49 12.03   L 31.93 12.13   Q 32.51 12.15 32.25 12.68   L 26.47 24.28   Q 26.15 24.92 25.44 24.92   L 3.76 24.90   Q 3.13 24.89 3.13 24.26   L 3.04 5.72   Q 3.04 4.98 3.78 4.99   L 14.44 5.10   A 0.96 0.92 -16.1 0 1 15.20 5.50   C 15.79 6.33 16.40 6.97 17.49 6.98   Q 22.91 7.06 28.32 7.01   A 0.60 0.60 0.0 0 1 28.92 7.60   L 28.96 11.49   Q 28.97 12.01 29.49 12.03   Z   M 9.34 12.23   A 0.35 0.35 0.0 0 1 9.66 12.03   L 27.71 12.03   A 0.35 0.35 0.0 0 0 28.06 11.69   L 28.12 8.30   A 0.35 0.35 0.0 0 0 27.78 7.95   L 16.03 7.88   A 0.35 0.35 0.0 0 1 15.78 7.77   L 14.19 6.05   A 0.35 0.35 0.0 0 0 13.94 5.94   L 4.27 5.85   A 0.35 0.35 0.0 0 0 3.92 6.20   L 3.96 21.82   A 0.35 0.35 0.0 0 0 4.62 21.97   L 9.34 12.23   Z   M 25.33 24.04   A 0.34 0.34 0.0 0 0 25.63 23.85   L 30.79 13.44   A 0.34 0.34 0.0 0 0 30.48 12.95   L 10.35 12.92   A 0.34 0.34 0.0 0 0 10.05 13.11   L 4.86 23.54   A 0.34 0.34 0.0 0 0 5.17 24.03   L 25.33 24.04   Z"/>
        </svg>
    )
}

export function PrinterIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 39.00 38.00">
            <g strokeWidth="1.00" fill="none" strokeLinecap="butt">
            <path stroke="currentcolor" d="   M 11.49 26.98   A 0.56 0.56 0.0 0 1 12.04 27.53   L 12.06 31.35   A 0.56 0.56 0.0 0 0 12.62 31.91   L 27.37 31.93   A 0.56 0.56 0.0 0 0 27.93 31.37   L 27.95 27.47   A 0.56 0.56 0.0 0 1 28.52 26.91   L 33.38 26.97   A 0.56 0.56 0.0 0 0 33.95 26.41   L 33.94 14.58   A 0.56 0.56 0.0 0 0 33.38 14.02   L 28.52 14.05   A 0.56 0.56 0.0 0 1 27.96 13.49   L 27.95 4.58   A 0.56 0.56 0.0 0 0 27.39 4.02   L 12.59 4.03   A 0.56 0.56 0.0 0 0 12.03 4.59   L 12.06 13.49   A 0.56 0.56 0.0 0 1 11.50 14.05   L 6.58 14.09   A 0.56 0.56 0.0 0 0 6.02 14.65   L 6.05 26.39   A 0.56 0.56 0.0 0 0 6.61 26.95   L 11.49 26.98"/>
            <path stroke="currentcolor" d="   M 27.12 5.34   A 0.40 0.40 0.0 0 0 26.72 4.94   L 13.32 4.94   A 0.40 0.40 0.0 0 0 12.92 5.34   L 12.92 13.64   A 0.40 0.40 0.0 0 0 13.32 14.04   L 26.72 14.04   A 0.40 0.40 0.0 0 0 27.12 13.64   L 27.12 5.34"/>
            <path stroke="currentcolor" d="   M 27.39 21.03   A 0.56 0.56 0.0 0 1 27.95 21.59   L 27.95 25.49   A 0.56 0.56 0.0 0 0 28.50 26.05   L 32.54 26.09   A 0.56 0.56 0.0 0 0 33.11 25.53   L 33.12 15.50   A 0.56 0.56 0.0 0 0 32.56 14.94   L 7.43 14.92   A 0.56 0.56 0.0 0 0 6.87 15.48   L 6.93 25.56   A 0.56 0.56 0.0 0 0 7.49 26.11   L 11.55 26.06   A 0.56 0.56 0.0 0 0 12.10 25.49   L 12.04 21.60   A 0.56 0.56 0.0 0 1 12.60 21.03   L 27.39 21.03"/>
            <path stroke="currentcolor" d="   M 27.1173 22.3124   A 0.42 0.42 0.0 0 0 26.6980 21.8917   L 13.3180 21.8683   A 0.42 0.42 0.0 0 0 12.8973 22.2876   L 12.8827 30.6276   A 0.42 0.42 0.0 0 0 13.3020 31.0483   L 26.6820 31.0717   A 0.42 0.42 0.0 0 0 27.1027 30.6524   L 27.1173 22.3124"/>
            <path stroke="currentcolor" d="   M 10.04 16.99   A 1.03 1.03 0.0 0 0 9.01 15.96   A 1.03 1.03 0.0 0 0 7.98 16.99   A 1.03 1.03 0.0 0 0 9.01 18.02   A 1.03 1.03 0.0 0 0 10.04 16.99"/>
            </g>

            <path fill="#f9f8f9" d="   M 11.49 26.98   L 6.61 26.95   A 0.56 0.56 0.0 0 1 6.05 26.39   L 6.02 14.65   A 0.56 0.56 0.0 0 1 6.58 14.09   L 11.50 14.05   A 0.56 0.56 0.0 0 0 12.06 13.49   L 12.03 4.59   A 0.56 0.56 0.0 0 1 12.59 4.03   L 27.39 4.02   A 0.56 0.56 0.0 0 1 27.95 4.58   L 27.96 13.49   A 0.56 0.56 0.0 0 0 28.52 14.05   L 33.38 14.02   A 0.56 0.56 0.0 0 1 33.94 14.58   L 33.95 26.41   A 0.56 0.56 0.0 0 1 33.38 26.97   L 28.52 26.91   A 0.56 0.56 0.0 0 0 27.95 27.47   L 27.93 31.37   A 0.56 0.56 0.0 0 1 27.37 31.93   L 12.62 31.91   A 0.56 0.56 0.0 0 1 12.06 31.35   L 12.04 27.53   A 0.56 0.56 0.0 0 0 11.49 26.98   Z   M 27.12 5.34   A 0.40 0.40 0.0 0 0 26.72 4.94   L 13.32 4.94   A 0.40 0.40 0.0 0 0 12.92 5.34   L 12.92 13.64   A 0.40 0.40 0.0 0 0 13.32 14.04   L 26.72 14.04   A 0.40 0.40 0.0 0 0 27.12 13.64   L 27.12 5.34   Z   M 27.39 21.03   A 0.56 0.56 0.0 0 1 27.95 21.59   L 27.95 25.49   A 0.56 0.56 0.0 0 0 28.50 26.05   L 32.54 26.09   A 0.56 0.56 0.0 0 0 33.11 25.53   L 33.12 15.50   A 0.56 0.56 0.0 0 0 32.56 14.94   L 7.43 14.92   A 0.56 0.56 0.0 0 0 6.87 15.48   L 6.93 25.56   A 0.56 0.56 0.0 0 0 7.49 26.11   L 11.55 26.06   A 0.56 0.56 0.0 0 0 12.10 25.49   L 12.04 21.60   A 0.56 0.56 0.0 0 1 12.60 21.03   L 27.39 21.03   Z   M 27.1173 22.3124   A 0.42 0.42 0.0 0 0 26.6980 21.8917   L 13.3180 21.8683   A 0.42 0.42 0.0 0 0 12.8973 22.2876   L 12.8827 30.6276   A 0.42 0.42 0.0 0 0 13.3020 31.0483   L 26.6820 31.0717   A 0.42 0.42 0.0 0 0 27.1027 30.6524   L 27.1173 22.3124   Z"/>


            <circle fill="#f9f8f9" cx="9.01" cy="16.99" r="1.03"/>

        </svg>
    )
}

export function SaveAllIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 40.00 41.00">
            <g strokeWidth="1.00" fill="none" strokeLinecap="butt">
            <path stroke="currentColor" d="   M 7.97 8.14   A 0.19 0.19 0.0 0 1 8.16 7.95   L 20.73 7.92   A 0.19 0.19 0.0 0 0 20.92 7.72   L 20.88 7.21   A 0.19 0.19 0.0 0 0 20.69 7.03   L 7.20 6.99   A 0.19 0.19 0.0 0 0 7.01 7.18   L 7.13 32.67   A 0.19 0.19 0.0 0 0 7.24 32.84   L 7.62 33.02   A 0.19 0.19 0.0 0 0 7.89 32.85   L 7.97 8.14"/>
            <path stroke="currentColor" d="   M 21.07 11.66   L 21.03 17.26   A 0.73 0.72 0.4 0 0 21.76 17.99   L 27.38 17.94   A 0.59 0.58 86.2 0 1 27.97 18.46   L 28.16 20.26   A 0.36 0.36 0.0 0 0 28.88 20.28   C 29.11 18.75 29.03 17.11 27.82 15.91   Q 25.22 13.33 22.75 10.78   A 2.55 2.53 67.7 0 0 20.93 10.01   L 11.00 10.02   A 0.98 0.98 0.0 0 0 10.02 11.00   L 10.04 34.01   A 0.97 0.97 0.0 0 0 11.01 34.98   L 17.50 34.99   Q 17.73 34.99 17.77 34.77   Q 17.80 34.64 17.83 34.50   A 0.39 0.38 -83.6 0 0 17.45 34.02   L 11.50 34.10   A 0.60 0.60 0.0 0 1 10.89 33.50   L 10.89 11.66   A 0.70 0.70 0.0 0 1 11.59 10.96   L 20.42 11.00   Q 21.08 11.00 21.07 11.66"/>
            <path stroke="currentColor" d="   M 33.15 22.05   L 19.74 22.00   Q 19.08 22.00 19.05 22.66   Q 18.85 27.95 19.14 33.26   Q 19.34 37.05 23.27 37.06   Q 28.29 37.08 33.00 36.95   A 0.99 0.99 0.0 0 0 33.96 35.96   L 33.99 22.90   A 0.85 0.84 -90.0 0 0 33.15 22.05"/>
            <path stroke="#000000" d="   M 26.98 17.06   A 0.31 0.31 0.0 0 0 27.19 16.53   L 22.50 11.84   A 0.31 0.31 0.0 0 0 21.97 12.05   L 21.94 16.77   A 0.31 0.31 0.0 0 0 22.26 17.09   L 26.98 17.06"/>
            <path stroke="#8d5589" d="   M 30.24 27.93   L 22.77 28.01   A 0.74 0.74 0.0 0 1 22.02 27.27   L 22.01 23.35   A 0.42 0.42 0.0 0 0 21.61 22.93   L 20.63 22.88   Q 19.96 22.85 19.96 23.52   Q 19.94 28.08 20.02 32.62   C 20.05 34.44 20.77 35.64 22.57 35.97   Q 23.05 36.05 23.04 35.56   L 22.98 32.81   A 0.71 0.71 0.0 0 1 23.69 32.08   L 29.26 32.06   Q 29.96 32.06 29.97 32.76   L 29.98 35.41   Q 29.99 36.08 30.66 36.12   L 32.32 36.20   A 0.66 0.65 -88.3 0 0 33.00 35.55   L 33.12 23.66   Q 33.13 22.94 32.41 22.96   L 31.63 22.98   Q 31.00 22.99 31.00 23.62   L 30.98 27.18   A 0.75 0.75 0.0 0 1 30.24 27.93"/>
            <path stroke="#8d5589" d="   M 30.1275 23.6037   A 0.63 0.63 0.0 0 0 29.4964 22.9748   L 23.5764 22.9852   A 0.63 0.63 0.0 0 0 22.9475 23.6163   L 22.9525 26.4563   A 0.63 0.63 0.0 0 0 23.5836 27.0852   L 29.5036 27.0748   A 0.63 0.63 0.0 0 0 30.1325 26.4437   L 30.1275 23.6037"/>
            <path stroke="#8d5589" d="   M 29.1878 33.9005   A 0.88 0.88 0.0 0 0 28.3048 33.0236   L 24.6448 33.0364   A 0.88 0.88 0.0 0 0 23.7679 33.9195   L 23.7722 35.1595   A 0.88 0.88 0.0 0 0 24.6552 36.0364   L 28.3152 36.0236   A 0.88 0.88 0.0 0 0 29.1921 35.1405   L 29.1878 33.9005"/>
            </g>

            <path fill="#f5f2f1" d="   M 7.97 8.14   L 7.89 32.85   A 0.19 0.19 0.0 0 1 7.62 33.02   L 7.24 32.84   A 0.19 0.19 0.0 0 1 7.13 32.67   L 7.01 7.18   A 0.19 0.19 0.0 0 1 7.20 6.99   L 20.69 7.03   A 0.19 0.19 0.0 0 1 20.88 7.21   L 20.92 7.72   A 0.19 0.19 0.0 0 1 20.73 7.92   L 8.16 7.95   A 0.19 0.19 0.0 0 0 7.97 8.14   Z"/>
            <path fill="#f5f2f1" d="   M 20.42 11.00   L 11.59 10.96   A 0.70 0.70 0.0 0 0 10.89 11.66   L 10.89 33.50   A 0.60 0.60 0.0 0 0 11.50 34.10   L 17.45 34.02   A 0.39 0.38 -83.6 0 1 17.83 34.50   Q 17.80 34.64 17.77 34.77   Q 17.73 34.99 17.50 34.99   L 11.01 34.98   A 0.97 0.97 0.0 0 1 10.04 34.01   L 10.02 11.00   A 0.98 0.98 0.0 0 1 11.00 10.02   L 20.93 10.01   A 2.55 2.53 67.7 0 1 22.75 10.78   Q 25.22 13.33 27.82 15.91   C 29.03 17.11 29.11 18.75 28.88 20.28   A 0.36 0.36 0.0 0 1 28.16 20.26   L 27.97 18.46   A 0.59 0.58 86.2 0 0 27.38 17.94   L 21.76 17.99   A 0.73 0.72 0.4 0 1 21.03 17.26   L 21.07 11.66   Q 21.08 11.00 20.42 11.00   Z   M 26.98 17.06   A 0.31 0.31 0.0 0 0 27.19 16.53   L 22.50 11.84   A 0.31 0.31 0.0 0 0 21.97 12.05   L 21.94 16.77   A 0.31 0.31 0.0 0 0 22.26 17.09   L 26.98 17.06   Z"/>

            <path fill="#e878e2" d="   M 33.15 22.05   A 0.85 0.84 -90.0 0 1 33.99 22.90   L 33.96 35.96   A 0.99 0.99 0.0 0 1 33.00 36.95   Q 28.29 37.08 23.27 37.06   Q 19.34 37.05 19.14 33.26   Q 18.85 27.95 19.05 22.66   Q 19.08 22.00 19.74 22.00   L 33.15 22.05   Z   M 30.24 27.93   L 22.77 28.01   A 0.74 0.74 0.0 0 1 22.02 27.27   L 22.01 23.35   A 0.42 0.42 0.0 0 0 21.61 22.93   L 20.63 22.88   Q 19.96 22.85 19.96 23.52   Q 19.94 28.08 20.02 32.62   C 20.05 34.44 20.77 35.64 22.57 35.97   Q 23.05 36.05 23.04 35.56   L 22.98 32.81   A 0.71 0.71 0.0 0 1 23.69 32.08   L 29.26 32.06   Q 29.96 32.06 29.97 32.76   L 29.98 35.41   Q 29.99 36.08 30.66 36.12   L 32.32 36.20   A 0.66 0.65 -88.3 0 0 33.00 35.55   L 33.12 23.66   Q 33.13 22.94 32.41 22.96   L 31.63 22.98   Q 31.00 22.99 31.00 23.62   L 30.98 27.18   A 0.75 0.75 0.0 0 1 30.24 27.93   Z   M 30.1275 23.6037   A 0.63 0.63 0.0 0 0 29.4964 22.9748   L 23.5764 22.9852   A 0.63 0.63 0.0 0 0 22.9475 23.6163   L 22.9525 26.4563   A 0.63 0.63 0.0 0 0 23.5836 27.0852   L 29.5036 27.0748   A 0.63 0.63 0.0 0 0 30.1325 26.4437   L 30.1275 23.6037   Z   M 29.1878 33.9005   A 0.88 0.88 0.0 0 0 28.3048 33.0236   L 24.6448 33.0364   A 0.88 0.88 0.0 0 0 23.7679 33.9195   L 23.7722 35.1595   A 0.88 0.88 0.0 0 0 24.6552 36.0364   L 28.3152 36.0236   A 0.88 0.88 0.0 0 0 29.1921 35.1405   L 29.1878 33.9005   Z"/>
        </svg>
    )
}

export function DeleteFileIcon({strokeWidth, styles}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={styles + ' text-red-600'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}