import { FieldValues, UseFormSetValue } from 'react-hook-form';

const checkByte = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  textLimitRef: React.RefObject<HTMLSpanElement>,
  name: string,
  setValue: UseFormSetValue<FieldValues>,
) => {
  const MAX_BYTE = 200; //최대 200바이트
  const textValue = e.target.value; //입력한 문자
  const textLength = textValue.length; //입력한 문자수
  let totalByte = 0;

  for (let i = 0; i < textLength; i++) {
    const eachChar = textValue.charAt(i);
    const uniChar = escape(eachChar); //유니코드 형식으로 변환
    if (uniChar.length > 4) {
      // 한글 : 2Byte
      totalByte += 2;
    } else {
      // 영문,숫자,특수문자
      totalByte += 1;
    }
  }
  if (textLimitRef.current) {
    if (totalByte > MAX_BYTE) {
      textLimitRef.current.innerText = totalByte.toString();
      setValue(name, e.target.value.substr(0, 99));
    } else {
      textLimitRef.current.innerText = totalByte.toString();
      setValue(name, e.target.value);
    }
  }
};

export default checkByte;
