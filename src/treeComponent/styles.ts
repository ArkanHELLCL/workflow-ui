import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled('div')`
  width: 100%;
  height: auto;
  margin: 0;
  padding-bottom: 15px;
  overflow: hidden;
  font-family: Proxima Nova, system-ui, sans-serif;
  font-size: 14px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;

  justify-content: left;
  valign-items: flex-start; 
  border-bottom: 1px solid #d4d4d4; 
`

export const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: rgb(120, 113, 108, 1);
  fill: #24292e;
`

export const Title = styled('span')`
  vertical-align: middle;
`

export const Content = styled(animated.div)`
  will-change: transform, opacity, height, width;
  margin-left: 6px;
  padding: 0px 0px 0px 5px;
  border-left: 0px dashed;
  overflow: hidden;  
`

export const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}
