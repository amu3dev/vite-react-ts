import React, { ReactNode } from "react";
interface AlertProps {
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  children: React.ReactNode;
  onAlertClick: () => void;
}
const Alert = ({ type, children, onAlertClick }: AlertProps) => {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onAlertClick}
      />
    </div>
  );
  //<div className="alert alert-${type}>{children}</div>;
};

export default Alert;

{
  /* <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields
  below.
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"></button>
</div>; */
}
