import React, { useRef, useState, useEffect } from 'react'
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from '../hooks/useRequest.jsx';
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { Container, Title, Frame, Content, toggle } from './styles'
import { Icon } from '../components/icons.jsx'

function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean
    name: string | JSX.Element
    id: string
    setFilters: Function,
    filters: any,
    setRequest: Function
  }
>(({ children, name, style, defaultOpen = false ,id, setFilters, filters, setRequest }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [ref, { width: viewWidth, height: viewHeight }] = useMeasure()
  const { width, height, opacity, y } = useSpring({
    from: { width: viewWidth, height: 0, opacity: 0, y: 0 },
    to: {
      width: isOpen ? viewWidth : 0,
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20
    },
  })

  const handleOnClickIcon = () => {    
    setOpen((prev) => !prev)   
  }

  function handleClickItem(id: string) {
    setFilters(prevState => ({
        ...prevState,         
        itemIdSelected: id,
        filterSearch: id === 'Bandejas' ? filters.filterSearch = 2 : filters.filterSearch = 1
    }))    
    setRequest(null)
  }

  // @ts-ignore
  //const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
  return (
    <Frame className={`dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100`}>{
      children ? 
          <span onClick={(handleOnClickIcon)}><Icon open={isOpen} pos="relative inline top-[2px]" /></span>
        : null
      }        
        <Title style={style} className={`${children ? 'cursor-pointer':'cursor-pointer'} ${filters.itemIdSelected===id ? 'text-sky-600 hover:!text-sky-600 font-semibold' : 'hover:!text-sky-400'}`} onClick={()=>handleClickItem(id)} key={id} id={id}>{name}</Title>      
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
          //width: isOpen ? 'min-content' : width          
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  )
})

function isChildren(setFilters: Function, filters: any, setRequest: Function, children: any) {  
  return children.map((item: { id: any ; name: string | JSX.Element ; children: any} , index: any) => 
          <Tree name={item.name} key={`${item.id}`} id={`${item.id}`} setFilters={setFilters} filters={filters} setRequest={setRequest}>
          {
                item.children?.length > 0 ? 
                  isChildren(setFilters, filters, setRequest, item.children)
                : null
            }   
          </Tree>
  )
}

export function MenuTree({menu, title }) {
  const { filters, setFilters } = useFilters()
  const { setRequest } = useRequest()
  return (
    <Container className='dark:border-[#353535]'>      
      {
        menu.length > 0 ? 
          <Tree name={title} defaultOpen={true} key={title} id={title} setFilters={setFilters} filters={filters} setRequest={setRequest}>
            {              
              menu.map((item: { id: any ; name: string | JSX.Element ; children : any} , index: any) => {
                return (
                  <Tree name={item.name} key={`${item.id}`} id={`${item.id}`} setFilters={setFilters} filters={filters} setRequest={setRequest}>
                  {
                      item.children?.length > 0 ?
                        isChildren(setFilters, filters, setRequest, item.children)
                      : null
                  }                  
                  </Tree>
                )
              })
            }
          </Tree> 
        : 
          <Tree name="No existe Menú" id="0" setFilters={setFilters} filters={filters} setRequest={setRequest}/>        
      }
      </Container>    
  )
}
