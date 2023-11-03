import { useState } from "react";
import SignUpInfo from "./SignUpInfo.jsx";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import TotalPage from "./TotalPage.jsx";

function Form() {
  const [page, setPage] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <SignUpInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        {!isFinished && <span>{page + 1} / 3</span>}
        {isFinished && <span>Finish</span>}
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          {!isFinished && FormTitles[page]}
          {isFinished && "Your Info"}
        </div>
        <div className="body">
          {!isFinished && PageDisplay()}
          {isFinished && <TotalPage formData={formData} />}
        </div>
        <div className="footer">
          {isFinished && (
            <button onClick={() => setIsFinished((prevState) => !prevState)}>
              Back
            </button>
          )}
          {!isFinished && (
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
          )}
          {!isFinished && (
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  setIsFinished((prevState) => !prevState);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
