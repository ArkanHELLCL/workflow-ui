/* eslint-disable react/prop-types */
export default function ContentMenu({children, title, styles}){    
    return (        
        <section className={`flex flex-nowrap gap-0 align-top px-2  border border-l-0 border-t-0 border-b-0 border-[#d4d4d4] dark:border-[#484644] h-full ${styles ? styles : ''}`}>
            {children}
            <div className="absolute -bottom-1 leading-tight text-xs w-full text-center text-nowrap truncate justify-center -left-[1px] px-2">
                <span>{title}</span>
            </div>
        </section>
    )
}