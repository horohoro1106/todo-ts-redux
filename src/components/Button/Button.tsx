import React, { memo } from "react";
import { useAppDispatch } from "../../app/hooks";
import { changeStatus } from "../../app/reducer";
import styles from "./Button.module.css";

type ButtonProps = {
  id: number;
  newStatus: statusType;
};

export const Button = memo(function Button({
  id,
  newStatus,
  children,
}: React.PropsWithChildren<ButtonProps>) {
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.btn}
      onClick={() => dispatch(changeStatus(id, newStatus))}
    >
      {children}
    </button>
  );
});
