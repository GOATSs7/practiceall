import React, { useState } from "react";
import "./DynamicPassWord.css";
const DynamicPassWord = () => {
  //states
  const [password, setPassWord] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUpperCase, setIncludeUppercase] = useState(true);

  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState(true);

  // handle lenght

  const handleLength = (e) => {
    if (e.target.value >= 6 && e.target.value <= 12) {
      setPasswordLength(e.target.value);
    } else {
      setPasswordLength(6);
      alert("You can set only 12 character password");
    }
  };

  //handel genrate
  const handleGenrate = () => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";

    let validChars = "";
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeUpperCase) {
      validChars += uppercaseLetters;
    }
    if (includeLowerCase) {
      validChars += lowercaseLetters;
    }
    if (includeSpecialCharacters) {
      validChars += specialCharacters;
    }
    // for if all will be unchecked
    if (validChars === "") {
      alert("Please select at least one field.");
      return;
    }

    let genratedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      // console.log(randomIndex);
      genratedPassword += validChars[randomIndex];
    }
    setPassWord(genratedPassword);
    // console.log(genratedPassword);
  };

  return (
    <section className="landing-page border-2 border-sm border-black bg-red-400 rounded-md">
      <div className="main-div">
        <h1 className="text-4xl">Dynamic PassWord Genrator</h1>

        <div className="input-checked-fields">
          <div className="input-field">
            <label htmlFor="passwordlength">Password Length</label>
            <input
              className="border-2 rounded-sm border-black text-black"
              type="number"
              value={passwordLength}
              onChange={(e) => handleLength(e)}
            />
          </div>

          <div className="checkeditems ">
            <label htmlFor="numbers" className="text-lg">
              Include Numbers :
            </label>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              className="text-lg mx-4"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(!includeNumbers)}
            />
            <label htmlFor="uppercase" className="text-lg">
              Include Uppercase Latters :
            </label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              className="text-lg mx-4"
              checked={includeUpperCase}
              onChange={(e) => setIncludeUppercase(!includeUpperCase)}
            />
            <label htmlFor="lowercase" className="text-lg">
              Include Lowercase Latters :
            </label>
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              className="text-lg mx-4"
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(!includeLowerCase)}
            />
            <label htmlFor="characters" className="text-lg">
              Include Special Characters :
            </label>
            <input
              type="checkbox"
              name="characters"
              id="characters"
              className="text-lg mx-4"
              checked={includeSpecialCharacters}
              onChange={(e) =>
                setIncludeSpecialCharacters(!includeSpecialCharacters)
              }
            />
          </div>

          <button
            onClick={handleGenrate}
            className=" text-2xl bg-sky-600 text-white p-2 border rounded-lg ml-40"
          >
            Submit
          </button>
        </div>
        <div className="output mt-11 ml-40">
          <input
            type="text"
            value={password}
            readOnly
            className="border-2 rounded-md  border-black w-60 h-16 px-4 text-2xl text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default DynamicPassWord;
