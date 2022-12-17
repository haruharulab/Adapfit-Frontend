import * as S from "./style";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
export default function Resume() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [File1, setFile1] = useState<File | null>(null);
  const [File2, setFile2] = useState<File | null>(null);
  const [File3, setFile3] = useState<File | null>(null);
  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);
  const fileInputRef3 = useRef<HTMLInputElement>(null);
  const [IsFilled, setIsFilled] = useState(false);
  const check = () => {
    if (Name == "") return false;
    if (Email == "") return false;
    if (PhoneNumber == "") return false;
    if (File1 == null) return false;
    if (File2 == null) return false;
    return true;
  };
  useEffect(() => {
    setIsFilled(check());
  }, [Name, Email, PhoneNumber, File1, File2, File3]);
  const Submit = () => {
    if (!IsFilled) {
      alert("전부 입력 해주세요");
      return false;
    }
    let formData = new FormData();
    formData.append("name", Name);
    formData.append("email", Email);
    formData.append("phoneNumber", PhoneNumber);
    if (File1 != null) formData.append("resume", File1);
    if (File2 != null) formData.append("portfolio", File2);
    if (File3 != null) formData.append("etc", File3);
    axios
      .post("http://13.209.36.143/resume:8080", formData)
      .then(() => alert("fa"))
      .catch((error) => alert(error));
  };
  return (
    <S.Contain>
      <h1>지원서 작성</h1>
      <span>지원자 정보</span>
      이름
      <S.TextArea
        placeholder={"이름을 입려해주세요"}
        onChange={(e) => setName(e.target.value)}
      />
      이메일
      <S.TextArea
        placeholder={"이메일을 입려해주세요"}
        onChange={(e) => setEmail(e.target.value)}
      />
      전화번호
      <S.TextArea
        placeholder={"전화번호를 입려해주세요"}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <span>제출 서류</span>
      이력서
      <S.FileInput onClick={() => fileInputRef1.current?.click()}>
        {File1 != null ? "이력서 첨부 완료!" : "이력서를 첨부해주세요"}
      </S.FileInput>
      포트폴리오
      <S.FileInput onClick={() => fileInputRef2.current?.click()}>
        {File2 != null
          ? "포트폴리오 첨부 완료!"
          : "자신의 포트폴리오를 첨부해주세요\n"}
      </S.FileInput>
      기타
      <S.FileInput onClick={() => fileInputRef3.current?.click()}>
        {File3 != null
          ? "기타 제출사항 첨부 완료!"
          : "기타 제출사항이 있으면 첨부해주세요"}
      </S.FileInput>
      <input
        ref={fileInputRef1}
        type="file"
        style={{ display: "none" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (!file) return;
          setFile1(file);
        }}
      />
      <input
        ref={fileInputRef2}
        type="file"
        style={{ display: "none" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (!file) return;
          setFile2(file);
        }}
      />
      <input
        ref={fileInputRef3}
        type="file"
        style={{ display: "none" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (!file) return;
          setFile3(file);
        }}
      />
      <S.SubmitBtn isFilled={IsFilled} onClick={() => Submit()}>
        제출하기
      </S.SubmitBtn>
    </S.Contain>
  );
}
