import { FC, HTMLAttributes } from "react";

export interface indexProps extends HTMLAttributes<HTMLDivElement> {}

const TagsPage: FC<indexProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <h1>Tags</h1>
    </div>
  );
};

export default TagsPage;
