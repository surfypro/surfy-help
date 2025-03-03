import React from "react";
import { CamelizedObjectTypeNames } from "@site/surfy";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { CreateObjectTutorialPathListItem } from "./CreateObjectTutorialPathListItem";
import { CreateObjectTutorialOptionalPropertiesListItem } from "./CreateObjectTutorialOptionalPropertiesListItem";
import { CreateObjectTutorialValidationListItem } from "./CreateObjectTutorialValidationListItem";
import { CreateObjectTutorialPropertiesListItem } from "./CreateObjectTutorialPropertiesListItem";

interface CreateObjectTutorialProps {
  objectTypeName: CamelizedObjectTypeNames;
}

export function CreateObjectTutorial({
  objectTypeName,
}: CreateObjectTutorialProps) {
  return (
    <Box>
      <List>
        <CreateObjectTutorialPathListItem objectTypeName={objectTypeName} />
        <CreateObjectTutorialPropertiesListItem objectTypeName={objectTypeName} />
        <CreateObjectTutorialOptionalPropertiesListItem />
        <CreateObjectTutorialValidationListItem />
      </List>
    </Box>
  );
}
