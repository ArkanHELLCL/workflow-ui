/* eslint-disable react/prop-types */
export default function ContentMenu({children, title, styles}){    
    return (        
        <section className={`flex content-start gap-0 shrink px-2 pb-5 pt-1 border border-l-0 border-t-0 border-b-0 border-[#d4d4d4] dark:border-[#484644] h-full ${styles}`}>
            {children}
            <div className="absolute -bottom-1 leading-tight text-xs w-full text-center text-nowrap truncate justify-center -left-[1px]  px-2">
                <span>{title}</span>
            </div>
        </section>
    )
}