import React from "react";
import { DetailsRow, SelectionMode } from "@fluentui/react/lib/DetailsList";

type Props = {
  itemDepth?: number;
  item?: string;
  itemIndex?: number;
};

const CourseListItem: React.FC<Props> = ({ item, itemDepth, itemIndex }) => {
  if (itemIndex === undefined) {
    return null;
  }
  return (
    <DetailsRow
      groupNestingDepth={itemDepth}
      item={item}
      itemIndex={itemIndex}
      selectionMode={SelectionMode.single}
      columns={[{ name: "Text", key: "name", minWidth: 300, fieldName: 'name' }]}
    />
  );
};

export default CourseListItem;
