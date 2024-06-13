/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { styled } from '@mui/material/styles';
import { useFilters } from "../../../hooks/useFilters.jsx";
import { useRequest } from '../../../hooks/useRequest.jsx';

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

export function MenuTree({ menu }) { 
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()

    const CustomTreeItem = styled(TreeItem)({   
        '& .MuiTreeItem-content .MuiTreeItem-label' :{
            fontSize:'13px',
            fontWeight: 'lighter',
            paddingLeft:'0px',
            lineHeight: '1',
            fontFamily: 'inherit'
        },
        '& .MuiTreeItem-content:hover' : {
            backgroundColor: filters.darkMode ? 'rgba(56, 56, 56, 255)!important' : ''
        },
        '& .MuiTreeItem-content' : {
            gap:'0px'
        },
        '& .MuiTreeItem-content.Mui-selected' : {
            backgroundColor: 'rgb(25 118 210 / 26%)!important',
            //color: 'rgba(56, 56, 56, 255)!important'
        }
    });

    //const handleItemExpansionToggle = (event, itemId, isExpanded) => {
    const handleItemExpansionToggle = (event, itemId) => {
        setFilters((prevState) => ({
            ...prevState,         
            itemIdSelected: itemId,            
            filterSearch: itemId === 'b' ? filters.filterSearch = 2 : filters.filterSearch = 1,
            stringSearch:'',
            filterSearchResult:false
        }))    
        setRequest(null)                
    };
    return (
        //menu.length > 0 &&
        <RichTreeView 
            items={menu} 
            defaultExpandedItems={getAllItemsWithChildrenItemIds(menu)}
            slots={{ item: CustomTreeItem }}
            className={'dark:border-[#353535] px-1 border-[#d4d4d4] border-b-2 !pb-2 !mb-1 !text-stone-950 dark:!text-stone-100'}
            onItemExpansionToggle={handleItemExpansionToggle}
            onItemFocus={handleItemExpansionToggle}
            selectedItems={filters.itemIdSelected}            
        />              
    );
}