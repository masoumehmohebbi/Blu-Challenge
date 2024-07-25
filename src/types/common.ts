import React from "react";

export type ChildrenProp = {
  children: React.ReactNode;
};

export type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  interest: never[];
  nationality: string;
  terms: boolean;
};
