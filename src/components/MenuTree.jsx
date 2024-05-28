/* eslint-disable react/prop-types */
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { styled } from '@mui/material/styles';
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from '../hooks/useRequest.jsx';
import { useEffect, useRef } from 'react';

const getAllItemsWithChildrenItemIds = (menu) => {
    const itemIds = [];
    const registerItemId = (item) => {
      if (item.children?.length) {
        itemIds.push(item.id);
        //item.children.forEach(registerItemId);            //Para mas de un nivel
      }
    };
  
    menu.forEach(registerItemId);
  
    return itemIds;
};

const CustomTreeItem = styled(TreeItem)({   
    '& .MuiTreeItem-content .MuiTreeItem-label' :{
        fontSize:'14px',
        fontWeight: 'lighter',
        paddingLeft:'0px',
        lineHeight: '1',
        fontFamily: 'inherit'
    },
    '& .MuiTreeItem-content:hover' : {
        //backgroundColor: 'rgba(56, 56, 56, 255)'
    },
    '& .MuiTreeItem-content' : {
        gap:'0px'
    }
});

export function MenuTree({ menu, Link}) { 
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()

    const handleItemExpansionToggle = (event, itemId, isExpanded) => {
        setFilters((prevState) => ({
            ...prevState,         
            itemIdSelected: itemId,
            filterSearch: itemId === 'b' ? filters.filterSearch = 2 : filters.filterSearch = 1,
            loading: itemId !== filters.itemIdSelected ? true : false
        }))    
        setRequest(null)    
    };
    const defaultValue=useRef(filters.itemIdSelected)
    
    return (
            <RichTreeView 
                items={menu} 
                defaultExpandedItems={getAllItemsWithChildrenItemIds(menu)}
                slots={{ item: CustomTreeItem }}
                className={'dark:border-[#353535] px-1 border-[#d4d4d4] border-b-2 !pb-2 !mb-3'}
                onItemExpansionToggle={handleItemExpansionToggle}
                onItemFocus={handleItemExpansionToggle}
                defaultSelectedItems={defaultValue.current}
              />
    );
}