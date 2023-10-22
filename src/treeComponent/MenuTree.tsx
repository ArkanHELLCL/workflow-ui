import React, { useRef, useState, useEffect } from 'react'
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from '../hooks/useRequest.jsx';
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { Container, Title, Frame, Content } from './styles'
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
>(({ children, name, style, defaultOpen = false ,id, setFilters, filters, setRequest}) => {
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
    //onChange: () => setClkOpen(clkOpen+1)
  })

  const handleOnClickIcon = () => {    
    setOpen((prev) => !prev)    
  }

  function handleClickItem(id: string) {
    setFilters((prevState: any) => ({
        ...prevState,         
        itemIdSelected: id,
        filterSearch: id === 'b' ? filters.filterSearch = 2 : filters.filterSearch = 1,
        loading: id !== filters.itemIdSelected ? true : false
    }))    
    setRequest(null)
  }
  let style2: React.CSSProperties | undefined;
  children && style?.paddingLeft === '0px' ? style2 = {paddingLeft: '0px'} : style2 = {paddingLeft: '0px'}
  children && style?.paddingLeft === '12px' ? style2 = {paddingLeft: '6px'} : style2 = {paddingLeft: '0px'}
  children && style?.paddingLeft === '24px' ? style2 = {paddingLeft: '21px'} : style2 = {paddingLeft: '6px'}
  
  children ? style = {...style, paddingLeft: '0px'} : style
  // @ts-ignore
  return (
    <Frame className={`dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100`}>
      <div 
        className={`${filters.itemIdSelected===id ? 'dark:bg-[#444444] bg-[#e1e1e1] font-extrabold' : 'bg-tranasparent hover:dark:bg-[#505050] hover:bg-[#e6f2fa]'} cursor-pointer`} 
        onClick={()=>handleClickItem(id)} >
      {
        children ? 
            <span onClick={(handleOnClickIcon)} style={style2}>
              <Icon open={isOpen} pos="relative inline top-[2px] z-10" />
            </span>
        : null
      }        
        <Title 
          style={style} 
          className={`${children ? 'cursor-pointer':'cursor-pointer'} ${filters.itemIdSelected===id ? 'font-bold' : ''} z-10 relative`} 
          
          key={id} 
          id={id}>
            {name}
        </Title>
      </div>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height          
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  )
})

function isChildren(setFilters: Function, filters: any, setRequest: Function, children: any, paddingLeft: any = 0) {
  paddingLeft = paddingLeft + 12
  const style = {'fontSize':'14px','fontWeight': 'lighter','paddingLeft':`${paddingLeft}px`}
  return children.map((item: { id: any ; nombre: string | JSX.Element ; grandson: any} , index: any) => {
    return(
    <Tree 
      name={item.nombre} 
      key={`${item.id}`} 
      id={`${item.id}`} 
      setFilters={setFilters} 
      filters={filters} 
      setRequest={setRequest}
      style={style}
      >
    {
        item.grandson?.length > 0 && item.grandson[0].id != undefined ?
          isChildren(setFilters, filters, setRequest, item.grandson, paddingLeft)
        : null
    }   
    </Tree>)
  }
  )
}

export function MenuTree({menu, title }) {
  const { filters, setFilters } = useFilters()
  const { setRequest } = useRequest()
  return (
    <Container className='dark:border-[#353535] px-1'>      
      {
        menu.length > 0 ? 
          <Tree 
            name={title} 
            defaultOpen={true} 
            key={title} id={title.toLowerCase().charAt(0)} 
            setFilters={setFilters} 
            filters={filters} 
            setRequest={setRequest} 
            style={{'fontSize':'16px','fontWeight': 'lighter','paddingLeft':'0px'}}>
            {              
              menu.map((item: { id: any ; nombre: string | JSX.Element ; children : any} , index: any) => 
                <Tree 
                  name={item.nombre} 
                  key={`${item.id}`} 
                  id={`${item.id}`} 
                  setFilters={setFilters} 
                  filters={filters} 
                  setRequest={setRequest}
                  style={{'fontSize':'12px','paddingLeft':'18px'}}
                  >
                {                      
                    item.children?.length > 0 && item.children[0].id != undefined ?
                      isChildren(setFilters, filters, setRequest, item.children, 12)
                    : null
                }  
                </Tree>
              )
            }
          </Tree> 
        : 
          <Tree name="No existe Menú" id="0" setFilters={setFilters} filters={filters} setRequest={setRequest}/>        
      }
      </Container>    
  )
}
