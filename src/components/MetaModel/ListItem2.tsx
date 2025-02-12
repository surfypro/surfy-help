import { ListItem, ListItemProps } from "@mui/material";

// exemple
function ListItem2(props: ListItemProps) {
    return <ListItem {...props} sx={{ m: 2 }}></ListItem>;
}