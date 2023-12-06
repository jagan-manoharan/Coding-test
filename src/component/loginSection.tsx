import { ButtonBase, Checkbox, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const LoginSection = () => {
  const [checked, setChecked] = React.useState(false);

  const [credentials, setCredentials] = useState([
    {
      email: "jagan@gmail.com",
      password: "Minu@1631",
    },
    {
      email: "vimal@gmail.com",
      password: "Vimmy@5454",
    },
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailType = (event: any) => {
    setEmail(event);
  };

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const validateEmail = (mail: any) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else return false;
  };

  const passwordCheck = (password: any) => {
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regularExpression.test(password);
  };
  const passwordType = (event: any) => {
    setPassword(event);
  };
  const [validation, setValidation] = useState("");
  const [checkUpdate, setCheckUpdate] = useState(false);

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(credentials));
  }, [credentials]);

  const submit = (event: any) => {
    event.preventDefault();

    if (
      email === null ||
      password === null ||
      email === "" ||
      password === ""
    ) {
      setCheckUpdate(false);
      setValidation("Enter email and password");
    } else {
      if (
        credentials.some(
          (check) => check.email === email && check.password == password
        )
      ) {
        setCheckUpdate(true);
        setValidation("Succesully Registered");
      } else if (credentials.some((check) => check.password != password)) {
        setCheckUpdate(false);
        setValidation("Forgot Password ?");
      } 
    }
  };

  return (
    <>
      <div className="mt-16">
        <div className="flex justify-center">
          <img src="/assets/images/Mazenet Logo PNG 1.png" />
        </div>
      </div>
      <div className="text-[#0768a9f0] openSansItalicBold flex justify-center py-12 text-2xl">
        Login to your account
      </div>
      <div className="mx-20">
        <TextField
          className="w-full"
          InputProps={{
            sx: {
              borderRadius: 40,
              fontFamily: "openSansBold",
              fontSize: 10,
              padding: 1.5,
            },
          }}
          placeholder="Your email address"
          helperText={
            email?.length >= 4 && !validateEmail(email) ? "Invalid Mail Id" : ""
          }
          error={email?.length >= 4 && !validateEmail(email)}
          onChange={(event) => emailType(event.target.value)}
        />
        <div className="mt-10">
          <TextField
            className="w-full"
            InputProps={{
              sx: {
                borderRadius: 40,
                fontFamily: "openSansBold",
                fontSize: 10,
                padding: 1.5,
              },
            }}
            placeholder="********"
            helperText={
              password?.length >= 4 && !passwordCheck(password)
                ? "Atleast have 1 special character, Upper Case & numbers"
                : ""
            }
            error={password?.length >= 4 && !passwordCheck(password)}
            onChange={(event) => passwordType(event.target.value)}
          />
        </div>
        <div className="mt-6 flex flex-row">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <div className="openSansMedium text-md flex justify-center items-center">
            Remember username
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <ButtonBase className="rounded-full">
            <div
              className={`${
                isHover ? "bg-[#ffcc00]" : "bg-[#e1e1ea]"
              }  rounded-full p-7 w-[200px] h-[2px] flex items-center justify-center openSansExtraBold text-xs`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={submit}
            >
              SUBMIT
            </div>
          </ButtonBase>
        </div>
        <div
          className={`flex justify-center openSansMedium ${
            checkUpdate ? "text-green-500" : "text-red-500"
          }  mt-3`}
        >
          {validation != null && validation != "" ? validation : null}
        </div>
      </div>
    </>
  );
};
export default LoginSection;
