import React from "react";
import { CamelizedObjectTypeNames } from "@site/surfy";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { CreateObjectTutorialPath } from "./CreateObjectTutorialPath";
import { CreateObjectTutorialProperties } from "./CreateObjectTutorialProperties";
import { CreateObjectTutorialOptionalProperties } from "./CreateObjectTutorialOptionalProperties";
import { CreateObjectTutorialValidation } from "./CreateObjectTutorialValidation";

interface CreateObjectTutorialProps {
  objectTypeName: CamelizedObjectTypeNames;
}

export function CreateObjectTutorial({
  objectTypeName,
}: CreateObjectTutorialProps) {
  return (
    <Box>
      <List>
        <CreateObjectTutorialPath objectTypeName={objectTypeName} />
        <CreateObjectTutorialProperties objectTypeName={objectTypeName} />
        <CreateObjectTutorialOptionalProperties />
        <CreateObjectTutorialValidation />
      </List>
    </Box>
  );
}
