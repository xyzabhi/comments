import faker from "@faker-js/faker";
import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Abhinav"
          timeAgo="Today at 4 AM"
          imgUrl={faker.image.avatar}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Chris"
          timeAgo="Yesterday at 4 AM"
          imgUrl={faker.image.avatar}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kumar"
          timeAgo="Yesterday at 12AM"
          imgUrl={faker.image.avatar}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
