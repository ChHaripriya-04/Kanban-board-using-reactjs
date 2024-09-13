import React from "react";
import profile from "../assets/profile.png";
import profile1 from "../assets/profile1.png";
import profile4 from "../assets/profile4.jpeg";
import profile5 from "../assets/profile5.jpeg";
import profile6 from "../assets/profile6.png";
import profile7 from "../assets/profile7.png";

const Card = ({
  id,
  title,
  tag,
  userId,
  userData,
  status,
  priority,
  grouping,
  ordering,
  statusMapping,
}) => {
  const user = userData.find((user) => user.id === userId);

  return (
    <div className="card">
      <div className="card-header">
        <div className="status-heading">
          {grouping === "users" || grouping === "priority" ? (
            statusMapping[id] === "Todo" ? (
              <i className="bx bx-circle" id="todo"></i>
            ) : statusMapping[id] === "In progress" ? (
              <i className="bx bx-adjust" id="progress"></i>
            ) : statusMapping[id] === "Backlog" ? (
              <i className="bx bx-task-x" id="backlog"></i>
            ) : statusMapping[id] === "Done" ? (
              <i className="bx bxs-check-circle" id="done"></i>
            ) : (
              <i className="bx bxs-x-circle" id="cancel"></i>
            )
          ) : null}
          <p>{id}</p>
        </div>
        {grouping !== "users" ? (
          <div
            className={
              user && !user.available
                ? "user-avatar-unavailable"
                : "user-avatar"
            }
          >
            <img
              src={
                userId === "usr-1"
                  ? profile1
                  : userId === "usr-2"
                  ? profile6
                  : userId === "usr-3"
                  ? profile7
                  : userId === "usr-4"
                  ? profile5
                  : userId === "usr-5"
                  ? profile4
                  : profile
              }
              className={
                user && !user.available
                  ? "user-avatar-unavailable"
                  : "user-avatar"
              }
              alt="user"
            />
          </div>
        ) : null}
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-footer">
        {grouping !== "priority" ? (
          <div className="feature-container">
            {priority === "0" ? (
              <i className="bx bx-dots-horizontal-rounded"></i>
            ) : priority === "1" ? (
              <i className="bx bx-signal-2"></i>
            ) : priority === "2" ? (
              <i className="bx bx-signal-3"></i>
            ) : priority === "3" ? (
              <i className="bx bx-signal-4"></i>
            ) : (
              <i className="bx bxs-message-square-error"></i>
            )}
          </div>
        ) : null}
        {tag?.map((value, index) => (
          <div className="feature-container" key={index}>
            <div className="alert-icon"></div>
            <div className="feature-request">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
