import React from "react";

function ApprovalCard(props) {
    console.log(props.children)
  return (
    <div className="ui card">
      <div className="content center">{props.children}</div>
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  );
}

export default ApprovalCard;
