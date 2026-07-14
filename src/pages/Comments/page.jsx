import SectionTitle from "../../Components/Common/SectionTitle";
import Table from "../../Components/Common/Table/Table";
import TableHead from "../../Components/Common/Table/Elements/TableHead";
import TableHeadCell from "../../Components/Common/Table/Elements/TableHeadCell";
import { commentsData, commentstableheadrow } from "../../data/Comments";
import TableBody from "../../Components/Common/Table/Elements/TableBody";
import TableCell from "../../Components/Common/Table/Elements/TableCell";
import TableRow from "../../Components/Common/Table/Elements/TableRow";
import clsx from "clsx";
import { useState } from "react";
import EditCommentIcon from "./Components/EditCommentIcon";
import SaveCommentChanges from "./Components/SaveCommentChanges";
import DeleteCommentIcone from "./Components/DeleteCommentIcone";
import ChangeCommentPublishedIcon from "./Components/ChangeCommentPublishedIcon";
import useTitle from "../../Hooks/useTitle";

function Comments() {
  useTitle("کامنت ها");

  const [allComments, setAllComments] = useState(commentsData);

  const deleteCommentHandler = (id) => {
    const newComments = allComments.filter((comment) => comment.id !== id);
    setAllComments(newComments);
  };

  const ChangeCommentPublishedHandler = (id) => {
    const newComments = allComments.map((comment) =>
      comment.id === id
        ? { ...comment, isPublished: !comment.isPublished }
        : comment,
    );
    setAllComments(newComments);
  };

  const SaveCommentChangesHandler = (id, editedMessage) => {
    const newComments = allComments.map((comment) =>
      comment.id === id ? { ...comment, message: editedMessage } : comment,
    );
    setAllComments(newComments);
  };

  const CustomButtons = (id, editedMessage, isPublishedValue) => {
    return (
      <div className="flex gap-2">
        <DeleteCommentIcone onSubmit={() => deleteCommentHandler(id)} />
        <ChangeCommentPublishedIcon
          onSubmit={() => ChangeCommentPublishedHandler(id)}
          isPublishedValue={isPublishedValue}
        />
        <SaveCommentChanges
          onSubmit={() => SaveCommentChangesHandler(id, editedMessage)}
        />
      </div>
    );
  };

  return (
    <>
      <SectionTitle title="مدیریت نظرات وبسایت" />
      <Table
        header={{ title: "لیست نظرات" }}
        pagination={{
          items: commentsData,
          setItems: setAllComments,
          itemsPerPage: 5,
        }}
      >
        <TableHead>
          {commentstableheadrow.map((head) => (
            <TableHeadCell key={head}>{head}</TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {allComments.map((comment) => (
            <TableRow key={comment.id}>
              <TableCell>{comment.id.slice(0, 10)}...</TableCell>
              <TableCell>{comment.fullName}</TableCell>
              <TableCell>{comment.productName}</TableCell>
              <TableCell>
                <span
                  className={clsx(
                    comment.isPublished === true
                      ? "success-badge"
                      : "hiden-badge",
                    "badge",
                  )}
                >
                  {comment.isPublished === true ? "درج شده" : "پنهان شده"}
                </span>
              </TableCell>
              <TableCell>
                <EditCommentIcon
                  comment={comment}
                  CustomButtons={CustomButtons}
                  ChangeCommentPublishedHandler={ChangeCommentPublishedHandler}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Comments;
