import React from 'react';
import { Properties } from './Properties';
import { CamelizedObjectTypeNames } from '@site/surfy';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MouseIcon from '@mui/icons-material/Mouse';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SaveIcon from '@mui/icons-material/Save';

interface CreateObjectTutorialProps {
  objectTypeName: CamelizedObjectTypeNames;
}

// Need to export as default to work with MDX
export default function CreateObjectTutorial({ objectTypeName }: CreateObjectTutorialProps) {
  return (
    <Paper elevation={2} sx={{ p: 3, my: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', mb: 2 }}>
        Étapes de création
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <MouseIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="Cliquer sur le menu contextuel"
            secondary="puis sur 'Créer un bâtiment'"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EditIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="Indiquez les propriétés obligatoires de l'objet :"
          />
        </ListItem>
        <ListItem sx={{ pl: 4 }}>
          <Box sx={{ width: '100%' }}>
            <Paper variant="outlined" sx={{ p: 2, bgcolor: 'background.default' }}>
              <Properties objectTypeName={objectTypeName} mandatory={true} />
            </Paper>
          </Box>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="Vous pouvez saisir d'autres propriétés optionnelles"
            secondary="Ces informations pourront être complétées ultérieurement"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SaveIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="Valider la création"
            secondary="Cliquez sur 'valider la création' pour terminer"
          />
        </ListItem>
      </List>
    </Paper>
  );
}