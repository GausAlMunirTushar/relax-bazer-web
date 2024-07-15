import React from "react";
import ActionMenu from "./ActionMenu";

const ActionMenuList = () => {
  return (
    <div>
      <div className="container mx-auto flex overflow-auto gap-5">
        <ActionMenu menuTitle="Upload your list" />
        <ActionMenu menuTitle="WhatsApp" />
        <ActionMenu menuTitle="Order to Call" />
        <ActionMenu menuTitle="Customer Support" />
        <ActionMenu menuTitle="Family" />
        <ActionMenu menuTitle="Office" />
      </div>
    </div>
  );
};

export default ActionMenuList;
