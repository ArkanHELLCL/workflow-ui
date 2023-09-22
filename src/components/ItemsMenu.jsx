/* eslint-disable react/prop-types */
export function ItemsMenu({items}){
    return(
        <ul className="list-none grid grid-cols-1 min-w-fit grid-col items-top content-center pb-2">
            {items.map(item => (                
                <li key={item.id} className="px-6 py-1 w-full block items-center justify-between relative content-center cursor-pointer hover:dark:bg-gray-500 hover:bg-gray-200  hover:border-l-4 dark:hover:border-gray-100 hover:border-gray-400 hover:pl-5">
                    <span className="dark:text-gray-100 text-gray-900 transition-all duration-500">{item.name}</span>                    
                </li>                
                )
            )} 
        </ul>                
    )
}



