/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { useFilters } from "../../../hooks/useFilters.jsx";
import { useRequest } from '../../../hooks/useRequest.jsx';
import { useRecords } from '../../../hooks/useRecords.jsx';

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

export function MenuTree({ menu, frmRecord }) { 
    const { filters, setFilters } = useFilters()
    const { setRecord } = useRecords()
    const { setRequest } = useRequest()    

    //const handleItemExpansionToggle = (event, itemId, isExpanded) => {
    const handleItemExpansionToggle = (event, itemId) => {
        setFilters((prevState) => ({
            ...prevState,         
            itemIdSelected: itemId,            
            filterSearch: itemId === 'b' ? filters.filterSearch = 2 : filters.filterSearch = 1,
            stringSearch:'',
            filterSearchResult:false,
            flujo : itemId.slice(0,2)==='bn' ? 0 : filters.flujo
        }))    
        setRequest(null)
        setRecord(null)
        frmRecord?.unregister()        
    };
    return (        
        <RichTreeView 
            items={menu} 
            defaultExpandedItems={getAllItemsWithChildrenItemIds(menu)}            
            sx={{'& .MuiTreeItem-content .MuiTreeItem-label' :{
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
                    backgroundColor: 'rgb(25 118 210 / 26%)!important'                    
                }
            }}
            className={'dark:border-[#353535] px-1 border-[#d4d4d4] border-b-2 !pb-2 !mb-1 !text-stone-950 dark:!text-stone-100'}
            onItemExpansionToggle={handleItemExpansionToggle}
            onItemFocus={handleItemExpansionToggle}
            selectedItems={filters.itemIdSelected}            
        />              
    );
}