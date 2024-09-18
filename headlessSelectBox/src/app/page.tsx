"use client";

import SelectBox from "@/_components/common/selectbox/SelectBox";

export default function Home() {
  const styles = {
    container: "relative",
    selectButton:
      "border-[1px] border-gray-400 rounded-[8px] p-[10px] w-[200px] ",
    optionUl:
      "absolute left-0 top-[60px] border-[1px] border-gray-400 rounded-[8px] p-[10px] w-[200px]",
    optionLi: "hover:bg-gray-400 rounded-[4px] p-[4px]",
    optionButton: "w-full h-full",
    animation: "animate-fadeIn",
  };

  const styles2 = {
    container: "relative",
    selectButton: "border-[2px] border-gray-100 p-[10px] w-[200px] ",
    optionUl:
      "absolute left-0 top-[60px] border-[1px] border-red-400  p-[10px] w-[200px]",
    optionLi: "hover:bg-red-400 rounded-[4px] p-[4px]",
    optionButton: "w-full h-full",
    animation: "animate-slide",
  };

  const styles3 = {
    container: "relative",
    selectButton: "border-[2px] border-gray-100 p-[10px] w-[200px] ",
    optionUl:
      "absolute left-0 top-[60px] border-[1px] border-blue-400  p-[10px] w-[200px]",
    optionLi: "hover:bg-blue-400 rounded-[4px] p-[4px]",
    optionButton: "w-full h-full",
    animation: "animate-wave",
  };
  const styles4 = {
    container: "relative",
    selectButton: "border-[2px] border-gray-100 p-[10px] w-[200px] ",
    optionUl:
      "absolute left-0 top-[60px] border-[1px] border-orange-400  p-[10px] w-[200px]",
    optionLi: "hover:bg-orange-400 rounded-[4px] p-[4px]",
    optionButton: "w-full h-full",
    animation: "animate-wave",
  };

  //리스폰스
  type Option = {
    id: number;
    name: string;
    date: string;
    color: string;
    state: string;
  };

  type Response = {
    data: Option[];
  };

  type dataAccessorReturnType = Option[];

  const dataAccessor = (response: Response): dataAccessorReturnType => {
    //내가 제공해주는 인터페이스 혹은 기능을 사용하고싶으면 이거쓰셈 ㅋㅋ 아니면 니가 뒷단에 안봐도될 코드까지 봐야됨.
    //이거 만드는 이유가 외부에서 뒷단 코드에서 사용하는 타입을 정확히 알 수 있음.

    //서버에서 응답받은 데이터를 제네릭타입으로 확인할 수 있다.

    //서버에서 응답받은 데이터가 어떻게 생겼는지 모르기때문에 여기서 데이터를 확인하고 원하는 부분을 리턴해준다.
    const options = response.data;

    return options;
  };

  type ProcessedOption = Omit<Option, "id"> & {
    id: string;
  };

  type extractOptionStringReturnType = ProcessedOption[];

  const extractOptionString = (
    options: dataAccessorReturnType
  ): extractOptionStringReturnType => {
    // 서버에서 응답받은 데이터에서 원하는 부분을 추출한 데이터를 받아들이고
    // 내가 사용하고 싶은 형태의 데이터로 재가공하여 상태를 설정한다.
    const processedData = options.map((option) => {
      return { ...option, id: option.id.toString() };
    });

    return processedData;
  };

  return (
    <div>
      <main></main>

      <div className="flex">
        <SelectBox<
          Response,
          dataAccessorReturnType,
          extractOptionStringReturnType
        >
          styles={styles}
          apiUrl={"/api/fruits"}
          method={"GET"}
          dataAccessor={dataAccessor}
          extractOptionString={extractOptionString}
        ></SelectBox>
        <SelectBox<
          Response,
          dataAccessorReturnType,
          extractOptionStringReturnType
        >
          styles={styles2}
          apiUrl={"/api/fruits"}
          method={"GET"}
          dataAccessor={dataAccessor}
          extractOptionString={extractOptionString}
        ></SelectBox>
        <SelectBox<
          Response,
          dataAccessorReturnType,
          extractOptionStringReturnType
        >
          styles={styles3}
          apiUrl={"/api/fruits"}
          method={"GET"}
          dataAccessor={dataAccessor}
          extractOptionString={extractOptionString}
        ></SelectBox>
        <SelectBox<
          Response,
          dataAccessorReturnType,
          extractOptionStringReturnType
        >
          styles={styles4}
          apiUrl={"/api/name"}
          method={"GET"}
          dataAccessor={dataAccessor}
          extractOptionString={extractOptionString}
        ></SelectBox>
      </div>
      <footer></footer>
    </div>
  );
}
