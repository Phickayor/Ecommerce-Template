import React, { FC } from "react";

interface ForgotPasswordProps {
  setPage: (message: string) => void;
}

const ForgotPassword: FC<ForgotPasswordProps> = ({setPage})=>{
  return <div>ForgotPassword</div>;
}

export default ForgotPassword;
