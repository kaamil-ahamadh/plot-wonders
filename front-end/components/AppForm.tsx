"use client";
import React, { useEffect, useState } from "react";

type FormProps = {
  title: string;
  getValue: string;
  setValue: string;
  name: any;
  error?: string | null;
  input_type?: string;
};

const AppForm = ({
  title,
  getValue,
  setValue,
  name,
  error,
  input_type = "text",
}: FormProps) => {
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (error) {
      if (error.includes(title)) {
        setErrorMsg(error);
      } else {
        setErrorMsg("");
      }
    } else {
      setErrorMsg("");
    }
  }, [error]);

  return (
    <>
      {title !== "Description" ? (
        <>
          <input
            className={
              errorMsg
                ? "form-input border-red-500"
                : "form-input border-blue-600 focus:border-green-600"
            }
            placeholder={title}
            type={input_type}
            autoComplete="false"
            name={name}
            value={getValue}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          {errorMsg ? (
            <div className="text-red-500 mt-1 text-center text-[1rem]">
              {errorMsg}
            </div>
          ) : null}
        </>
      ) : (
        <>
          <textarea
            className={
              errorMsg
                ? "form-input border-red-500"
                : "form-input border-blue-600 focus:border-green-600"
            }
            placeholder={title}
            typeof="text"
            autoComplete="off"
            name={name}
            value={getValue}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          {errorMsg ? (
            <div className="text-red-500 mb-4 text-center text-[1rem]">
              {errorMsg}
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default AppForm;
