import { FC, HTMLAttributes } from "react";

export interface TagsPageProps extends HTMLAttributes<HTMLDivElement> {}

const TagsPage: FC<TagsPageProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <h1>Tags</h1>
    </div>
  );
};

export default TagsPage;
