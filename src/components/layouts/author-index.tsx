import { LargeAuthorListItem } from "./authors/LargeListItems";
import { SmallAuthorListItem } from "./authors/SmallListItems";
import { RegularList } from "./lists/Regular";
import { authors } from "./data/authors";
import { books } from "./data/books";
import { SmallBookListItem } from "./books/SmallBookListItems";
import { NumberedList } from "./lists/Numbered";
import { LargeBookListItem } from "./books/LargeBookListItems";

export const AuthorIndex = () => {
  return (
    <>
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
};
